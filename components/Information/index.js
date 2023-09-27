import cn from "./styles.module.scss";
import Image from "next/image";

const Information = ({ info }) => {
    return (
        <div className={cn.info_container}>
            <h2 className={cn.info_container_title}>{info.title}</h2>
            <div className={cn.info_content} itemScope itemType="https://schema.org/ImageObject">
                {info.section_items.map((item, index) => {
                    return (
                        <div key={index} >
                            <img
                                itemProp="contentUrl"
                                src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.icon.logo}`}
                                alt={item.icon.alt} />
                            <h3 itemProp="headline">{item.name}</h3>
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