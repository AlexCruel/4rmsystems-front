import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getInfoData, getNewsCardsData,
    getNewsSingleData, getNSingleTagsData
} from "@/utils/functions";
import PageContactForm from "@/components/Forms/PageContactForm";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Socials from "@/components/Socials";
import cn from "./styles[id].module.scss";
import NewsCards from "@/components/Blog/NewsCards";

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    const { newsSingle } = await getNewsSingleData(id);
    const info = await getInfoData();
    const newsCards = await getNewsCardsData();
    const nSingleTags = await getNSingleTagsData(newsSingle.id);

    return {
        props: {
            newsSingle,
            ...info,
            ...newsCards,
            ...nSingleTags
        }
    }
}

const News = ({ ...props }) => {
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
                    <h1>{props.newsSingle.title}</h1>
                </div>
                <div className={cn.container__text}>
                    <Tags type="projects" tags={props.nSingleTags} />
                    {parse(props.newsSingle.content)}
                    <div className={cn.container__text_date}>{props.newsSingle.created_at}</div>
                    <Socials socials={props.socials} />
                </div>
            </div>
            <NewsCards news={props.newsCards} />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default News;