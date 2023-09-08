import cn from "./styles.module.scss";
import {
    getBlogData, getBlogPageData, getBlogTagsData,
    getBPinnedSecData,
    getInfoData,
    getPageData
} from "@/utils/functions";
import {useState} from "react";
import Head from "next/head";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Pagination from "@/components/Pagination";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("blog");
    const { blog } = await getBlogData();
    const blogPage = await getBlogPageData(1);
    const blogTags = await getBlogTagsData();
    const bPinnedSec = await getBPinnedSecData();

    return {
        props: {
            ...info,
            ...page,
            ...blogTags,
            ...blogPage,
            ...bPinnedSec,
            blogDataLength: blog.length
        }
    }
}

const Blog = ({ ...props }) => {
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
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Статьи</h1>
                <Tags type="blog" tags={props.blogTags} />
                <div className={cn.container__pinned}>
                    <div className={cn.image}>
                        <Image
                            src={props.bPinnedSec.image.url}
                            alt={props.bPinnedSec.image.alt}
                            width={570}
                            height={361}
                        />
                    </div>
                    <div className={cn.pinned}>
                        <div className={cn.pinned__title}>
                            {props.bPinnedSec.title}
                        </div>
                        <div className={cn.pinned__text}>
                            {parse(props.bPinnedSec.pre_content)}
                        </div>
                        <Link href={`/blog/${props.bPinnedSec.slug}`}><button>Подробнее</button></Link>
                    </div>
                </div>
                <div className={cn.container__cards}>
                    {props.blogPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <div className={cn.cards_card_image}>
                                    <Image
                                        src={item.image.url}
                                        width={340}
                                        height={270}
                                        alt={item.image.alt} />
                                </div>
                                <div className={cn.cards_card_title}>{item.title}</div>
                                <div className={cn.cards_card_date}>{item.created_at}</div>
                                <Link href={`/blog/${item.slug}`}><button>Подробнее</button></Link>
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
                typePage="blog"
            />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Blog;