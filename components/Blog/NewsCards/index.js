import Link from "next/link";
import Image from "next/image";
import cn from "./styles.module.scss";

const NewsCards = ({ news, lang }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__cards}>
                {news.map((item, index) => {
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
                            <div className={cn.cards_card_title}>
                                <Link href={`/news/${item.slug}`}>
                                    {item.title}
                                </Link>
                            </div>
                            <div className={cn.cards_card_date}>{item.created_at.split('T')[0]}</div>
                            <Link href={`/news/${item.slug}`}>
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

export default NewsCards;