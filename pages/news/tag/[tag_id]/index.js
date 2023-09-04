import {
    getInfoData, getNewsTagsData, getNPinnedSecData,
    getTagNewsData, getTagNewsPageData,
} from "@/utils/functions";
import {useState} from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageContactForm from "@/components/Forms/PageContactForm";
import Pagination from "@/components/Pagination";
import cn from "@/pages/news/styles.module.scss";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

export const getServerSideProps = async (context) => {
    const { tag_id } = context.params;

    const { tagNews } = await getTagNewsData(tag_id);
    const tagNewsPage = await getTagNewsPageData(tag_id, 1)
    const info = await getInfoData();
    const newsTags = await getNewsTagsData();
    const nPinnedSec = await getNPinnedSecData();

    return {
        props: {
            tag_id,
            ...info,
            ...newsTags,
            blogDataLength: tagNews.length,
            ...tagNewsPage,
            ...nPinnedSec
        }
    }
}

const NewsTag = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Новости</h1>
                <Tags type="news" tags={props.newsTags} />
                <div className={cn.container__pinned}>
                    <div className={cn.image}>
                        <Image
                            src={props.nPinnedSec.image.url}
                            alt={props.nPinnedSec.image.alt}
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
                        <Link href={`/news/${props.nPinnedSec.slug}`}><button>Подробнее</button></Link>
                    </div>
                </div>
                <div className={cn.container__cards}>
                    {props.tagNewsPage.map((item, index) => {

                        const parsedItem = JSON.parse(item.image)

                        return (
                            <div key={index} className={cn.container__cards_card}>
                                <div className={cn.cards_card_image}>
                                    <Image
                                        src={parsedItem.url}
                                        width={340}
                                        height={270}
                                        alt={parsedItem.alt} />
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
                typePage={`news/tag/${props.tag_id}`}
            />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default NewsTag;