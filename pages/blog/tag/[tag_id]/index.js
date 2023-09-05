import {useState} from "react";
import {
    getBlogTagsData,
    getBPinnedSecData,
    getInfoData, getTagBlogsData, getTagBlogsPageData
} from "@/utils/functions";
import Header from "@/components/Header";
import cn from "@/pages/blog/styles.module.scss";
import Tags from "@/components/Tags";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import PageContactForm from "@/components/Forms/PageContactForm";
import Footer from "@/components/Footer";

export const getServerSideProps = async (context) => {
    const { tag_id } = context.params;

    const { tagBlogs } = await getTagBlogsData(tag_id);
    const tagBlogsPage = await getTagBlogsPageData(tag_id, 1);
    const info = await getInfoData();
    const blogTags = await getBlogTagsData();
    const bPinnedSec = await getBPinnedSecData();

    return {
        props: {
            tag_id,
            ...info,
            ...blogTags,
            ...bPinnedSec,
            blogDataLength: tagBlogs.length,
            ...tagBlogsPage,
            ...bPinnedSec
        }
    }
}

const BlogTags = ({ ...props }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;

    const paginate = pageNumbers => setCurrentPage(pageNumbers);

    return (
        <>
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
                    {props.tagBlogsPage.map((item, index) => {

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
                typePage={`blog/tag/${props.tag_id}`}
            />
            <PageContactForm />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default BlogTags;