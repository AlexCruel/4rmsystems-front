import cn from "./styles.module.scss";
import Image from "next/image";
import partner_1 from "../../public/icons/partners/partner_1.png";

const Partner = () => {
    return (
        <div className={cn.partner_container}>
            <div>
                <h1>Долгосрочное партнерство</h1>
            </div>
            <div className={cn.logo}>
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_1} alt="Partner" />
            </div>
        </div>
    );
}

export default Partner;