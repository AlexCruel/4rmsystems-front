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

    const formHandler = async (data) => {
        const response = await postFeedback(JSON.stringify(data));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.container}>
            <div className={cn.contact__form}>
                <form onSubmit={handleSubmit(formHandler)}>
                    <div className={cn.contact__form_title}>Нужна консультация?</div>
                    <div>
                        <label>ФИО*</label>
                        <input type="text" className={errors?.name ? cn.input_error : ""} placeholder={errors?.name ? "Введите ФИО" : "Иванов Иван Иванович"}
                               {...register("name", {required: true})} />
                    </div>
                    <div>
                        <label>Телефон*</label>
                        <input
                            type="text"
                            pattern="[+0-9]+"
                            title="+375112223344"
                            className={errors?.phone ? cn.input_error : ""}
                            placeholder={errors?.phone ? "Введите телефон" : "+375112223344"}
                            {...register("phone", {required: true})}
                        />
                    </div>
                    <div>
                        <label>Email*</label>
                        <input type="email" className={errors?.email ? cn.input_error : ""} placeholder={errors?.email ? "Введите Email" : "example@mail.com"}
                               {...register("email", {required: true})} />
                    </div>
                    <div>
                        <label>Сообщение*</label>
                        <textarea id="message" className={errors?.message ? cn.input_error : ""} placeholder={errors?.message ? "Введите сообщение" : "Ваше сообщение..."}
                                  {...register("message", {required: true})} />
                    </div>
                    <div className={cn.contact__form__policy}>
                        <input type="checkbox" {...register("policy", {required: true})} />
                        <label className={errors?.policy ? cn.policy_error : ""}>
                            {
                                errors?.policy ? "Подтвердите, что вы соглашаетесь с условиями обработки данных." : "*Отправляя форму, вы соглашаетесь с условиями обработки данных."
                            }
                        </label>
                    </div>
                    <div>
                        <button>Отправить</button>
                    </div>
                </form>
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