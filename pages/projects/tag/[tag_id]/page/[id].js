import {
    getInfoData, getModalData,
    getPageData, getProjectsTagNameData, getProjectsTagsData,
    getTagPageData,
    getTagProjectsData,
    getTagsData,
    getTagsProjectsCountData
} from "@/utils/functions";
import Header from "@/components/Header";
import cn from "@/pages/projects/styles.module.scss";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { tag_id, id } = params;
    const lang = getCookie('lang', {req, res});

    const { tagProjects } = await getTagProjectsData(tag_id, lang);
    const { tagPage } = await getTagPageData(tag_id, id, lang);
    const info = await getInfoData(lang);
    const page = await getPageData("projects", lang);
    const projectsTags = await getProjectsTagsData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const tagName = await getProjectsTagNameData(tag_id, lang);

    if (tagPage.length === 0 || id <= 0) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            id,
            tag_id,
            projectsPage: tagPage,
            blogDataLength: tagProjects.length,
            ...info,
            ...page,
            ...projectsTags,
            ...tagName,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const ProjectsPageTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Head>
                <title>{props.tagName.seo_title} - Страница {props.id}</title>
                <meta name="keywords" content={props.tagName.seo_key} />
                <meta name="description" content={props.tagName.seo_description} />
                <meta property="og:title" content={`${props.tagName.seo_h1}`} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.tagName.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
                <link rel="canonical" href={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}/projects/tag`} />
            </Head>
            <Header phones={props.info.phone_items_header} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Article">
                <h1 itemProp="headline">{props.tagName.seo_h1}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="projects" tags={props.projectsTags} />
                <div className={cn.container__cards} itemProp="articleBody">
                    {props.projectsPage.map((item, index) => {

                        const parsedItem = JSON.parse(item.image)

                        return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
                                <Link href={`/projects/${item.slug}`}>
                                    <img
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${parsedItem.url}`}
                                        //width={340}
                                        //height={270}
                                        alt={parsedItem.alt} />
                                    <p itemProp="headline">{item.title}</p>
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
                typePage={`projects/tag/${props.tag_id}`}
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

export default ProjectsPageTag;