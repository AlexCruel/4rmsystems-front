import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getInfoData, getModalData,
    getPageData,
    getProjectsData,
    getProjectsPageData,
    getProjectsTagsData,
    getTagsData
} from "@/utils/functions";
import cn from "@/pages/projects/styles.module.scss";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import Pagination from "@/components/Pagination";
import PageContactForm from "@/components/Forms/PageContactForm";
import Tags from "@/components/Tags";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

// export const getStaticPaths = async () => {
//     const pageCount = [];
//     const blogsPerPage = 6;
//
//     const projects = await getProjectsData();
//
//     for (let i = 1; i <= Math.ceil(projects.length / blogsPerPage); i++) {
//         pageCount.push(i);
//     }
//
//     const paths = pageCount.map((number) => {
//         return {
//             params: { id: number.toString() }
//         }
//     });
//
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const { id } = context.params;
//
//     const projectsPage = await getProjectsPageData(id);
//     const { projects } = await getProjectsData();
//     const info = await getInfoData();
//     const page = await getPageData("projects");
//     const tags = await getTagsData();
//
//     return {
//         props: {
//             id,
//             ...projectsPage,
//             blogDataLength: projects.length,
//             ...info,
//             ...page,
//             ...tags
//         }
//     }
// }

export const getServerSideProps = async ({params, resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const projectsPage = await getProjectsPageData(id, lang);
    const { projects } = await getProjectsData(lang);
    const info = await getInfoData(lang);
    const page = await getPageData("projects", lang);
    const projectsTags = await getProjectsTagsData(lang);
    const modalSubscription = await getModalData('subscription_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const modalQuestion = await getModalData('question_form', lang);

    return {
        props: {
            id,
            ...projectsPage,
            blogDataLength: projects.length,
            ...info,
            ...page,
            ...projectsTags,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const ProjectsPage = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
                <meta property="og:title" content={props.page.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                {/*<meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.image.url}`} />*/}
                <meta property="og:description" content={props.page.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Article">
                <h1 itemProp="headline">{props.page.seo_h1}</h1>
                <Breadcrumbs title={props.page.name} />
                <Tags type="projects" tags={props.projectsTags} />
                <div itemProp="articleBody">{parse(props.page.pre_content)}</div>
                <div className={cn.container__cards}>
                    {props.projectsPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card} itemScope itemType="https://schema.org/ImageObject">
                                <Link href={`/projects/${item.slug}`}>
                                    <Image
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                        width={340}
                                        height={270}
                                        alt={item.image.alt} />
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
                typePage="projects"
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

export default ProjectsPage;