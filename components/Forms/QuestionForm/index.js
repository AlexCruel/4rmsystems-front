import cn from "./styles.module.scss";
import {useForm} from "react-hook-form";
import {question} from "@/pages/api/application";
import SubmitModal from "@/components/Modals/SubmitModal";
import {useState} from "react";

const QuestionForm = ({ modal }) => {
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
        const response = await question(JSON.stringify(data));
        if (response === "true") {
            setModalActive(true);
            reset();
        }
    }

    return (
        <div className={cn.modal}>
            <form onSubmit={handleSubmit(formHandler)}>
                <div className={cn.modal__title}>Задать вопрос</div>
                <div className={cn.modal__input}>
                    <label>Телефон*</label>
                    <input id="phone" type="text"
                           className={errors?.phone ? cn.input_error : ""}
                           pattern="[+0-9]+"
                           title="+375112223344" placeholder={errors?.phone ? "Введите телефон" : "+375112223344"}
                           {...register("phone", {required: true})} />
                    <br />
                    <label>Вопрос*</label>
                    <textarea
                           id="message"
                           className={errors?.message ? cn.input_error : ""}
                           placeholder={errors?.message ? "Введите сообщение" : "Ваше сообщение..."}
                           {...register("message", {required: true})} />
                </div>
                <div>
                    <button>Отправить</button>
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