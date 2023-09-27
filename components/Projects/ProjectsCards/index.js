import Image from "next/image";
import Link from "next/link";
import cn from "./styles.module.scss";

const ProjectsCards = ({ projects }) => {
    return (
        <div className={cn.container} itemScope itemType="https://schema.org/Article">
            <div className={cn.container__cards}>
                {projects.map((item, index) => {
                    return (
                        <Link key={index} href={`${item.slug}`} className={cn.container__cards_card}>
                            <div  itemScope itemType="https://schema.org/ImageObject">
                                <img
                                    itemProp="contentUrl"
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                    //width={340}
                                    //height={270}
                                    alt={item.image.alt} />
                                <p itemProp="headline">{item.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectsCards;