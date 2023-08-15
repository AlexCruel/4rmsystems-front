import cn from "./styles.module.scss";
import Information from "@/components/Information";
import Partner from "@/components/Partner";
import BlogNews from "@/components/Blog/BlogNews";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";
import link from "../../public/icons/link.svg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {getFooterMenu, getInfo, getSocials} from "@/pages/api/hello";


export const getStaticProps = async () => {
    const content = await fetch("http://localhost:8888/4rmsystems-server/api/page");
    const data = await content.json();

    const info = await getInfo();
    const menu = await getFooterMenu();
    const socials = await getSocials();

    return {
        props: {
            data,
            info,
            menu,
            socials
        }
    }
};

const Company = ({ ...props }) => {
    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1>О компании</h1>
                </div>
                <Image
                    src={`http://localhost:8888/4rmsystems-server/storage/app/media${props.data.banner}`}
                    layout="responsive"
                    width={1000}
                    height={300}
                    alt="Banner" />
                <div className={cn.container__text}>
                    {parse(props.data.content)}
                </div>
                <Information />
                <Partner />
                <BlogNews />
                <div className={cn.container__text}>
                    <ul>
                        {props.data.links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Link href={`${item.link}`}>{item.name}
                                        <Image src={link} alt="Link" />
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Company;