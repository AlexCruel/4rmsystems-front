import cn from "./styles.module.scss";
import Image from "next/image";
import about_company from "../../public/img/about_company.png";
import parse from "html-react-parser";

const About = ({ about }) => {
    return (
        <div className={cn.container}>
            <div className={cn.content}>
                <div className={cn.image}>
                    <Image
                        width="552"
                        height="400"
                        src={about.banner.url}
                        alt={about.banner.alt} />
                </div>
                <div className={cn.text}>
                    <h1>О компании</h1>
                    {parse(about.description)}
                </div>

            </div>
        </div>
    );
}

export default About;