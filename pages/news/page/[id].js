import {
    getInfoData, getModalData,
    getNewsData,
    getNewsPageData,
    getNewsTagsData,
    getNPinnedSecData,
    getPageData
} from "@/utils/functions";
import {useEffect, useState} from "react";
import Header from "@/components/Header";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import cn from "@/pages/news/styles.module.scss";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import useResize from "@/hooks/useResize";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const newsPage = await getNewsPageData(id, lang);
    const { news } = await getNewsData(lang);
    const info = await getInfoData(lang);
    const page = await getPageData("news", lang);
    const newsTags = await getNewsTagsData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);

    if (newsPage.newsPage.length === 0 || id <= 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            id,
            ...newsPage,
            blogDataLength: news.length,
            ...info,
            ...page,
            ...newsTags,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const NewsPage = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);
    const lang = getCookie('lang');
    const size = useResize();

    return (
        <>
            <Head>
                <title>{props.page.seo_title} - Страница {props.id}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
                <meta property="og:title" content={`${props.page.seo_h1}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.page.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/news`} />
            </Head>
            <Header phones={props.info.phone_items_header} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/NewsArticle">
                <h1 itemProp="headline">{props.page.seo_h1}</h1>
                <Breadcrumbs title={props.page.name} />
                <Tags type="news" tags={props.newsTags} />
                <div className={cn.container__cards} itemScope itemType="https://schema.org/ImageObject">
                    {props.newsPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <div className={cn.cards_card_image}>
                                    <img
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                        //width={340}
                                        //height={270}
                                        //layout="responsive"
                                        alt={item.image.alt} />
                                </div>
                                <div className={cn.cards_card_title} itemProp="headline">
                                    <Link href={`/news/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                </div>
                                <div className={cn.cards_card_date} itemProp="dateCreated">{item.created_at.split('T')[0]}</div>
                                <Link href={`/news/${item.slug}`}>
                                    <button suppressHydrationWarning>
                                        {lang === "ENG" ? "More details" : "Подробнее"}
                                    </button>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
            <Pagination
                blogDataLength={props.blogDataLength}
                blogsPerPage={blogsPerPage}
                paginate={paginate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                typePage="news"
            />
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default NewsPage;