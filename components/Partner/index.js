import cn from "./styles.module.scss";
import Image from "next/image";
import partner_1 from "../../public/icons/partners/partner_1.png";

const Partner = ({ partner }) => {
    return (
        <div className={cn.partner_container}>
            <div>
                <h1>Долгосрочное партнерство</h1>
            </div>
            <div className={cn.logo}>
                {partner.logo_items.map((item, index) => {
                    return (
                        <Image
                            key={index}
                            src={`http://localhost:8888/4rmsystems-server/storage/app/media${item.logo}`}
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