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

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("faq");
    const modalCall = await getModalData('call_form');

    return {
        props: {
            ...info,
            ...page,
            modalCall
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
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.page.name}</h1>
                    <Breadcrumbs title={props.page.name} />
                </div>
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <div className={cn.container__text}>
                    {
                        props.page.accordion.map((item, index) => {
                            return (
                                <div key={index} className={cn.accordion} onClick={activeTabHandler} id={index.toString()}>
                                    <hr />
                                    <div className={cn.accordion__text_block} onClick={activeTabHandler} id={index.toString()}>
                                        <div className={cn.tab_title} onClick={activeTabHandler} id={index.toString()}>
                                            {item.title}
                                        </div>
                                        <Image
                                            src={activeTab.includes(index.toString()) ? chevron_up : chevron_right}
                                            onClick={activeTabHandler} id={index.toString()}
                                            alt="Chevron" />
                                    </div>
                                    <div className={activeTab.includes(index.toString()) ? "" : cn.tab_invisible}>
                                        {parse(item.description)}
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