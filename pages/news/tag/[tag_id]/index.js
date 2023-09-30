import {
    getBlogTagNameData,
    getInfoData, getModalData, getNewsTagsData, getNPinnedSecData, getPageData,
    getTagNewsData, getTagNewsPageData,
} from "@/utils/functions";
import {useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContactForm from "@/components/Forms/PageContactForm";
import Pagination from "@/components/Pagination";
import cn from "@/pages/news/styles.module.scss";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import useResize from "@/hooks/useResize";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { tag_id } = params;
    const lang = getCookie('lang', {req, res});

    const { tagNews } = await getTagNewsData(tag_id, lang);
    const tagNewsPage = await getTagNewsPageData(tag_id, 1, lang)
    const info = await getInfoData(lang);
    const newsTags = await getNewsTagsData(lang);
    const nPinnedSec = await getNPinnedSecData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const tagName = await getBlogTagNameData(tag_id, lang);
    const page = await getPageData("news", lang);

    return {
        props: {
            tag_id,
            ...info,
            ...newsTags,
            blogDataLength: tagNews.length,
            ...tagNewsPage,
            ...nPinnedSec,
            ...tagName,
            ...page,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const NewsTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);
    const lang = getCookie('lang');
    const size = useResize();

    return (
        <>
            <Head>
                <title>{props.tagName.seo_title_news}</title>
                <meta name="keywords" content={props.tagName.seo_key_news} />
                <meta name="description" content={props.tagName.seo_description_news} />
                <meta property="og:title" content={props.tagName.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.tagName.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/NewsArticle">
                <h1 itemProp="headline">{props.tagName.seo_h1_news}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="news" tags={props.newsTags} />
                <div className={cn.container__pinned} itemScope itemType="https://schema.org/ImageObject">
                    <div className={cn.image}>
                        <img
                            itemProp="contentUrl"
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.nPinnedSec.image.url_pinned}`}
                            alt={props.nPinnedSec.image.alt}
                            //width={570}
                            //height={361}
                            //layout={size[0] <= 1200 ? "responsive" : ""}
                        />
                    </div>
                    <div className={cn.pinned}>
                        <div className={cn.pinned__title} itemProp="headline">
                            {props.nPinnedSec.title}
                        </div>
                        <div className={cn.pinned__text} itemProp="text">
                            {parse(props.nPinnedSec.pre_content)}
                        </div>
                        <Link href={`/news/${props.nPinnedSec.slug}`}>
                            <button suppressHydrationWarning>
                                {lang === "ENG" ? "More details" : "Подробнее"}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className={cn.container__cards} itemScope itemType="https://schema.org/ImageObject">
                    {props.tagNewsPage.map((item, index) => {

                        const parsedItem = JSON.parse(item.image)

                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <div className={cn.cards_card_image}>
                                    <img
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${parsedItem.url}`}
                                        //width={340}
                                        //height={270}
                                        //layout="responsive"
                                        alt={parsedItem.alt} />
                                </div>
                                <div className={cn.cards_card_title} itemProp="headline">{item.title}</div>
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
                typePage={`news/tag/${props.tag_id}`}
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

export default NewsTag;