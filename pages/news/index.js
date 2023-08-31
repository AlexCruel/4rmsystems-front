import {
    getInfoData,
    getNewsData,
    getNewsPageData,
    getNewsTagsData,
    getNPinnedSecData,
    getPageData
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.module.scss";
import Tags from "@/components/Tags";
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";
import {useState} from "react";
import Pagination from "@/components/Pagination";
import PageContactForm from "@/components/Forms/PageContactForm";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("news");
    const { news } = await getNewsData();
    const newsPage = await getNewsPageData(1);
    const newsTags = await getNewsTagsData();
    const nPinnedSec = await getNPinnedSecData();

    return {
        props: {
            ...info,
            ...page,
            ...newsTags,
            ...newsPage,
            ...nPinnedSec,
            blogDataLength: news.length
        }
    }
}

const News = ({ ...props }) => {
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
                <h1>Новости</h1>
                <Tags type="news" tags={props.newsTags} />
                <div className={cn.container__pinned}>
                    <div className={cn.image}>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.nPinnedSec.image}`}
                            alt="Banner"
                            width={570}
                            height={361}
                        />
                    </div>
                    <div className={cn.pinned}>
                        <div className={cn.pinned__title}>
                            {props.nPinnedSec.title}
                        </div>
                        <div className={cn.pinned__text}>
                            {parse(props.nPinnedSec.pre_content)}
                        </div>
                        <Link href="#"><button>Подробнее</button></Link>
                    </div>
                </div>
                <div className={cn.container__cards}>
                    {props.newsPage.map((item, index) => {
                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <div className={cn.cards_card_image}>
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image}`}
                                        width={340}
                                        height={270}
                                        alt="News" />
                                </div>
                                <div className={cn.cards_card_title}>{item.title}</div>
                                <div className={cn.cards_card_date}>{item.created_at}</div>
                                <Link href={`/news/${item.slug}`}><button>Подробнее</button></Link>
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
                typePage="news"
            />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default News;