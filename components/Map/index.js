import cn from "./styles.module.scss";
import {getCookie} from "cookies-next";

const Map = () => {
    const lang = getCookie('lang');

    return (
        <div className={cn.container}>
            <h1 suppressHydrationWarning>{lang === "ENG" ? "Offices of 4RM Systems" : "Офисы компании 4RM Systems"}</h1>
            <iframe
                className={cn.map}
                src="https://www.google.com/maps/d/u/0/embed?mid=1QI9riQnV0tlQ2EZeh-o9HvCOUnuQENk&ehbc=2E312F"
                width="600"
                height="450"
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
}

export default Map;