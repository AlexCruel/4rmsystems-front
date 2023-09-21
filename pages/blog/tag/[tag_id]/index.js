import {useState} from "react";
import {
    getBlogTagNameData,
    getBlogTagsData,
    getBPinnedSecData,
    getInfoData, getModalData, getPageData, getTagBlogsData, getTagBlogsPageData
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

export const getServerSideProps = async ({params, resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const { tag_id } = params;
    const lang = getCookie('lang', {req, res});

    const { tagBlogs } = await getTagBlogsData(tag_id, lang);
    const tagBlogsPage = await getTagBlogsPageData(tag_id, 1, lang);
    const info = await getInfoData(lang);
    const blogTags = await getBlogTagsData(lang);
    const bPinnedSec = await getBPinnedSecData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const page = await getPageData("blog", lang);
    const tagName = await getBlogTagNameData(tag_id, lang);

    return {
        props: {
            tag_id,
            ...info,
            ...blogTags,
            ...bPinnedSec,
            blogDataLength: tagBlogs.length,
            ...tagBlogsPage,
            ...bPinnedSec,
            ...page,
            ...tagName,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const BlogTags = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);
    const lang = getCookie('lang');

    return (
        <>
            <Head>
                <title>{props.tagName.seo_title_blog}</title>
                <meta name="keywords" content={props.tagName.seo_key_blog} />
                <meta name="description" content={props.tagName.seo_description_blog} />
                <meta property="og:title" content={props.tagName.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.tagName.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/BlogPosting">
                <h1 itemProp="headline">{props.tagName.seo_h1_blog}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="blog" tags={props.blogTags} />
                <div className={cn.container__pinned} itemScope itemType="https://schema.org/ImageObject">
                    <div className={cn.image}>
                        <Image
                            itemProp="contentUrl"
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.bPinnedSec.image.url}`}
                            alt={props.bPinnedSec.image.alt}
                            width={570}
                            height={361}
                        />
                    </div>
                    <div className={cn.pinned}>
                        <div className={cn.pinned__title} itemProp="headline">
                            {props.bPinnedSec.title}
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
                    {props.tagBlogsPage.map((item, index) => {

                        const parsedItem = JSON.parse(item.image)

                        return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
                                <div className={cn.cards_card_image}>
                                    <Image
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${parsedItem.url}`}
                                        width={340}
                                        height={270}
                                        alt={parsedItem.alt} />
                                </div>
                                <div className={cn.cards_card_title} itemProp="headline">{item.title}</div>
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

export default BlogTags;