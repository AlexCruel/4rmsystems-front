import cn from "./styles.module.scss";
import {getCookie} from "cookies-next";

const Map = () => {
    const lang = getCookie('lang');

    return (
        <div className={cn.container}>
            <h2 suppressHydrationWarning>{lang === "ENG" ? "Offices of 4RM Systems" : "Офисы компании 4RM Systems"}</h2>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A145fe02b90df0bae5fec925e36f56fba40a906d075bd430d081cd4fe68268805&amp;source=constructor"
                    className={cn.map}>
            </iframe>
        </div>
    );
}

export default Map;