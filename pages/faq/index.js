import cn from "./styles.module.scss";
import {getInfoData, getPageData} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useState} from "react";
import parse from "html-react-parser";
import chevron_right from "../../public/icons/chevron_right.svg";
import chevron_up from "../../public/icons/chevron_up.svg";
import Image from "next/image";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("faq");

    return {
        props: {
            ...info,
            ...page,
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
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.page.name}</h1>
                </div>
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <div className={cn.container__text}>
                    <hr />
                    <div>
                        <div className={cn.container__text_block}>
                            <div className={cn.tab_title} onClick={activeTabHandler} id="1">What is Lorem Ipsum?</div>
                            <Image src={activeTab.includes("1") ? chevron_up : chevron_right} alt="Chevron" />
                        </div>
                        <p className={activeTab.includes("1") ? "" : cn.tab_invisible}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <hr />
                    <div>
                        <div className={cn.container__text_block}>
                            <div className={cn.tab_title} onClick={activeTabHandler} id="2">What is Lorem Ipsum?</div>
                            <Image src={activeTab.includes("2") ? chevron_up : chevron_right} alt="Chevron" />
                        </div>
                        <p className={activeTab.includes("2") ? "" : cn.tab_invisible}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <hr />
                    <div>
                        <div className={cn.container__text_block}>
                            <div className={cn.tab_title} onClick={activeTabHandler} id="3">What is Lorem Ipsum?</div>
                            <Image src={activeTab.includes("3") ? chevron_up : chevron_right} alt="Chevron" />
                        </div>
                        <p className={activeTab.includes("3") ? "" : cn.tab_invisible}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </div>
                    <hr />
                </div>
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default FAQ;