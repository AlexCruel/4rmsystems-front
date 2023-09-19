import cn from "./styles.module.scss";
import Image from "next/image";
import about_company from "../../public/img/about_company.png";
import parse from "html-react-parser";
import {getCookie} from "cookies-next";

const About = ({ about }) => {
    const lang = getCookie('lang');

    return (
        <div className={cn.container}>
            <div className={cn.content}>
                <div className={cn.image}>
                    <Image
                        width="552"
                        height="400"
                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${about.banner.url}`}
                        alt={about.banner.alt} />
                </div>
                <div className={cn.text}>
                    <h1 suppressHydrationWarning>{lang === "ENG" ? "About company" : "О компании"}</h1>
                    {parse(about.description)}
                </div>

            </div>
        </div>
    );
}

export default About;