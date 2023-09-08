import cn from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import phone_big from "../../public/icons/phone.svg";
import phone_small from "../../public/icons/phone_small.svg";
import search from "../../public/icons/search.svg";
import mail from "../../public/icons/mail.svg";
import globe from "../../public/icons/globe.svg";
import menu from "../../public/icons/menu.svg";
import close from "../../public/icons/close.svg";
import {useState} from "react";
import Link from "next/link";

const Header = ({phones}) => {
    const [nav, setNav] = useState(false);

    return (
        <nav className={cn.nav}>
            <Link href="/" className={cn.logo_link}>
                <div className={cn.logo_container}>
                    <Image src={logo} alt='4RM SYSTEMS' />
                    <hr/>
                    <div className={cn.logo_container_text}>For Retail Modern Systems</div>
                </div>
            </Link>
            <div className={nav ? [cn.container, cn.active_menu].join(' ') : [cn.container]}>
                <div className={cn.contacts_wrapper}>
                    <ul>
                        {phones?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className={cn.contacts_container}>
                                        <Image src={phone_small} alt="Phone" />
                                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={cn.menu}>
                    <ul>
                        {/*<li><a href="#">Каталог</a></li>*/}
                        <li><Link href="/projects">Проекты</Link></li>
                        <li><Link href="/company">О компании</Link></li>
                        <li><Link href="/contacts">Контакты</Link></li>
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
                <div onClick={() => setNav(!nav)} className={cn.mobile_menu}>
                    {nav ? <Image src={close} alt="Close" /> : <Image src={menu} alt="Menu" />}
                </div>


        </nav>
    );
}

export default Header;