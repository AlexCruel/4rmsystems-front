import {getInfoData, getNewsData, getNewsTagsData, getPageData} from "@/utils/functions";
import {useState} from "react";
import Header from "@/components/Header";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import cn from "@/pages/news/styles.module.scss";
import Tags from "@/components/Tags";

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    // const projectsPage = await getProjectsPageData(id);
    const { news } = await getNewsData();
    const info = await getInfoData();
    const page = await getPageData("news");
    const newsTags = await getNewsTagsData();

    return {
        props: {
            id,
            // ...projectsPage,
            blogDataLength: news.length,
            ...info,
            ...page,
            ...newsTags
        }
    }
}

const NewsPage = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(parseInt(props.id));
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Новости</h1>
                <Tags type="news" tags={props.newsTags} />
            </div>
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default NewsPage;