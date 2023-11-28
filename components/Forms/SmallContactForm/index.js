import cn from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/public/icons/social/facebook.svg";
import instagram from "@/public/icons/social/instagram.svg";
import linkedin from "@/public/icons/social/linkedin.svg";
import vk from "@/public/icons/social/vk.svg";
import youtube from "@/public/icons/social/youtube.svg";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {postFeedback} from "@/pages/api/application";
import SubmitModal from "@/components/Modals/SubmitModal";
import {getCookie} from "cookies-next";
import {getGeoData} from "@/utils/geo";

const SmallContactForm = ({ socials, modal }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const [modalActive, setModalActive] = useState(false);
    const lang = getCookie('lang');

    const formHandler = async (data) => {
        const fullData = await getGeoData(data);
        const response = await postFeedback(JSON.stringify(fullData));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.container}>
            <div className={cn.contact__form}>
                <form onSubmit={handleSubmit(formHandler)}>
                    <div className={cn.contact__form_title} suppressHydrationWarning>
                        {lang === "ENG" ? "Need some advice?" : "Нужна консультация?"}
                    </div>
                    <div>
                        <label suppressHydrationWarning>
                            {lang === "ENG" ? "Full name*" : "ФИО*"}
                        </label>
                        <input type="text"
                               className={errors?.name ? cn.input_error : ""}
                               placeholder={errors?.name
                                   ?
                                   lang === "ENG" ?
                                   "Enter your full name" : "Введите ФИО"
                                   : lang === "ENG" ?
                                       "Steve Stevens" : "Иванов Иван Иванович"}
                               {...register("name", {required: true})} />
                    </div>
                    <div>
                        <label suppressHydrationWarning>
                            {lang === "ENG" ? "Phone*" : "Телефон*"}
                        </label>
                        <input
                            type="text"
                            pattern="[+0-9]+"
                            title="+375112223344"
                            className={errors?.phone ? cn.input_error : ""}
                            placeholder={errors?.phone ?
                                    lang === "ENG" ?
                                        "Enter phone number" : "Введите телефон"
                                    : "+375112223344"}
                            {...register("phone", {required: true})}
                        />
                    </div>
                    <div>
                        <label>Email*</label>
                        <input type="email"
                               className={errors?.email ? cn.input_error : ""}
                               placeholder={errors?.email ?
                                   lang === "ENG" ?
                                       "Enter Email" : "Введите Email"
                                   : "example@mail.com"}
                               {...register("email", {required: true})} />
                    </div>
                    <div>
                        <label suppressHydrationWarning>
                            {lang === "ENG" ? "Message*" : "Сообщение*"}
                        </label>
                        <textarea id="message"
                                  className={errors?.message ? cn.input_error : ""}
                                  placeholder={errors?.message ?
                                      lang === "ENG" ?
                                          "Enter your message" : "Введите сообщение"
                                      : lang === "ENG" ?
                                          "Your message..." : "Ваше сообщение..."}
                                  {...register("message", {required: true})} />
                    </div>
                    <div className={cn.contact__form__policy}>
                        <input type="checkbox" {...register("policy", {required: true})} />
                        <label>
                            <Link className={errors?.policy ? cn.policy_error : ""} href="/privacy-policy" suppressHydrationWarning>
                                {
                                    errors?.policy ?
                                        lang === "ENG" ?
                                            "Confirm that you agree to the terms of data processing." : "Подтвердите, что вы соглашаетесь с условиями обработки данных."
                                        : lang === "ENG" ?
                                            "*By submitting the form, you agree to the terms of data processing." : "*Отправляя форму, вы соглашаетесь с условиями обработки данных."
                                }
                            </Link>
                        </label>
                    </div>
                    <div>
                        <button suppressHydrationWarning>
                            {lang === "ENG" ? "Send" : "Отправить"}
                        </button>
                    </div>
                </form>
            </div>
            <div className={cn.socials__form}>
                <div className={cn.socials__form_text} suppressHydrationWarning>
                    {lang === "ENG" ? "We are in social networks" : "Мы в социальных сетях"}
                </div>
                <div className={cn.socials__form_socials}>
                    <Link href={`${socials.facebook}`} target="_blank"><Image src={facebook} alt="Facebook" /></Link>
                    <Link href={`${socials.instagram}`} target="_blank"><Image src={instagram} alt="Instagram" /></Link>
                    <Link href={`${socials.linkedin}`} target="_blank"><Image src={linkedin} alt="LinkedIn" /></Link>
                    <Link href={`${socials.vk}`} target="_blank"><Image src={vk} alt="VK" /></Link>
                    <Link href={`${socials.youtube}`} target="_blank"><Image src={youtube} alt="YouTube" /></Link>
                </div>
            </div>
            {
                modalActive &&
                <SubmitModal
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    modal={modal}
                />
            }
        </div>
    );
}

export default SmallContactForm;