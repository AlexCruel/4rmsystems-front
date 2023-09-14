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

// export const getStaticPaths = async () => {
//     const blogsPerPage = 6;
//     const paths = [];
//
//     const { tagsProjectsCount } = await getTagsProjectsCountData();
//
//     const convertPaths = tagsProjectsCount.map(({ slug, count }) => {
//         for (let i = 1; i <= Math.ceil(count / blogsPerPage); i++) {
//             paths.push({ params: { tag_id: slug.toString(), id: i.toString() } });
//         }
//     });
//
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const { tag_id, id } = context.params;
//
//     const { tagProjects } = await getTagProjectsData(tag_id);
//     const { tagPage } = await getTagPageData(tag_id, id);
//     const info = await getInfoData();
//     const page = await getPageData("projects");
//     const tags = await getTagsData();
//
//     return {
//         props: {
//             id,
//             tag_id,
//             projectsPage: tagPage,
//             blogDataLength: tagProjects.length,
//             ...info,
//             ...page,
//             ...tags
//         }
//     }
// }

export const getServerSideProps = async (context) => {
    const { tag_id, id } = context.params;
    const resolvedUrl = context.resolvedUrl;

    const { tagProjects } = await getTagProjectsData(tag_id);
    const { tagPage } = await getTagPageData(tag_id, id);
    const info = await getInfoData();
    const page = await getPageData("projects");
    const projectsTags = await getProjectsTagsData();
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');
    const tagName = await getProjectsTagNameData(tag_id);

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
                <title>{props.tagName.seo_title}</title>
                <meta name="keywords" content={props.tagName.seo_key} />
                <meta name="description" content={props.tagName.seo_description} />
                <meta property="og:title" content={props.tagName.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                {/*<meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.image.url}`} />*/}
                <meta property="og:description" content={props.tagName.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Article">
                <h1 itemProp="headline">{props.tagName.seo_h1}</h1>
                <Breadcrumbs pre_title={props.page.name} title={props.tagName.name} />
                <Tags type="projects" tags={props.projectsTags} />
                <div>{parse(props.page.pre_content)}</div>
                <div className={cn.container__cards} itemProp="articleBody">
                    {props.projectsPage.map((item, index) => {

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