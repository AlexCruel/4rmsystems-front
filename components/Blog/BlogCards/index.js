import Image from "next/image";
import Link from "next/link";
import cn from "./styles.module.scss";

const BlogCards = ({ blogs, lang }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__cards}>
                {blogs.map((item, index) => {
                    return (
                        <div key={index} className={cn.container__cards_card}>
                            <div className={cn.cards_card_image}>
                                <img
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                    //width={340}
                                    //height={270}
                                    //layout="responsive"
                                    alt={item.image.alt} />
                            </div>
                            <div className={cn.cards_card_title}>{item.title}</div>
                            <div className={cn.cards_card_date}>{item.created_at.split('T')[0]}</div>
                            <Link href={`/blog/${item.slug}`}>
                                <button>
                                    {lang === "ENG" ? "More details" : "Подробнее"}
                                </button>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default BlogCards;