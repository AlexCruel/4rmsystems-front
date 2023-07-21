import globe from "../../../public/icons/globe.svg";
import mail from "../../../public/icons/mail.svg";
import Image from "next/image";
import cn from "./styles.module.scss";
import Nav from "react-bootstrap/Nav";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faGlobe} from "@fortawesome/free-solid-svg-icons";

const HeaderButtons = () => {
    return (
        <Nav className={"justify-content-end flex-grow-1" + " " + cn.buttons}>
            <Nav.Link href="#link4"><FontAwesomeIcon icon={faEnvelope} /></Nav.Link>
            <Nav.Link href="#link5"><FontAwesomeIcon icon={faGlobe} /></Nav.Link>
        </Nav>
    );
}

export default HeaderButtons;