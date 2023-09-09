import {
    getBlogCardsData,
    getBlogSingleData, getBSingleTagsData,
    getInfoData, getModalData
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Socials from "@/components/Socials";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import cn from "./styles[id].module.scss";
import BlogCards from "@/components/Blog/BlogCards";

export const getServerSideProps = async (context) => {
    const { id } = context.params;

    const { blogSingle } = await getBlogSingleData(id);
    const info = await getInfoData();
    const blogCards = await getBlogCardsData();
    const bSingleTags = await getBSingleTagsData(blogSingle.id);
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');

    return {
        props: {
            blogSingle,
            ...info,
            ...blogCards,
            ...bSingleTags,
            modalSubscription,
            modalCall,
            modalQuestion
        }
    }
}

const Blog = ({ ...props }) => {
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
                    <h1>{props.blogSingle.title}</h1>
                </div>
                <div className={cn.container__text}>
                    <Tags type="blog" tags={props.bSingleTags} />
                    {parse(props.blogSingle.content)}
                    <div className={cn.container__text_date}>{props.blogSingle.created_at}</div>
                    <Socials socials={props.socials} />
                </div>
            </div>
            <BlogCards blogs={props.blogCards} />
            <PageContactForm
                modalSubscription={props.modalSubscription.modal}
                modalCall={props.modalCall.modal}
                modalQuestion={props.modalQuestion.modal}
            />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Blog;