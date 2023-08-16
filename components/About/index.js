import cn from "./styles.module.scss";
import Image from "next/image";
import about_company from "../../public/img/about_company.png";
import parse from "html-react-parser";

const About = ({ about }) => {
    return (
        <div className={cn.container}>
            <div className={cn.content}>
                <div className={cn.image}><Image width="552" height="400" src={about_company} alt="Company" /></div>
                <div className={cn.text}>
                    <h1>О компании</h1>
                    {parse(about.description)}
                    {/*<p>*/}
                    {/*    4RM Systems предлагает передовые технологии и проверенное*/}
                    {/*    качество, которые помогут вам стать лидером в сфере ритейла.*/}
                    {/*    С 2015 года компания разрабатывает и поставляет широкий*/}
                    {/*    ассортимент торгового оборудования:*/}
                    {/*</p>*/}
                    {/*<ul>*/}
                    {/*    <li>кассовые зоны,</li>*/}
                    {/*    <li>холодильные витрины,</li>*/}
                    {/*    <li>почтоматы,</li>*/}
                    {/*    <li>торговые и складские стеллажи,</li>*/}
                    {/*    <li>брендированное оборудование POSM,</li>*/}
                    {/*    <li>готовые решения для АЗС, магазинов у дома, кофе-зон,</li>*/}
                    {/*    <li>хлебобулочных, фруктово-овощных, алкогольных зон и т.д.</li>*/}
                    {/*</ul>*/}
                </div>

            </div>
        </div>
    );
}

export default About;