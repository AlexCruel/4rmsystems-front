import {
    getInfoData,
    getPageData,
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

    const { tagProjects } = await getTagProjectsData(tag_id);
    const { tagPage } = await getTagPageData(tag_id, id);
    const info = await getInfoData();
    const page = await getPageData("projects");
    const tags = await getTagsData();

    return {
        props: {
            id,
            tag_id,
            projectsPage: tagPage,
            blogDataLength: tagProjects.length,
            ...info,
            ...page,
            ...tags
        }
    }
}

const ProjectsPageTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Проекты</h1>
                <Tags type="projects" tags={props.tags} />
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
                typePage={`projects/tag/${props.tag_id}`}
            />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default ProjectsPageTag;