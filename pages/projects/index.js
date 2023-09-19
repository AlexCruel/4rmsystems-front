import {
    getInfoData, getModalData,
    getPageData, getProjectsData,
    getProjectsPageData, getProjectsTagsData,
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import parse from "html-react-parser";
import Image from "next/image";
import cn from "./styles.module.scss";
import Link from "next/link";
import {useState} from "react";
import Pagination from "@/components/Pagination";
import Tags from "@/components/Tags";
import CallForm from "components/Forms/CallForm";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

export const getServerSideProps = async ({resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const lang = getCookie('lang', {req, res});

    const info = await getInfoData(lang);
    const page = await getPageData("projects", lang);
    const { projects } = await getProjectsData(lang);
    const projectsTags = await getProjectsTagsData(lang);
    const projectsPage = await getProjectsPageData(1, lang);
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');

    return {
        props: {
            ...info,
            ...page,
            ...projectsTags,
            ...projectsPage,
            blogDataLength: projects.length,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
};

const Projects = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
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

export default Projects;