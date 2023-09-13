import {
    getBlogCardsData,
    getBlogSingleData, getBSingleTagsData,
    getInfoData, getModalData, getPageData
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
import Breadcrumbs from "@/components/Breadcrumbs";

export const getServerSideProps = async (context) => {
    const { id } = context.params;
    const resolvedUrl = context.resolvedUrl;

    const { blogSingle } = await getBlogSingleData(id);
    const info = await getInfoData();
    const blogCards = await getBlogCardsData();
    const bSingleTags = await getBSingleTagsData(blogSingle.id);
    const modalSubscription = await getModalData('subscription_form');
    const modalCall = await getModalData('call_form');
    const modalQuestion = await getModalData('question_form');
    const page = await getPageData("blog");

    return {
        props: {
            blogSingle,
            ...info,
            ...blogCards,
            ...bSingleTags,
            ...page,
            modalSubscription,
            modalCall,
            modalQuestion,
            resolvedUrl
        }
    }
}

const Blog = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>{props.blogSingle.seo_title}</title>
                <meta name="keywords" content={props.blogSingle.seo_key} />
                <meta name="description" content={props.blogSingle.seo_description} />
                <meta property="og:title" content={props.blogSingle.title} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
                <meta property="og:description" content="https://ia.media-imdb.com/images/rock.jpg" />
                <meta property="og:site_name" content="https://ia.media-imdb.com/images/rock.jpg" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>{props.blogSingle.seo_h1}</h1>
                    <Breadcrumbs pre_title={props.page.name} title={props.blogSingle.title} />
                </div>
                <div className={cn.container__text}>
                    <Tags type="blog" tags={props.bSingleTags} />
                    {parse(props.blogSingle.content)}
                    <div className={cn.container__text_date}>{props.blogSingle.created_at.split('T')[0]}</div>
                    <Socials socials={props.socials} resolvedUrl={props.resolvedUrl} text={props.blogSingle.title} />
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