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

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("projects");
    const { projects } = await getProjectsData();
    const projectsTags = await getProjectsTagsData();
    const projectsPage = await getProjectsPageData(1);
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
            modalQuestion
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
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <h1>Проекты</h1>
                <Tags type="projects" tags={props.projectsTags} />
                <div>{parse(props.page.pre_content)}</div>
                <div className={cn.container__cards}>
                    {props.projectsPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <Link href={`/projects/${item.slug}`}>
                                    <Image
                                        src={item.image.url}
                                        width={340}
                                        height={270}
                                        alt={item.image.alt} />
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