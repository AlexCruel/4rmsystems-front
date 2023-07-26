import cn from "./styles.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {faThumbsUp, faParachuteBox, faIndustry, faUserGear} from "@fortawesome/free-solid-svg-icons";

const Information = () => {
    return (
        <div className={cn.container}>
            <h1>Информация</h1>
            <Container className="mt-5">
                <Row>
                    <Col className="d-flex flex-column text-center">
                        <FontAwesomeIcon icon={faIndustry} className={cn.icon} />
                        <h5>Собственное производство</h5>
                        <p>Высокотехнологичное сертифицированное оборудование</p>
                    </Col>
                    <Col className="d-flex flex-column text-center">
                        <FontAwesomeIcon icon={faThumbsUp} className={cn.icon} />
                        <h5>Качество продукции</h5>
                        <p>Подтверждено длительной эксплуатацией ведущими ритейлерами</p>
                    </Col>
                    <Col className="d-flex flex-column text-center">
                        <FontAwesomeIcon icon={faParachuteBox} className={cn.icon} />
                        <h5>География поставок</h5>
                        <p>Страны ближнего и дальнего зарубежья</p>
                    </Col>
                    <Col className="d-flex flex-column text-center">
                        <FontAwesomeIcon icon={faUserGear} className={cn.icon} />
                        <h5>Клиентский сервис</h5>
                        <p>Менеджеры работают во всех регионах присутствия</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Information;