import cn from "./styles.module.scss";
import {
    getBlogData, getBlogPageData, getBlogTagsData,
    getBPinnedSecData,
    getInfoData, getModalData,
    getPageData
} from "@/utils/functions";
import {useState} from "react";
import Head from "next/head";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import useResize from "@/hooks/useResize";

export const getServerSideProps = async ({resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const lang = getCookie('lang', {req, res});

    const info = await getInfoData(lang);
    const page = await getPageData("blog", lang);
    const { blog } = await getBlogData(lang);
    const blogPage = await getBlogPageData(1, lang);
    const blogTags = await getBlogTagsData(lang);
    const bPinnedSec = await getBPinnedSecData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);

    return {
        props: {
            ...info,
            ...page,
            ...blogTags,
            ...blogPage,
            ...bPinnedSec,
            blogDataLength: blog.length,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const Blog = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);
    const lang = getCookie('lang');
    const size = useResize();

    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
                <meta property="og:title" content={props.page.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.page.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items_header} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/BlogPosting">
                <h1 itemProp="headline">{props.page.seo_h1}</h1>
                <Breadcrumbs title={props.page.name} />
                <Tags type="blog" tags={props.blogTags} />
                <div className={cn.container__pinned} itemScope itemType="https://schema.org/ImageObject">
                    <div className={cn.image}>
                        <img
                            itemProp="contentUrl"
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.bPinnedSec.image?.url_pinned}`}
                            alt={props.bPinnedSec.image?.alt_pinned}
                            //width={570}
                            //height={361}
                            //layout={size[0] <= 1200 ? "responsive" : ""}
                        />
                    </div>
                    <div className={cn.pinned}>
                        <div className={cn.pinned__title} itemProp="headline">
                            <Link href={`/blog/${props.bPinnedSec.slug}`}>
                                {props.bPinnedSec.title}
                            </Link>
                        </div>
                        <div className={cn.pinned__text} itemProp="text">
                            {parse(props.bPinnedSec.pre_content)}
                        </div>
                        <Link href={`/blog/${props.bPinnedSec.slug}`}>
                            <button suppressHydrationWarning>
                                {lang === "ENG" ? "More details" : "Подробнее"}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={cn.container__cards}>
                    {props.blogPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
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
                                    <Link href={`/blog/${item.slug}`}>
                                        {item.title}
                                    </Link>
                                </div>
                                <div className={cn.cards_card_date} itemProp="dateCreated">{item.created_at.split('T')[0]}</div>
                                <Link href={`/blog/${item.slug}`}>
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
                typePage="blog"
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

export default Blog;