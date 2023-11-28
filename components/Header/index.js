import cn from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/img/logo.svg";
import phone_small from "../../public/icons/phone_small.svg";
import search from "../../public/icons/search.svg";
import mail from "../../public/icons/mail.svg";
import menu from "../../public/icons/menu.svg";
import close from "../../public/icons/close.svg";
import {useState} from "react";
import Link from "next/link";
import CallForm from "@/components/Forms/CallForm";
import { setCookie, getCookie } from 'cookies-next';
import logo125x35 from "../../public/img/logo125x35.svg";
import SearchForm from "@/components/Forms/SearchForm";
import {useRouter} from "next/router";

const Header = ({phones, modal}) => {
    const [nav, setNav] = useState(false);
    const [callForm, setCallForm] = useState(false);
    const [searchForm, setSearchForm] = useState(false);
    const router = useRouter();

    const lang = getCookie('lang');

    const localizationHandler = () => {
        if (lang === "ENG") {
            setCookie("lang", "RU");
        } else {
            setCookie("lang", "ENG");
        }
    }

    const searchFormHandler = () => {
        setSearchForm(true);
        document.getElementsByTagName('body')[0].style = 'overflow: hidden;';
    }

    return (
        <nav className={cn.nav} itemScope itemType="http://schema.org/SiteNavigationElement">
            <Link href="/" className={cn.logo_link}>
                <div className={cn.logo_container}>
                    <Image src={logo125x35} alt='4RM SYSTEMS' />
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
                        <li><Link href="/projects" itemProp="url"><span itemProp="name" suppressHydrationWarning>{lang === "ENG" ? "Projects" : "Проекты"}</span></Link></li>
                        <li><Link href="/company" itemProp="url"><span itemProp="name" suppressHydrationWarning>{lang === "ENG" ? "About company" : "О компании"}</span></Link></li>
                        <li><Link href="/contacts" itemProp="url"><span itemProp="name" suppressHydrationWarning>{lang === "ENG" ? "Contacts" : "Контакты"}</span></Link></li>
                    </ul>
                </div>
                <div className={cn.call}>
                    <button onClick={() => setCallForm(true)} suppressHydrationWarning>{lang === "ENG" ? "REQUEST A CALL" : "ЗАКАЗАТЬ ЗВОНОК"}</button>
                </div>
                <div className={cn.icons}>
                    <a onClick={searchFormHandler}><Image src={search} alt="Search" /></a>
                    <a href="mailto:info@4rm.org"><Image src={mail} alt="Mail" /></a>
                    <Link href={router.asPath} locale={lang === "ENG" ? 'ru' : 'en'} onClick={localizationHandler} suppressHydrationWarning>
                        {lang === "ENG" ? "ENG" : "RU"}
                    </Link>
                </div>
            </div>
            <div className={cn.mobile__menu}>
                    <Image onClick={searchFormHandler} src={search} alt="Search" />
                    <Link href={router.asPath} locale={lang === "ENG" ? 'ru' : 'en'} onClick={localizationHandler} suppressHydrationWarning>
                        {lang === "ENG" ? "ENG" : "RU"}
                    </Link>
                    {nav ?
                        <Image onClick={() => setNav(!nav)} src={close} alt="Close" className={cn.mobile__menu_close} />
                        : <Image onClick={() => setNav(!nav)} src={menu}  alt="Menu" />}
            </div>
            {
                callForm && <CallForm modal={modal} setCallForm={setCallForm} />
            }
            {
                searchForm && <SearchForm setSearchForm={setSearchForm} lang={lang} />
            }
        </nav>
    );
}

export default Header;