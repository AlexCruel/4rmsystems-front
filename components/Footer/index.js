import cn from "./styles.module.scss";
import Container from "react-bootstrap/Container";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Row, Col} from "react-bootstrap";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className={cn.footer}>
            <div className={cn.container}>
                <div className={cn.footer_inner}>
                    <div className={cn.footer_col}>
                        <a className={cn.footer_logo} href="#">
                            <Image src="" alt="Footer logo" />
                        </a>
                        <div className={cn.footer_row}>
                            <h5 className={cn.footer_title}>Режим работы</h5>
                            <p>Пн-пт: 8:30-17:30</p>
                        </div>
                        <div className={cn.footer_row}>
                            <h5 className={cn.footer_title}>Контакты</h5>
                            <ul className={cn.footer_list}>
                                <li>+375 44 504-14-01</li>
                                <li>+375 21 265-05-12</li>
                                <li> info@4rm.org</li>
                            </ul>
                        </div>
                        <div className={cn.footer_row}>
                            <p>
                                ООО "ФоЭрЭм Системс"
                                <br/>
                                УНП 811003078
                            </p>
                        </div>
                        <div className={cn.footer_row}>
                            <p>
                                2023
                                <br/>
                                @1ak-group.com
                            </p>
                        </div>
                    </div>

                    <div className={cn.footer_col}>
                        <h5 className={cn.footer_title}>О нас</h5>
                        <ul className={cn.footer_list}>
                            <li>
                                <a href="#">Контакты</a>
                            </li>
                            <li>
                                <a href="#">О компании</a>
                            </li>
                            <li>
                                <a href="#">Новости</a>
                            </li>
                        </ul>
                    </div>

                    <div className={cn.footer_col}>
                        <h5 className={cn.footer_title}>Клиентам</h5>
                        <ul className={cn.footer_list}>
                            <li>
                                <a href="#">Политика конфиденциальности</a>
                            </li>
                            <li>
                                <a href="#">Блог</a>
                            </li>
                            <li>
                                <a href="#">FAQ</a>
                            </li>
                            <li>
                                <a href="#">Проекты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        // <div className={cn.container}>
        //     <Container className={cn.block}>
        //         <div className={cn.info}>
        //             <h2>ЛОГОТИП</h2>
        //             <div>
        //                 <p className={cn.header}>Режим работы</p>
        //                 <p>Пн-пт: 8:30-17:30</p>
        //             </div>
        //             <div>
        //                 <span className={cn.header}>Контакты</span>
        //                 <br/>
        //                 <FontAwesomeIcon icon={faPhone} className={cn.icon_phone} />
        //                 +375 44 504-14-01
        //                 <br/>
        //                 <FontAwesomeIcon icon={faPhone} className={cn.icon_phone} />
        //                 +375 21 265-05-12
        //                 <br/>
        //                 <FontAwesomeIcon icon={faEnvelope} />
        //                  info@4rm.org
        //             </div>
        //             <br/>
        //             <p>
        //                 ООО "ФоЭрЭм Системс"
        //                 <br/>
        //                 УНП 811003078
        //             </p>
        //             <p>
        //                 2023
        //                 <br/>
        //                 @1ak-group.com
        //             </p>
        //         </div>
        //         <div className={cn.menu}>
        //             <div>
        //                 <p className={cn.header}>О нас</p>
        //                 <p>Контакты</p>
        //                 <p>О компании</p>
        //                 <p>Новости</p>
        //             </div>
        //             <div>
        //                 <p className={cn.header}>Клиентам</p>
        //                 <p>Политика конфиденциальности</p>
        //                 <p>Блог</p>
        //                 <p>FAQ</p>
        //                 <p>Проекты</p>
        //             </div>
        //         </div>
        //     </Container>
        // </div>
    );
}

export default Footer;