import cn from "./styles.module.scss";
import Image from "next/image";

const Information = ({ info }) => {
    return (
        <div className={cn.info_container}>
            <div className={cn.info_container_title}>{info.title}</div>
            <div className={cn.info_content} itemScope itemType="https://schema.org/ImageObject">
                {info.section_items.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image
                                itemProp="contentUrl"
                                src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.icon.logo}`}
                                width={90}
                                height={90}
                                alt={item.icon.alt} />
                            <h2 itemProp="headline">{item.name}</h2>
                            <hr />
                            <p itemProp="text">{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Information;