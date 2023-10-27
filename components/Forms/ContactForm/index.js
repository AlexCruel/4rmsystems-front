import cn from "./styles.module.scss";
import {useForm} from "react-hook-form";
import {getModal, postFeedback} from "@/pages/api/application";
import {useState} from "react";
import SubmitModal from "@/components/Modals/SubmitModal";
import Image from "next/image";
import phone_black from "@/public/icons/phone_black.svg";
import mail_black from "@/public/icons/mail_black.svg";
import {getCookie} from "cookies-next";
import Link from "next/link";

const ContactForm = ({ modal }) => {
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
        const response = await postFeedback(JSON.stringify(data));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.container}>
            <div className={cn.contact}>
                <div className={cn.contact__info}>
                    <div>
                        <p className={cn.contact__info_question} suppressHydrationWarning>
                            {lang === "ENG" ? "Need some advice?" : "Нужна консультация?"}
                        </p>
                        <p className={cn.contact__info_action} suppressHydrationWarning>
                            {lang === "ENG" ? "Fill out the form and we will contact you." : "Заполните форму и мы свяжемся с вами."}
                        </p>
                        <p suppressHydrationWarning>
                            {lang === "ENG" ? "4RM Systems offer today what retail will need tomorrow." : "4RM Systems предлагаем сегодня то, что понадобится ритейлу завтра."}
                        </p>
                        <p suppressHydrationWarning>
                            {lang === "ENG" ? "The support team is in touch!" : "Команда поддержки на связи!"}
                        </p>
                    </div>
                    <div className={cn.contact__info__contacts}>
                        <p><Image src={phone_black} alt="Phone" /><a href='tel:+375445584444'>+375 (44) 558-44-44</a></p>
                        <p><Image src={mail_black} alt="Mail" /><a href='mailto:info@4rm.org'>info@4rm.org</a></p>
                    </div>
                </div>
                <div className={cn.contact__form}>
                    <form onSubmit={handleSubmit(formHandler)}>
                        <p suppressHydrationWarning>
                            {lang === "ENG" ? "4RM Support Manager" : "Менеджер поддержки 4RM"}
                        </p>
                        <div>
                            <label suppressHydrationWarning>
                                {lang === "ENG" ? "Full name*" : "ФИО*"}
                            </label>
                            <input id="name"
                                   className={errors?.name ? cn.input_error : ""}
                                   type="text"
                                   placeholder={errors?.name
                                       ?
                                       lang === "ENG" ?
                                           "Enter your full name" : "Введите ФИО"
                                       : lang === "ENG" ?
                                           "Steve Stevens" : "Иванов Иван Иванович"}
                                   {...register("name", {required: true})}
                                   suppressHydrationWarning />
                        </div>
                        <div>
                            <label suppressHydrationWarning>
                                {lang === "ENG" ? "Phone*" : "Телефон*"}
                            </label>
                            <input id="phone" className={errors?.phone ? cn.input_error : ""}
                                   pattern="[+0-9]+"
                                   title="+375112223344"
                                   type="text" placeholder={errors?.phone ?
                                        lang === "ENG" ?
                                            "Enter phone number" : "Введите телефон"
                                        : "+375112223344"}
                                   {...register("phone", {required: true})} />
                        </div>
                        <div>
                            <label>Email*</label>
                            <input id="email"
                                   className={errors?.email ? cn.input_error : ""}
                                   type="email"
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
                                   {...register("message", {required: true})}
                                      suppressHydrationWarning />
                        </div>
                        <div className={cn.contact__form__policy}>
                            <input id="policy" type="checkbox"
                                   {...register("policy", {required: true})} />
                            <label className={errors?.policy ? cn.policy_error : ""}>
                                <Link href="/privacy-policy" suppressHydrationWarning>
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

export default ContactForm;