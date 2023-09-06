import cn from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/icons/social/facebook.svg";
import instagram from "@/public/icons/social/instagram.svg";
import linkedin from "@/public/icons/social/linkedin.svg";
import vk from "@/public/icons/social/vk.svg";
import youtube from "@/public/icons/social/youtube.svg";

const SmallContactForm = ({ socials }) => {
    return (
        <div className={cn.container}>
            <div className={cn.contact__form}>
                <form>
                    <div className={cn.contact__form_title}>Нужна консультация?</div>
                    <div>
                        <label>ФИО*</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Телефон*</label>
                        <input type="phone" />
                    </div>
                    <div>
                        <label>Email*</label>
                        <input type="email" />
                    </div>
                    <div>
                        <label>Сообщение</label>
                        <textarea />
                    </div>
                </form>
                <div className={cn.contact__form__policy}>
                    <input type="checkbox" />
                    <label>*Отправляя форму, вы соглашаетесь с условиями обработки данных.</label>
                </div>
                <button>Отправить</button>
            </div>
            <div className={cn.socials__form}>
                <div className={cn.socials__form_text}>Мы в социальных сетях</div>
                <div className={cn.socials__form_socials}>
                    <Link href={`${socials.facebook}`}><Image src={facebook} alt="Facebook" /></Link>
                    <Link href={`${socials.instagram}`}><Image src={instagram} alt="Instagram" /></Link>
                    <Link href={`${socials.linkedin}`}><Image src={linkedin} alt="LinkedIn" /></Link>
                    <Link href={`${socials.vk}`}><Image src={vk} alt="VK" /></Link>
                    <Link href={`${socials.youtube}`}><Image src={youtube} alt="YouTube" /></Link>
                </div>
            </div>
        </div>
    );
}

export default SmallContactForm;