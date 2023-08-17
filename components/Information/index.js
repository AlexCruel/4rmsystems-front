import cn from "./styles.module.scss";
import Image from "next/image";

const Information = ({ info }) => {
    return (
        <div className={cn.info_container}>
            <h1>{info.title}</h1>
            <div className={cn.info_content}>
                {info.section_items.map((item, index) => {
                    return (
                        <div key={index}>
                            <Image
                                src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.icon}`}
                                width={90}
                                height={90}
                                alt="Logo" />
                            <h2>{item.name}</h2>
                            <hr />
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Information;