import cn from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactForm = () => {
    return (
        <div className={cn.container}>
            <div className={cn.contact_container}>
                <div className={cn.contact_info}>
                    <p>Нужна консультация?</p>
                    <p>Заполните форму, и мы свяжемся с вами.</p>
                    <p>
                        4RM Systems предлагаем сегодня то,
                        что понадобится ритейлу завтра.
                    </p>
                    <p>
                        Команда поддержки на связи!
                    </p>
                    <p>+375 (44) 504-14-01</p>
                    <p>info@4rm.com</p>
                </div>
                <div className={cn.form_container}>
                    <form>
                        <h5>Менеджер поддержки 4RM</h5>
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
                    <div className={cn.policy}>
                        <input type="checkbox" />
                        <label>*Отправляя форму, вы соглашаетесь с условиями обработки данных.</label>
                    </div>
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;