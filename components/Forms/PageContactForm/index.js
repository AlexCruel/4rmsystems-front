import cn from "./styles.module.scss";
import person from "../../../public/icons/person.svg";
import envelope from "../../../public/icons/envelope.svg";
import Image from "next/image";

const PageContactForm = () => {
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
                            <button>Заказать звонок</button>
                            <button>Задать вопрос</button>
                        </div>
                    </div>
                </div>
                <div className={cn.contact__subscript}>
                    <Image src={envelope} alt="Envelope" />
                    <div className={cn.contact__content}>
                        <p className={cn.contact__title}>Подписаться на рассылку</p>
                        <div className={cn.contact__policy}>
                            <input type="checkbox" />
                            <label>*Отправляя форму, вы соглашаетесь с условиями обработки данных.</label>
                        </div>
                        <div className={cn.contact__subscript_btn}>
                            <input type="email" placeholder="@" />
                            <button>Подписаться</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageContactForm;