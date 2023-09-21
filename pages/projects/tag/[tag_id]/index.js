import Header from "@/components/Header";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import {
    getInfoData, getModalData,
    getPageData, getProjectsTagNameData,
    getProjectsTagsData,
    getTagPageData,
    getTagProjectsData
} from "@/utils/functions";
import cn from "@/pages/projects/styles.module.scss";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import Tags from "@/components/Tags";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

// export const getStaticPaths = async () => {
//     const { tags } = await getTagsData();
//
//     const paths = tags.map(({ slug }) => {
//         return {
//             params: { tag_id: slug.toString() }
//         }
//     });
//
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const { tag_id } = context.params;
//
//     const { tagProjects } = await getTagProjectsData(tag_id);
//     const tagPage = await getTagPageData(tag_id, 1);
//     const info = await getInfoData();
//     const page = await getPageData("projects");
//     const tags = await getTagsData();
//
//     return {
//         props: {
//             tag_id,
//             ...info,
//             ...page,
//             ...tags,
//             blogDataLength: tagProjects.length,
//             ...tagPage
//         }
//     }
// }

export const getServerSideProps = async ({params, resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const { tag_id } = params;
    const lang = getCookie('lang', {req, res});

    const { tagProjects } = await getTagProjectsData(tag_id, lang);
    const tagPage = await getTagPageData(tag_id, 1, lang);
    const info = await getInfoData(lang);
    const page = await getPageData("projects", lang);
    const projectsTags = await getProjectsTagsData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);
    const tagName = await getProjectsTagNameData(tag_id, lang);

    return {
        props: {
            tag_id,
            ...info,
            ...page,
            ...projectsTags,
            blogDataLength: tagProjects.length,
            ...tagPage,
            ...tagName,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const ProjectsTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Head>
                <title>{props.tagName.seo_title}</title>
                <meta name="keywords" content={props.tagName.seo_key} />
                <meta name="description" content={props.tagName.seo_description} />
                <meta property="og:title" content={props.tagName.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.tagName.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Article">
                <h1 itemProp="headline">{props.tagName.seo_h1}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="projects" tags={props.projectsTags} />
                <div itemProp="articleBody">
                    {props.tagPage.length !== 0
                        ? parse(props.page.pre_content)
                        : ""}
                </div>
                <div className={cn.container__cards}>
                    {props.tagPage.length !== 0
                        ? props.tagPage.map((item, index) => {

                            const parsedItem = JSON.parse(item.image)

                            return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
                                <Link href={`/projects/${item.slug}`}>
                                    <Image
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${parsedItem.url}`}
                                        width={340}
                                        height={270}
                                        alt={parsedItem.alt} />
                                    <p itemProp="headline">{item.title}</p>
                                </Link>
                            </div>
                        );
                    })
                        : <div className={cn.container__cards_empty}>Нет проектов с таким тегом</div> }
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

export default ProjectsTag;