import cn from "./styles.module.scss";
import Image from "next/image";
import logo from "../../public/img/logo_footer.svg";
import phone from "../../public/icons/phone_footer.svg";
import mail from "../../public/icons/mail_footer.svg";
import facebook from "../../public/icons/social/facebook.svg";
import instagram from "../../public/icons/social/instagram.svg";
import linkedin from "../../public/icons/social/linkedin.svg";
import vk from "../../public/icons/social/vk.svg";
import youtube from "../../public/icons/social/youtube.svg";
import Link from "next/link";
import parse from "html-react-parser";
import {getCookie} from "cookies-next";
import arrow_down from "../../public/icons/arrow_down.svg";
import {useEffect, useState} from "react";
import useResize from "@/hooks/useResize";
import logo125x35_w from "../../public/img/logo125x35_w.svg";

const Footer = ({info, menu, socials}) => {
    const lang = getCookie('lang');
    const [activeTab, setActiveTab] = useState([]);
    const size = useResize();

    const activeTabHandler = (event) => {
        if (!activeTab.includes(event.target.id)) {
            setActiveTab([...activeTab, event.target.id]);
        } else {
            let index = activeTab.indexOf(event.target.id);
            setActiveTab([...activeTab.slice(0, index), ...activeTab.slice(index + 1)]);
        }
    }

    return (
        <footer className={cn.footer} itemScope itemType="http://schema.org/SiteNavigationElement">
            <div className={cn.footer_container}>
                <div className={cn.info} itemScope itemType="https://schema.org/Organization">
                    <div className={cn.logo_container}>
                        <div><Image src={logo125x35_w} alt="Logo" /></div>
                        <div className={cn.logo_container_text} suppressHydrationWarning>
                            {lang === "ENG" ? "Equipment for modern retail" : "Оборудование для современного ритейла"}
                        </div>
                    </div>
                    <div className={cn.work_time}>
                        <div suppressHydrationWarning>
                            {lang === "ENG" ? "Work time" : "Режим работы"}
                        </div>
                        <ul>
                            <li>{info.work_time}</li>
                        </ul>
                    </div>
                    <div className={cn.contacts}>
                        <div suppressHydrationWarning>
                            {lang === "ENG" ? "Contacts" : "Контакты"}
                        </div>
                        <ul>
                            {info.phone_items?.map((item, index) => {
                                return (
                                    <li key={index} itemProp="telephone">
                                        <Image src={phone} alt="Phone" />
                                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                                    </li>
                                );
                            })}
                            {info.email_items?.map((item, index) => {
                                return (
                                    <li key={index} itemProp="email">
                                        <Image src={mail} alt="Mail" />
                                        <a href={`mailto:${item.email}`}>{item.email}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className={cn.company}>
                        <span itemProp="name">{parse(`${info.company_name}`)}</span>
                    </div>
                    <div className={cn.rights}>
                        {parse(`${info.copyright}`)}
                    </div>
                </div>
                {menu.map((section, index) => {
                    return (
                        <div key={index} className={cn.category} onClick={activeTabHandler}>
                            <div onClick={activeTabHandler} className={cn.category_title} id={index.toString()}>
                                {section.title}
                                <Image id={index} src={arrow_down} alt="Arrow" className={size[0] <= "750" ? "" : cn.tab_invisible} />
                            </div>
                            <ul className={activeTab.includes(index.toString()) || size[0] >= "750" ? "" : cn.tab_invisible}>
                                {section.items.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <Link href={`/${item.url}`} itemProp="url">
                                                <span itemProp="name">{item.name}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
            <div className={cn.social}>
                <Link href={`${socials.facebook}`} target="_blank"><Image src={facebook} alt="Facebook" /></Link>
                <Link href={`${socials.instagram}`} target="_blank"><Image src={instagram} alt="Instagram" /></Link>
                <Link href={`${socials.linkedin}`} target="_blank"><Image src={linkedin} alt="LinkedIn" /></Link>
                <Link href={`${socials.vk}`} target="_blank"><Image src={vk} alt="VK" /></Link>
                <Link href={`${socials.youtube}`} target="_blank"><Image src={youtube} alt="YouTube" /></Link>
            </div>
        </footer>
    );
}

export default Footer;