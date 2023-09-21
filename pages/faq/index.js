import cn from "./styles.module.scss";
import {getInfoData, getModalData, getPageData} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useState} from "react";
import parse from "html-react-parser";
import chevron_right from "../../public/icons/chevron_right.svg";
import chevron_up from "../../public/icons/chevron_up.svg";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

export const getServerSideProps = async ({resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const lang = getCookie('lang', {req, res});

    const info = await getInfoData(lang);
    const page = await getPageData("faq", lang);
    const modalCall = await getModalData('call_form', lang);

    return {
        props: {
            ...info,
            ...page,
            modalCall,
            resolvedUrl
        }
    }
};

const FAQ = ({ ...props }) => {
    const [activeTab, setActiveTab] = useState([]);

    const activeTabHandler = (event) => {
        if (!activeTab.includes(event.target.id)) {
            setActiveTab([...activeTab, event.target.id]);
        } else {
            let index = activeTab.indexOf(event.target.id);
            setActiveTab([...activeTab.slice(0, index), ...activeTab.slice(index + 1)]);
        }
    }

    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
                <meta property="og:title" content={props.page.seo_h1} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.page.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/FAQPage">
                <div className={cn.container__text}>
                    <h1>{props.page.seo_h1}</h1>
                    <Breadcrumbs title={props.page.name} />
                </div>
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <div className={cn.container__text}>
                    {
                        props.page.accordion?.map((item, index) => {
                            return (
                                <div key={index} className={cn.accordion} onClick={activeTabHandler} id={index.toString()} itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
                                    <hr />
                                    <div className={cn.accordion__text_block} onClick={activeTabHandler} id={index.toString()}>
                                        <div className={cn.tab_title} onClick={activeTabHandler} id={index.toString()} itemProp="name">
                                            {item.title}
                                        </div>
                                        <Image
                                            src={activeTab.includes(index.toString()) ? chevron_up : chevron_right}
                                            onClick={activeTabHandler} id={index.toString()}
                                            alt="Chevron" />
                                    </div>
                                    <div className={activeTab.includes(index.toString()) ? "" : cn.tab_invisible} itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                                        <span itemProp="text">{parse(item.description)}</span>
                                    </div>
                                </div>
                            );
                        })
                    }
                    <hr />
                </div>
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default FAQ;