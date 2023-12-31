import cn from "./styles.module.scss";
import {useForm} from "react-hook-form";
import {question} from "@/pages/api/application";
import SubmitModal from "@/components/Modals/SubmitModal";
import {useState} from "react";
import {getCookie} from "cookies-next";
import {getGeoData} from "@/utils/geo";
import Link from "next/link";

const QuestionForm = ({ modal, setQuestionForm }) => {
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
        const response = await question(JSON.stringify(fullData));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.modal} onClick={() => setQuestionForm(false)}>
            <form onSubmit={handleSubmit(formHandler)} onClick={(event) => event.stopPropagation()}>
                <div className={cn.modal__title} suppressHydrationWarning>
                    <div>{lang === "ENG" ? "Ask a Question" : "Задать вопрос"}</div>
                    <div onClick={() => setQuestionForm(false)} className={cn.modal__title_close}>X</div>
                </div>
                <div className={cn.modal__input}>
                    <label suppressHydrationWarning>
                        {lang === "ENG" ? "Phone*" : "Телефон*"}
                    </label>
                    <input id="phone" type="text"
                           className={errors?.phone ? cn.input_error : ""}
                           pattern="[+0-9]+"
                           title="+375112223344"
                           placeholder={errors?.phone ?
                               lang === "ENG" ?
                                   "Enter phone number" : "Введите телефон"
                               : "+375112223344"}
                           {...register("phone", {required: true})} />
                    <label>Email</label>
                    <input id="email"
                           type="email"
                           placeholder={ lang === "ENG" ? "Enter Email" : "Введите Email"}
                           {...register("email")} />
                    <label suppressHydrationWarning>
                        {lang === "ENG" ? "Question*" : "Вопрос*"}
                    </label>
                    <textarea
                           id="message"
                           className={errors?.message ? cn.input_error : ""}
                           placeholder={errors?.message ?
                               lang === "ENG" ?
                                   "Enter your message" : "Введите сообщение"
                               : lang === "ENG" ?
                               "Your message..." : "Ваше сообщение..."}
                           {...register("message", {required: true})} />
                    <div className={cn.contact__form__policy}>
                        <input id="policy" type="checkbox"
                               {...register("policy", {required: true})} />
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
                </div>
                <div>
                    <button suppressHydrationWarning>
                        {lang === "ENG" ? "Send" : "Отправить"}
                    </button>
                </div>
            </form>
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

export default QuestionForm;