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

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    console.log(context.params)

    const { project } = await getProjectData(id);
    const info = await getInfoData();
    const projectsCards = await getProjectsCardsData();
    const projectTags = await getProjectTagsData(project.id);
    const modalContact = await getModalData('contact_form');
    const modalCall = await getModalData('call_form');
    const page = await getPageData("projects");

    return {
        props: {
            project,
            ...info,
            ...projectsCards,
            ...projectTags,
            ...page,
            modalContact,
            modalCall,
        }
    }
}

const Project = ({ ...props }) => {
    console.log(props.project)
    return (
        <>
            <Head>
                <title></title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.project.title}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.project.title} />
                </div>
                <Image
                    src={props.project.banner.url}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt={props.project.banner.alt} />
                <div className={cn.container__text}>
                    <Tags type="projects" tags={props.projectTags} />
                    {parse(props.project.content)}
                    <Socials socials={props.socials} />
                </div>
            </div>
            <ProjectsCards projects={props.projectsCards} />
            <ContactForm modal={props.modalContact.modal} />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Project;