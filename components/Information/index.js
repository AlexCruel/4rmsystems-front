import cn from "./styles.module.scss";
import info_1 from "../../public/icons/info_1.svg";
import info_2 from "../../public/icons/info_2.svg";
import info_3 from "../../public/icons/info_3.svg";
import info_4 from "../../public/icons/info_4.svg";
import Image from "next/image";

const Information = () => {
    return (
        <div className={cn.info_container}>
            <h1>Информация</h1>
            <div className={cn.info_content}>
                <div>
                    <Image src={info_1} alt="Info 1" />
                    <h2>Собственное производство</h2>
                    <hr />
                    <p>Высокотехнологичное сертифицированное оборудование</p>
                </div>
                <div>
                    <Image src={info_2} alt="Info 2" />
                    <h2>Качество продукции</h2>
                    <hr />
                    <p>Подтверждено длительной эксплуатацией ведущими ритейлерами</p>
                </div>
                <div>
                    <Image src={info_3} alt="Info 3" />
                    <h2>География поставок</h2>
                    <hr />
                    <p>Страны ближнего и дальнего зарубежья</p>
                </div>
                <div>
                    <Image src={info_4} alt="Info 4" />
                    <h2>Клиентский сервис</h2>
                    <hr />
                    <p>Менеджеры работают во всех регионах присутствия</p>
                </div>
            </div>
        </div>
    );
}

export default Information;