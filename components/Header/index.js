import HeaderCallCenter from "@/components/Header/HeaderCallCenter";
import HeaderMenu from "@/components/Header/HeaderMenu";
import HeaderButtons from "@/components/Header/HeaderButtons";
import cn from "./styles.module.scss";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <Navbar expand="lg" className={"bg-body-tertiary fixed-top" + " " + cn.header}>
            <Container className={cn.header_container}>
                <Navbar.Brand href="#home">Логотип</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <HeaderCallCenter />
                <Navbar.Collapse id="basic-navbar-nav">
                    <HeaderMenu />
                    <HeaderButtons />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;