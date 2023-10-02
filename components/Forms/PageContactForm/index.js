import cn from "./styles.module.scss";
import person from "../../../public/icons/person.svg";
import envelope from "../../../public/icons/envelope.svg";
import Image from "next/image";
import {useForm} from "react-hook-form";
import {useState} from "react";
import {postSubscription} from "@/pages/api/application";
import SubmitModal from "@/components/Modals/SubmitModal";
import CallForm from "@/components/Forms/CallForm";
import QuestionForm from "@/components/Forms/QuestionForm";
import {getCookie} from "cookies-next";

const PageContactForm = ({ modalSubscription, modalCall, modalQuestion }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });

    const [modalActive, setModalActive] = useState(false);
    const [callForm, setCallForm] = useState(false);
    const [questionForm, setQuestionForm] = useState(false);
    const lang = getCookie('lang');

    const formHandler = async (data) => {
        const response = await postSubscription(JSON.stringify(data));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.container}>
            <div className={cn.contact}>
                <div className={cn.contact__consult}>
                    <Image src={person} alt="Person" />
                    <div className={cn.contact__content}>
                        <div>
                            <p className={cn.contact__title} suppressHydrationWarning>
                                {lang === "ENG" ? "Need some advice?" : "Нужна консультация?"}
                            </p>
                            <p className={cn.contact__subtitle} suppressHydrationWarning>
                                {lang === "ENG" ? "Send a request and we will call you back." : "Отправьте заявку, и мы Вам перезвоним."}
                            </p>
                        </div>
                        <div className={cn.contact__consult_btn}>
                            <button onClick={() => setCallForm(true)} suppressHydrationWarning>
                                {lang === "ENG" ? "Request a call" : "Заказать звонок"}
                            </button>
                            <button onClick={() => setQuestionForm(true)} suppressHydrationWarning>
                                {lang === "ENG" ? "Ask a Question" : "Задать вопрос"}
                            </button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(formHandler)} className={cn.contact__subscript}>
                    <Image src={envelope} alt="Envelope" />
                    <div className={cn.contact__content}>
                        <p className={cn.contact__title} suppressHydrationWarning>
                            {lang === "ENG" ? "Subscribe to our newsletter" : "Подписаться на рассылку"}
                        </p>
                        <div className={cn.contact__policy}>
                            <input type="checkbox"
                                   {...register("policy", {required: true})} />
                            <label className={errors?.policy ? cn.policy_error : ""} suppressHydrationWarning>
                                {
                                    errors?.policy ?
                                        lang === "ENG" ?
                                            "Confirm that you agree to the terms of data processing." : "Подтвердите, что вы соглашаетесь с условиями обработки данных."
                                        : lang === "ENG" ?
                                            "*By submitting the form, you agree to the terms of data processing." : "*Отправляя форму, вы соглашаетесь с условиями обработки данных."
                                }
                            </label>
                        </div>
                        <div className={cn.contact__subscript_btn}>
                            <input type="email"
                                   className={errors?.email ? cn.input_error : ""}
                                   placeholder={errors?.email ?
                                       lang === "ENG" ?
                                           "Enter Email" : "Введите Email"
                                       : "example@mail.com"}
                                   {...register("email", {required: true})} />
                            <button suppressHydrationWarning>
                                {lang === "ENG" ? "Subscribe" : "Подписаться"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            {
                modalActive &&
                <SubmitModal
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    modal={modalSubscription}
                />
            }
            {
                callForm && <CallForm modal={modalCall} setCallForm={setCallForm} />
            }
            {
                questionForm && <QuestionForm modal={modalQuestion} setQuestionForm={setQuestionForm} />
            }
        </div>
    );
}

export default PageContactForm;