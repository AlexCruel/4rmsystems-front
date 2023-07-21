import cn from "./styles.module.scss";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import Navbar from "react-bootstrap/Navbar";

const HeaderCallCenter = () => {
    return (
        <Navbar.Text className={cn.call_center}>
            <Nav.Link href="#home">
                <FontAwesomeIcon icon={faPhone} className={cn.icon_phone} />
                +375 44 504-14-01
            </Nav.Link>
            <Nav.Link href="#link1">
                <FontAwesomeIcon icon={faPhone} className={cn.icon_phone} />
                +375 21 265-05-12
            </Nav.Link>
        </Navbar.Text>
    );
}

export default HeaderCallCenter;