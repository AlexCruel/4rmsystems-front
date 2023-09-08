import { getInfoData } from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.module.scss";
import Link from "next/link";

export const getStaticProps = async () => {
    const info = await getInfoData();

    return {
        props: {
            ...info,
        }
    }
};

const PageNotFound = ({ ...props }) => {
    return (
        <>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <div className={cn.container_title}>Страница не найдена</div>
                <div className={cn.container_subtitle}>Неверный URL-адрес или страница не существует</div>
                <Link href="/"><button>Главная страница</button></Link>
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default PageNotFound;