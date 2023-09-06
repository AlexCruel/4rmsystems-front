import {getInfoData, getPageData } from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.module.scss";
import parse from "html-react-parser";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("privacy-policy");

    return {
        props: {
            ...info,
            ...page,
        }
    }
};

const PrivacyPolicy = ({ ...props }) => {
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
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default PrivacyPolicy;