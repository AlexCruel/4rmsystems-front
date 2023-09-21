import parse from "html-react-parser";
import Head from "next/head";
import cn from "./styles[id].module.scss";
import {
    getInfoData, getModalData, getPageData,
    getProjectData,
    getProjectsCardsData,
    getProjectsData, getProjectTagsData
} from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Forms/ContactForm";
import Image from "next/image";
import Socials from "@/components/Socials";
import ProjectsCards from "@/components/Projects/ProjectsCards";
import Tags from "@/components/Tags";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";

// export const getStaticPaths = async () => {
//     const { projects } = await getProjectsData();
//
//     const paths = projects.map(({ slug }) => {
//         return {
//             params: { id: slug }
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
//     const { project } = await getProjectData(id);
//     const info = await getInfoData();
//     const projectsCards = await getProjectsCardsData();
//     const projectTags = await getProjectTagsData(project.id);
//
//     return {
//         props: {
//             project,
//             ...info,
//             ...projectsCards,
//             ...projectTags
//         }
//     }
// }

export const getServerSideProps = async ({params, resolvedUrl, req, res}) => {
    setLocalizationCookie(req, res);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const { project } = await getProjectData(id, lang);
    const info = await getInfoData(lang);
    const projectsCards = await getProjectsCardsData(lang);
    const projectTags = await getProjectTagsData(project.id, lang);
    const modalContact = await getModalData('contact_form', lang);
    const modalCall = await getModalData('call_form', lang);
    const page = await getPageData("projects", lang);

    return {
        props: {
            project,
            ...info,
            ...projectsCards,
            ...projectTags,
            ...page,
            modalContact,
            modalCall,
            resolvedUrl
        }
    }
}

const Project = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>{props.project.seo_title}</title>
                <meta name="keywords" content={props.project.seo_key} />
                <meta name="description" content={props.project.seo_description} />
                <meta property="og:title" content={props.project.seo_h1} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.project.image.url}`} />
                <meta property="og:description" content={props.project.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Article">
                <div className={cn.container__text}>
                    <h1 itemProp="headline">{props.project.seo_h1}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.project.title} />
                </div>
                <div itemScope itemType="https://schema.org/ImageObject">
                    <Image
                        itemProp="contentUrl"
                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.project.banner.url}`}
                        layout="responsive"
                        width={1000}
                        height={300}
                        alt={props.project.banner.alt} />
                </div>
                <div className={cn.container__text}>
                    <Tags type="projects" tags={props.projectTags} />
                    <span itemProp="articleBody">{parse(props.project.content)}</span>
                    <Socials socials={props.socials} resolvedUrl={props.resolvedUrl} text={props.project.title} />
                </div>
            </div>
            <ProjectsCards projects={props.projectsCards} />
            <ContactForm modal={props.modalContact.modal} />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Project;