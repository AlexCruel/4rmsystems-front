import parse from "html-react-parser";
import Head from "next/head";
import cn from "./styles[id].module.scss";
import {getInfoData, getProjectsCardsData, getProjectsComponentData} from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/Forms/ContactForm";
import Image from "next/image";
import Socials from "@/components/Socials";
import ProjectsCards from "@/components/Projects/ProjectsCards";

export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:8888/4rmsystems-server/api/projects');
    const data = await res.json();

    const paths = data.map(({ slug }) => {
        return {
            params: { id: slug.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;

    const res = await fetch(`http://localhost:8888/4rmsystems-server/api/projects/${id}`);
    const data = await res.json();

    const info = await getInfoData();
    const projectsCards = await getProjectsCardsData();

    return {
        props: {
            project: data,
            ...info,
            ...projectsCards
        }
    }
}

const Project = ({ ...props }) => {
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