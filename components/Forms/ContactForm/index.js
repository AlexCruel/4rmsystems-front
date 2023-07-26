import cn from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import {Button, Col, Form, Row} from "react-bootstrap";

const ContactForm = () => {
    return (
        <Container className={cn.container}>
            <Row>
                <Col>
                    <div className={cn.info}>
                        <h1>LOREM IPSUM</h1>
                        <h5>LOREM IPSUM</h5>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                        </p>
                        <h5>+375 (44) 504-14-01</h5>
                        <h5>info@4rm.com</h5>
                    </div>
                </Col>
                <Col>
                    <div className={cn.form}>
                        <h5>LOREM IPSUM</h5>
                        <Form>
                            <Form.Group className={cn.form_group}>
                                {/*<Form.Label>ФИО</Form.Label>*/}
                                <Form.Control className={cn.input} as="input" size="lg" type="text" placeholder="ФИО"></Form.Control>
                            </Form.Group>
                            <Form.Group className={cn.form_group}>
                                {/*<Form.Label>Телефон</Form.Label>*/}
                                <Form.Control className={cn.input} type="phone" size="lg" placeholder="Телефон"></Form.Control>
                            </Form.Group>
                            <Form.Group className={cn.form_group}>
                                {/*<Form.Label>Email</Form.Label>*/}
                                <Form.Control className={cn.input} as="input" size="lg" type="email" placeholder="Email"></Form.Control>
                            </Form.Group>
                            <Form.Group className={cn.form_group}>
                                {/*<Form.Label>Сообщение</Form.Label>*/}
                                <Form.Control className={cn.input_area} as="textarea" size="lg" placeholder="Сообщение"></Form.Control>
                            </Form.Group>
                            <Button>Отправить</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm;