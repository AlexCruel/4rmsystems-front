import cn from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/img/4rm_logo.svg";
import phone from "../../public/icons/phone.svg";
import search from "../../public/icons/search.svg";
import mail from "../../public/icons/mail.svg";
import globe from "../../public/icons/globe.svg";

const Header = () => {
    return (
        <nav className={cn.nav}>
            <div className={cn.logo_container}>
                <div className={cn.logo_container_img}><Image src={logo} width="125px" height="35px" alt='4RM SYSTEMS' /></div>
                <div className={cn.logo_container_text}>For Retail Modern Systems</div>
            </div>
            <div className={cn.container}>
                <div>
                    <ul className={cn.contacts_wrapper}>
                        <li>
                            <div className={cn.contacts_container}>
                                <Image src={phone} alt="Phone" />
                                <a href="#">+375 44 504-14-01</a>
                            </div>
                        </li>
                        <li>
                            <div className={cn.contacts_container}>
                                <Image src={phone} alt="Phone" />
                                <a href="#">+375 21 265-05-12</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={cn.menu}>
                    <ul>
                        <li><a href="#">Каталог</a></li>
                        <li><a href="#">Проекты</a></li>
                        <li><a href="#">О компании</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                </div>
                <div className={cn.call}>
                    ЗАКАЗАТЬ ЗВОНОК
                </div>
                <div className={cn.icons}>
                    <Image src={search} alt="Search" />
                    <Image src={mail} alt="Mail" />
                    <Image src={globe} alt="Globe" />
                </div>
            </div>
        </nav>
    );
}

export default Header;