import {
    getBlogCardsData,
    getBlogSingleData, getBSingleTagsData,
    getInfoData, getModalData, getPageData
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Socials from "@/components/Socials";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import cn from "./styles[id].module.scss";
import BlogCards from "@/components/Blog/BlogCards";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import {createSeoTemplate} from "@/utils/seoTemplate";
import {useEffect} from "react";
import {createLightGallery} from "@/utils/lightGallery";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const { blogSingle } = await getBlogSingleData(id, lang);

    if (!blogSingle) {
        return {
            notFound: true
        }
    }

    const seo = await createSeoTemplate(blogSingle, 'blog', lang);
    const info = await getInfoData(lang);
    const blogCards = await getBlogCardsData(id, lang);
    const bSingleTags = await getBSingleTagsData(blogSingle.id, lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const page = await getPageData("blog", lang);

    return {
        props: {
            blogSingle,
            seo,
            ...info,
            ...blogCards,
            ...bSingleTags,
            ...page,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl,
            lang
        }
    }
}

const Blog = ({ ...props }) => {
    useEffect(() => {
        createLightGallery();
    }, []);

    return (
        <>
            <Head>
                <title>{props.seo.seo_title}</title>
                <meta name="keywords" content={props.seo.seo_key} />
                <meta name="description" content={props.seo.seo_description} />
                <meta property="og:title" content={props.seo.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.blogSingle.image.url}`} />
                <meta property="og:description" content={props.seo.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items_header} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/BlogPosting">
                <div className={cn.container__text}>
                    <h1 itemProp="headline">{props.blogSingle.seo_h1}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.blogSingle.title} />
                </div>
                <div className={cn.container__text}>
                    <Tags type="blog" tags={props.bSingleTags} />
                    <span itemProp="articleBody">{parse(props.blogSingle.content)}</span>
                    <div className={cn.container__text_date} itemProp="datePublished">{props.blogSingle.created_at.split('T')[0]}</div>
                    <Socials lang={props.lang} socials={props.socials} resolvedUrl={props.resolvedUrl} text={props.blogSingle.title} />
                </div>
            </div>
            <BlogCards blogs={props.blogCards} lang={props.lang} />
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