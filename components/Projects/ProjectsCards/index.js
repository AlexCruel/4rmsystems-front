import Image from "next/image";
import Link from "next/link";
import cn from "./styles.module.scss";

const ProjectsCards = ({ projects }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__cards}>
                {projects.map((item, index) => {
                    return (
                        <Link key={index} href={`${item.slug}`}>
                            <div className={cn.container__cards_card}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image}`}
                                    width={100}
                                    height={100}
                                    alt="Project"/>
                                <p>{item.title}</p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectsCards;