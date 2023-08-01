import cn from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactForm = () => {
    return (
        <div className={cn.container}>
            <div className={cn.contact_container}>
                <div className={cn.contact_info}>
                    <h1>LOREM IPSUM</h1>
                    <h5>LOREM IPSUM</h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
                    <h5>+375 (44) 504-14-01</h5>
                    <h5>info@4rm.com</h5>
                </div>
                <div className={cn.form}>
                    <form>
                        <h5>LOREM IPSUM</h5>
                        <div>
                            <label>ФИО</label>
                            <input type="text"/>
                        </div>
                        <div>
                            <label>Телефон</label>
                            <input type="phone" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" />
                        </div>
                        <div>
                            <label>Сообщение</label>
                            <textarea />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;