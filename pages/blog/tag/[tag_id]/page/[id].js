import {useState} from "react";
import {
    getBlogTagNameData,
    getBlogTagsData,
    getBPinnedSecData,
    getInfoData, getModalData, getPageData,
    getTagBlogsData, getTagBlogsPageData
} from "@/utils/functions";
import Header from "@/components/Header";
import cn from "@/pages/blog/styles.module.scss";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import useResize from "@/hooks/useResize";
import {createTagSeoTemplate} from "@/utils/seoTemplate";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { tag_id, id } = params;
    const lang = getCookie('lang', {req, res});

    const { tagBlogs } = await getTagBlogsData(tag_id, lang);
    const tagBlogsPage = await getTagBlogsPageData(tag_id, id, lang);
    const info = await getInfoData(lang);
    const blogTags = await getBlogTagsData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const page = await getPageData("blog", lang);
    const { tagName } = await getBlogTagNameData(tag_id, lang);
    const seo = await createTagSeoTemplate(tagName, 'tags_blog', lang);

    if (tagBlogsPage.tagBlogsPage.length === 0 || id <= 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            id,
            seo,
            tag_id,
            blogDataLength: tagBlogs.length,
            ...info,
            ...blogTags,
            ...tagBlogsPage,
            ...page,
            tagName,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const BlogPageTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);
    const lang = getCookie('lang');
    const size = useResize();

    return (
        <>
            <Head>
                {/*<title>{props.tagName.seo_title_blog} - Страница {props.id}</title>*/}
                <title>{props.seo.seo_title} - Страница {props.id}</title>
                {/*<meta name="keywords" content={props.tagName.seo_key_blog} />*/}
                {/*<meta property="og:title" content={`${props.tagName.seo_h1_blog}`} />*/}
                <meta name="keywords" content={props.seo.seo_key} />
                <meta name="description" content={props.seo.seo_description} />
                <meta property="og:title" content={props.seo.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                {/*<meta property="og:description" content={props.tagName.seo_description_blog} />*/}
                <meta property="og:description" content={props.seo.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/blog/tag`} />
            </Head>
            <Header phones={props.info.phone_items_header} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/BlogPosting">
                <h1 itemProp="headline">{props.tagName.seo_h1_blog}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="blog" tags={props.blogTags} />
                <div className={cn.container__cards}>
                    {props.tagBlogsPage.map((item, index) => {

                        const parsedItem = JSON.parse(item.image)

                        return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
                                <div className={cn.cards_card_image}>
                                    <img
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${parsedItem.url}`}
                                        //width={340}
                                        //height={270}
                                        //layout="responsive"
                                        alt={parsedItem.alt} />
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
                typePage={`blog/tag/${props.tag_id}`}
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

export default BlogPageTag;