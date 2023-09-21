import {getInfoData, getModalData} from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.404.module.scss";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const getStaticProps = async () => {
    const info = await getInfoData("RU");
    const modalCall = await getModalData('call_form');

    return {
        props: {
            ...info,
            modalCall
        }
    }
};

const PageNotFound = ({ ...props }) => {
    return (
        <>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.breadcrumbs}>
                <Breadcrumbs pre_title="404" title="404" />
            </div>
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