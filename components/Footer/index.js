import cn from "./styles.module.scss";

const Footer = () => {
    return (
        <div className={cn.container}>
            <div className={cn.block}>
                <div className={cn.info}>
                    <h2>ЛОГОТИП</h2>
                    <div>
                        <h3>Режим работы</h3>
                        <p>Пн-пт: 8:30-17:30</p>
                    </div>
                    <div>
                        <h3>Контакты</h3>
                        <p>+375 44 504-14-01</p>
                        <p>+375 21 265-05-12</p>
                        <p> info@4rm.org</p>
                    </div>
                </div>
                <div className={cn.menu}>
                    <div>
                        <h3>О нас</h3>
                        <p>Контакты</p>
                        <p>О компании</p>
                        <p>Новости</p>
                    </div>
                    <div>
                        <h3>Клиентам</h3>
                        <p>Политика конфиденциальности</p>
                        <p>Блог</p>
                        <p>FAQ</p>
                        <p>Проекты</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;