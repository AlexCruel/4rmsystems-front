import cn from "./styles.module.scss";
import {useForm} from "react-hook-form";
import {postFeedback} from "@/pages/api/application";
import {useState} from "react";
import SubmitModal from "@/components/Modals/SubmitModal";

const ContactForm = () => {
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
        }
        //reset();
    }

    return (
        <div className={cn.container}>
            <div className={cn.contact}>
                <div className={cn.contact__info}>
                    <div>
                        <p className={cn.contact__info_question}>Нужна консультация?</p>
                        <p className={cn.contact__info_action}>Заполните форму, и мы свяжемся с вами.</p>
                        <p>
                            4RM Systems предлагаем сегодня то,
                            что понадобится ритейлу завтра.
                        </p>
                        <p>
                            Команда поддержки на связи!
                        </p>
                    </div>
                    <div>
                        <p><a>+375 (44) 504-14-01</a></p>
                        <p><a>info@4rm.com</a></p>
                    </div>
                </div>
                <div className={cn.contact__form}>
                    <form onSubmit={handleSubmit(formHandler)}>
                        <p>Менеджер поддержки 4RM</p>
                        <div>
                            <label>ФИО*</label>
                            <input id="name" className={errors?.name ? cn.input_error : ""} type="text" placeholder={errors?.name ? "Введите ФИО" : "Иванов Иван Иванович"}
                                   {...register("name", {required: true})} />
                        </div>
                        <div>
                            <label>Телефон*</label>
                            <input id="phone" className={errors?.phone ? cn.input_error : ""}
                                   pattern="[+0-9]+"
                                   title="+375112223344"
                                   type="text" placeholder={errors?.phone ? "Введите телефон" : "+375 00 000-00-00"}
                                   {...register("phone", {required: true})} />
                        </div>
                        <div>
                            <label>Email*</label>
                            <input id="email" className={errors?.email ? cn.input_error : ""} type="email" placeholder={errors?.email ? "Введите Email" : "example@mail.com"}
                                   {...register("email", {required: true})} />
                        </div>
                        <div>
                            <label>Сообщение*</label>
                            <textarea id="message" className={errors?.message ? cn.input_error : ""} placeholder={errors?.message ? "Введите сообщение" : "Ваше сообщение..."}
                                   {...register("message", {required: true})} />
                        </div>
                        <div className={cn.contact__form__policy}>
                            <input id="policy" type="checkbox"
                                   {...register("policy", {required: true})} />
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
            </div>
            {
                modalActive && <SubmitModal modalActive={modalActive} setModalActive={setModalActive} />
            }
        </div>
    );
}

export default ContactForm;