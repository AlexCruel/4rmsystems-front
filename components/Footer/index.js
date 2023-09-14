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

const Footer = ({info, menu, socials}) => {
    return (
        <footer className={cn.footer} itemScope itemType="http://schema.org/SiteNavigationElement">
            <div className={cn.footer_container}>
                <div className={cn.info} itemScope itemType="https://schema.org/Organization">
                    <div className={cn.logo_container}>
                        <div><Image src={logo} alt="Logo" /></div>
                        <div className={cn.logo_container_text}>Оборудование для современного ритейла</div>
                    </div>
                    <div className={cn.work_time}>
                        <div>Режим работы</div>
                        <ul>
                            <li>{info.work_time}</li>
                        </ul>
                    </div>
                    <div className={cn.contacts}>
                        <div>Контакты</div>
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
                    <div className={cn.social}>
                        <Link href={`${socials.facebook}`}><Image src={facebook} alt="Facebook" /></Link>
                        <Link href={`${socials.instagram}`}><Image src={instagram} alt="Instagram" /></Link>
                        <Link href={`${socials.linkedin}`}><Image src={linkedin} alt="LinkedIn" /></Link>
                        <Link href={`${socials.vk}`}><Image src={vk} alt="VK" /></Link>
                        <Link href={`${socials.youtube}`}><Image src={youtube} alt="YouTube" /></Link>
                    </div>
                </div>
                {menu.map((section, index) => {
                    return (
                        <div key={index} className={cn.category}>
                            <div className={cn.category_title}>{section.title}</div>
                            <ul>
                                {section.items.map((item, index) => {
                                    return (
                                        <li key={index}><Link href={item.url} itemProp="url"><span itemProp="name">{item.name}</span></Link></li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </footer>
    );
}

export default Footer;