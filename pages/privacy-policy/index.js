import {getInfoData, getModalData, getPageData} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.module.scss";
import parse from "html-react-parser";
import Breadcrumbs from "@/components/Breadcrumbs";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("privacy-policy");
    const modalCall = await getModalData('call_form');

    return {
        props: {
            ...info,
            ...page,
            modalCall
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
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.page.seo_h1}</h1>
                    <Breadcrumbs title={props.page.name} />
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