import cn from './styles.module.scss';
import Nav from "react-bootstrap/Nav";

const HeaderMenu = () => {
    return (
        <Nav className={cn.menu}>
            <Nav.Link href="#link1">Проекты</Nav.Link>
            <Nav.Link href="#link2">О компании</Nav.Link>
            <Nav.Link href="#link3">Контакты</Nav.Link>
        </Nav>
    );
}

export default HeaderMenu;