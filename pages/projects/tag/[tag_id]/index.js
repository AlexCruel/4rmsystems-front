import Header from "@/components/Header";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import {getInfoData, getPageData, getTagPageData, getTagProjectsData, getTagsData} from "@/utils/functions";
import cn from "@/pages/projects/styles.module.scss";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import {useState} from "react";
import Tags from "@/components/Tags";

// export const getStaticPaths = async () => {
//     const { tags } = await getTagsData();
//
//     const paths = tags.map(({ slug }) => {
//         return {
//             params: { tag_id: slug.toString() }
//         }
//     });
//
//     return {
//         paths,
//         fallback: false
//     }
// }

// export const getStaticProps = async (context) => {
//     const { tag_id } = context.params;
//
//     const { tagProjects } = await getTagProjectsData(tag_id);
//     const tagPage = await getTagPageData(tag_id, 1);
//     const info = await getInfoData();
//     const page = await getPageData("projects");
//     const tags = await getTagsData();
//
//     return {
//         props: {
//             tag_id,
//             ...info,
//             ...page,
//             ...tags,
//             blogDataLength: tagProjects.length,
//             ...tagPage
//         }
//     }
// }

export const getServerSideProps = async (context) => {
    const { tag_id } = context.params;

    const { tagProjects } = await getTagProjectsData(tag_id);
    const tagPage = await getTagPageData(tag_id, 1);
    const info = await getInfoData();
    const page = await getPageData("projects");
    const tags = await getTagsData();

    return {
        props: {
            tag_id,
            ...info,
            ...page,
            ...tags,
            blogDataLength: tagProjects.length,
            ...tagPage
        }
    }
}

const ProjectsTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Проекты</h1>
                <Tags tags={props.tags} />
                <div>
                    {props.tagPage.length !== 0
                        ? parse(props.page.pre_content)
                        : ""}
                </div>
                <div className={cn.container__cards}>
                    {props.tagPage.length !== 0
                        ? props.tagPage.map((item, index) => {
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
                    })
                        : <div className={cn.container__cards_empty}>Нет проектов с таким тегом</div> }
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

export default ProjectsTag;