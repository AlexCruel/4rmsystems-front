import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getInfoData, getPageData, getProjectsData, getProjectsPageData, getTagsData} from "@/utils/functions";
import cn from "@/pages/projects/styles.module.scss";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import Pagination from "@/components/Pagination";
import PageContactForm from "@/components/Forms/PageContactForm";
import Tags from "@/components/Tags";

export const getStaticPaths = async () => {
    const pageCount = [];
    const blogsPerPage = 6;

    const projects = await getProjectsData();

    for (let i = 1; i <= Math.ceil(projects.length / blogsPerPage); i++) {
        pageCount.push(i);
    }

    const paths = pageCount.map((number) => {
        return {
            params: { id: number.toString() }
        }
    });

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const { id } = context.params;

    const projectsPage = await getProjectsPageData(id);
    const { projects } = await getProjectsData();
    const info = await getInfoData();
    const page = await getPageData("projects");
    const tags = await getTagsData();

    return {
        props: {
            id,
            ...projectsPage,
            blogDataLength: projects.length,
            ...info,
            ...page,
            ...tags
        }
    }
}

const ProjectsPage = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Проекты</h1>
                <Tags tags={props.tags} />
                <div>{parse(props.page.pre_content)}</div>
                <div className={cn.container__cards}>
                    {props.projectsPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <Link href={`/projects/${item.slug}`}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image}`}
                                        width={340}
                                        height={270}
                                        alt="Project" />
                                    <p>{item.title}</p>
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
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default ProjectsPage;