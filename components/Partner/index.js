import cn from "./styles.module.scss";
import Image from "next/image";
import partner_1 from "../../public/icons/partners/partner_1.png";

const Partner = ({ partner }) => {
    return (
        <div className={cn.partner_container}>
            <div>
                <h1>{partner.title}</h1>
            </div>
            <div className={cn.logo} itemScope itemType="https://schema.org/ImageObject">
                {partner.logo_items.map((item, index) => {
                    return (
                        <Image
                            itemProp="contentUrl"
                            key={index}
                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.logo}`}
                            width={110}
                            height={110}
                            alt="Partner" />
                    );
                })}
            </div>
        </div>
    );
}

export default Partner;