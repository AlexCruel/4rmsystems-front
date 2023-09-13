import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
    getInfoData, getModalData, getNewsCardsData,
    getNewsSingleData, getNSingleTagsData, getPageData
} from "@/utils/functions";
import PageContactForm from "@/components/Forms/PageContactForm";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Socials from "@/components/Socials";
import cn from "./styles[id].module.scss";
import NewsCards from "@/components/Blog/NewsCards";
import Breadcrumbs from "@/components/Breadcrumbs";

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    const { newsSingle } = await getNewsSingleData(id);
    const info = await getInfoData();
    const newsCards = await getNewsCardsData();
    const nSingleTags = await getNSingleTagsData(newsSingle.id);
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');
    const page = await getPageData("news");

    return {
        props: {
            newsSingle,
            ...info,
            ...newsCards,
            ...nSingleTags,
            ...page,
            modalSubscription,
            modalCall,
            modalQuestion
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
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.newsSingle.title}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.newsSingle.title} />
                </div>
                <div className={cn.container__text}>
                    <Tags type="news" tags={props.nSingleTags} />
                    {parse(props.newsSingle.content)}
                    <div className={cn.container__text_date}>{props.newsSingle.created_at.split('T')[0]}</div>
                    <Socials socials={props.socials} />
                </div>
            </div>
            <NewsCards news={props.newsCards} />
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default News;