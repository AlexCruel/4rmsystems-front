import Image from "next/image";
import Link from "next/link";
import cn from "./styles.module.scss";

const BlogCards = ({ blogs }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__cards}>
                {blogs.map((item, index) => {
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
    );
}

export default BlogCards;