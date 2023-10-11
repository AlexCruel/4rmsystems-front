import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getInfoData, getModalData, getNewsCardsData,
    getNewsSingleData, getNSingleTagsData, getPageData
} from "@/utils/functions";
import PageContactForm from "@/components/Forms/PageContactForm";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Socials from "@/components/Socials";
import cn from "./styles[id].module.scss";
import NewsCards from "@/components/Blog/NewsCards";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const { newsSingle } = await getNewsSingleData(id, lang);
    const info = await getInfoData(lang);
    const newsCards = await getNewsCardsData(lang);
    const nSingleTags = await getNSingleTagsData(newsSingle.id, lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const page = await getPageData("news", lang);

    return {
        props: {
            newsSingle,
            ...info,
            ...newsCards,
            ...nSingleTags,
            ...page,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl,
            lang
        }
    }
}

const News = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>{props.newsSingle.seo_title}</title>
                <meta name="keywords" content={props.newsSingle.seo_key} />
                <meta name="description" content={props.newsSingle.seo_description} />
                <meta property="og:title" content={props.newsSingle.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.newsSingle.image.url}`} />
                <meta property="og:description" content={props.newsSingle.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/NewsArticle">
                <div className={cn.container__text}>
                    <h1 itemProp="headline">{props.newsSingle.seo_h1}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.newsSingle.title} />
                </div>
                <div className={cn.container__text}>
                    <Tags type="news" tags={props.nSingleTags} />
                    <span itemProp="articleBody">{parse(props.newsSingle.content)}</span>
                    <div className={cn.container__text_date} itemProp="datePublished" content={props.newsSingle.created_at.split('T')[0]}>{props.newsSingle.created_at.split('T')[0]}</div>
                    <Socials socials={props.socials} resolvedUrl={props.resolvedUrl} text={props.newsSingle.title} />
                </div>
            </div>
            <NewsCards news={props.newsCards} lang={props.lang} />
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default News;