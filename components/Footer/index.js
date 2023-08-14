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
        <footer className={cn.footer}>
            <div className={cn.footer_container}>
                <div className={cn.info}>
                    <div className={cn.logo_container}>
                        <div><Image src={logo} alt="Logo" /></div>
                        <div className={cn.logo_container_text}>Оборудование для современного ритейла</div>
                    </div>
                    <div className={cn.work_time}>
                        <h5>Режим работы</h5>
                        <ul>
                            <li>{info.work_time}</li>
                        </ul>
                    </div>
                    <div className={cn.contacts}>
                        <h5>Контакты</h5>
                        <ul>
                            {info.phone_items?.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Image src={phone} alt="Phone" />
                                        <a href="#">{item.phone}</a>
                                    </li>
                                );
                            })}
                            <li>
                                <Image src={mail} alt="Mail" />
                                <a href="#">{info.email}</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cn.company}>
                        {parse(`${info.company_name}`)}

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
                            <h5>{section.title}</h5>
                            <ul>
                                {section.items.map((item, index) => {
                                    return (
                                        <li key={index}><Link href={item.url}>{item.name}</Link></li>
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