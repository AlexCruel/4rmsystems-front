import cn from "./styles.module.scss";
import Image from "next/image";
import partner_1 from "../../public/icons/partners/partner_1.svg";
import partner_2 from "../../public/icons/partners/partner_2.svg";
import partner_3 from "../../public/icons/partners/partner_3.svg";
import partner_4 from "../../public/icons/partners/partner_4.svg";
import partner_5 from "../../public/icons/partners/partner_5.svg";
import partner_6 from "../../public/icons/partners/partner_6.svg";
import partner_7 from "../../public/icons/partners/partner_7.svg";
import partner_8 from "../../public/icons/partners/partner_8.svg";

const Partner = () => {
    return (
        <div className={cn.partner_container}>
            <div>
                <h1>Долгосрочное партнерство</h1>
            </div>
            <div className={cn.logo}>
                <Image src={partner_1} alt="Partner" />
                <Image src={partner_2} alt="Partner" />
                <Image src={partner_3} alt="Partner" />
                <Image src={partner_4} alt="Partner" />
                <Image src={partner_5} alt="Partner" />
                <Image src={partner_6} alt="Partner" />
                <Image src={partner_7} alt="Partner" />
                <Image src={partner_8} alt="Partner" />
            </div>
        </div>
    );
}

export default Partner;