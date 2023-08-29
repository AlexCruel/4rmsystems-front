import parse from "html-react-parser";
import Head from "next/head";
import cn from "./styles[id].module.scss";
import {
    getInfoData,
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

    const { project } = await getProjectData(id);
    const info = await getInfoData();
    const projectsCards = await getProjectsCardsData();
    const projectTags = await getProjectTagsData(project.id);

    return {
        props: {
            project,
            ...info,
            ...projectsCards,
            ...projectTags
        }
    }
}

const Project = ({ ...props }) => {
    console.log(props.projectTags)

    return (
        <>
            <Head>
                <title></title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
            </Head>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.project.title}</h1>
                </div>
                <Image
                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.project.banner}`}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt="Banner" />
                <div className={cn.container__text}>
                    <Tags tags={props.projectTags} />
                    {parse(props.project.content)}
                    <Socials socials={props.socials} />
                </div>
            </div>
            <ProjectsCards projects={props.projectsCards} />
            <ContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Project;