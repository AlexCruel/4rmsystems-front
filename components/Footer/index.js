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

const Footer = () => {
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
                            <li>Пн-пт: 8:30-17:30</li>
                        </ul>
                    </div>
                    <div className={cn.contacts}>
                        <h5>Контакты</h5>
                        <ul>
                            <li>
                                <Image src={phone} alt="Phone" />
                                <a href="#">+375 44 504-14-01</a>
                            </li>
                            <li>
                                <Image src={phone} alt="Phone" />
                                <a href="#">+375 21 265-05-12</a>
                            </li>
                            <li>
                                <Image src={mail} alt="Mail" />
                                <a href="#">info@4rm.org</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cn.company}>
                        ООО "ФоЭрЭм Системс"
                        <br />
                        УНП 811003078
                    </div>
                    <div className={cn.rights}>
                        2023
                        <br />
                        @1ak-group.com
                    </div>
                    <div className={cn.social}>
                        <Image src={facebook} alt="Facebook" />
                        <Image src={instagram} alt="Instagram" />
                        <Image src={linkedin} alt="LinkedIn" />
                        <Image src={vk} alt="VK" />
                        <Image src={youtube} alt="YouTube" />
                    </div>
                </div>
                <div className={cn.category}>
                    <h5>Каталог</h5>
                    <ul>
                        <li>Кассовые зоны</li>
                        <li>Почтоматы</li>
                        <li>Торговые стеллажи</li>
                        <li>Складские системы</li>
                        <li>Холодильные витрины</li>
                        <li>Брендированное оборужование</li>
                    </ul>
                </div>
                <div className={cn.category}>
                    <h5>О нас</h5>
                    <ul>
                        <li>Контакты</li>
                        <li>О компании</li>
                        <li>Новости</li>
                    </ul>
                </div>
                <div className={cn.category}>
                    <h5>Клиентам</h5>
                    <ul>
                        <li>Политика конфидениальности</li>
                        <li>Блог</li>
                        <li>FAQ</li>
                        <li>Проекты</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;