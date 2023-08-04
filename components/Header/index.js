import cn from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import phone from "../../public/icons/phone.svg";
import search from "../../public/icons/search.svg";
import mail from "../../public/icons/mail.svg";
import globe from "../../public/icons/globe.svg";

const Header = () => {
    return (
        <nav className={cn.nav}>
            <div className={cn.logo_container}>
                <Image src={logo} alt='4RM SYSTEMS' />
                <hr/>
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
                    <button>ЗАКАЗАТЬ ЗВОНОК</button>
                </div>
                <div className={cn.icons}>
                    <a><Image src={search} alt="Search" /></a>
                    <a><Image src={mail} alt="Mail" /></a>
                    <a><Image src={globe} alt="Globe" /></a>
                </div>
            </div>
        </nav>
    );
}

export default Header;