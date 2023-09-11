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

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    const projectsPage = await getProjectsPageData(id);
    const { projects } = await getProjectsData();
    const info = await getInfoData();
    const page = await getPageData("projects");
    const projectsTags = await getProjectsTagsData();
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');

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
            modalQuestion
        }
    }
}

const ProjectsPage = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <h1>Проекты</h1>
                <Breadcrumbs title={props.page.name} />
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

export default ProjectsPage;