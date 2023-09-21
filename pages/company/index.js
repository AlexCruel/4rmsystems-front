import cn from "./styles.module.scss";
import Information from "@/components/Information";
import Partner from "@/components/Partner";
import BlogNews from "@/components/Blog/BlogNews";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import link from "../../public/icons/link.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getBlogsCompData,
    getInfoData,
    getInformationData, getModalData, getNewsCompData,
    getPageData,
    getPartnerData
} from "@/utils/functions";
import Head from "next/head";
import PageContactForm from "@/components/Forms/PageContactForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';
import {setLocalizationCookie} from "@/utils/localization";
import BlogComponent from "@/components/Blog";
import {useState} from "react";

export const getServerSideProps = async ({resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const lang = getCookie('lang', {req, res});

    const info = await getInfoData(lang);
    const information = await getInformationData("main", lang);
    const partner = await getPartnerData(lang);
    const page = await getPageData("company", lang);
    const newsComponent = await getNewsCompData(lang);
    const blogsComponent = await getBlogsCompData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);

    return {
        props: {
            ...info,
            ...information,
            ...partner,
            ...page,
            ...newsComponent,
            ...blogsComponent,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
};

const Company = ({ ...props }) => {
    const [blogState, setBlogState] = useState('news');

    const blogStateHandler = (type) => {
        setBlogState(type);
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
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.page.seo_h1}</h1>
                    <Breadcrumbs title={props.page.name} />
                </div>
                <div className={cn.container__text}>
                    {parse(props.page.pre_content)}
                </div>
                <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt={props.page.banner.alt} />
                <div className={cn.container__text}>
                    {parse(props.page.content)}
                </div>
                <Information info={props.information} />
                <Partner partner={props.partner} />
                <BlogComponent
                    blogState={blogState}
                    blogStateHandler={blogStateHandler}
                    blogsComponent={props.blogsComponent}
                    newsComponent={props.newsComponent}
                />
                <div className={cn.container__text}>
                    <ul className={cn.container__text_links}>
                        {props.page.links?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`${item.link}`}>{item.name}
                                        <Image src={link} alt="Link" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Company;