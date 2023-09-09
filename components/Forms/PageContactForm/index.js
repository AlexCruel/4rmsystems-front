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
                            <p className={cn.contact__title}>Нужна консультация?</p>
                            <p className={cn.contact__subtitle}>Отправьте заявку, и мы Вам перезвоним.</p>
                        </div>
                        <div className={cn.contact__consult_btn}>
                            <button onClick={() => setCallForm(true)}>Заказать звонок</button>
                            <button onClick={() => setQuestionForm(true)}>Задать вопрос</button>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit(formHandler)} className={cn.contact__subscript}>
                    <Image src={envelope} alt="Envelope" />
                    <div className={cn.contact__content}>
                        <p className={cn.contact__title}>Подписаться на рассылку</p>
                        <div className={cn.contact__policy}>
                            <input type="checkbox"
                                   {...register("policy", {required: true})} />
                            <label className={errors?.policy ? cn.policy_error : ""}>
                                {
                                    errors?.policy ? "Подтвердите, что вы соглашаетесь с условиями обработки данных." : "*Отправляя форму, вы соглашаетесь с условиями обработки данных."
                                }
                            </label>
                        </div>
                        <div className={cn.contact__subscript_btn}>
                            <input type="email" className={errors?.email ? cn.input_error : ""} placeholder={errors?.email ? "Введите Email" : "example@mail.com"}
                                   {...register("email", {required: true})} />
                            <button>Подписаться</button>
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