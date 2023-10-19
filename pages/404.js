import {getInfoData, getModalData} from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles.404.module.scss";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {useState} from "react";
import CallForm from "@/components/Forms/CallForm";

export const getStaticProps = async ({ locale }) => {
    const info = await getInfoData("RU");
    const modalCall = await getModalData('call_form');

    return {
        props: {
            locale,
            ...info,
            modalCall
        }
    }
};

const PageNotFound = ({ ...props }) => {
    const [callForm, setCallForm] = useState(false);

    return (
        <>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <Breadcrumbs pre_title="404" title="404" />
                    <div className={cn.container_title}>
                        {
                            props.locale === "ru"
                                ? "Страница не найдена"
                                : "Page not found"
                        }

                    </div>
                    <div>
                        {
                            props.locale === "ru"
                                ? "Неверный URL-адрес или страница не существует"
                                : "Invalid URL or page does not exist"
                        }
                    </div>
                    <div className={cn.container_actions}>
                        <Link href="/">
                            <button>
                                {
                                    props.locale === "ru"
                                        ? "Главная страница"
                                        : "Main page"
                                }
                            </button>
                        </Link>
                        <button onClick={() => setCallForm(true)}>
                            {
                                props.locale === "ru"
                                    ? "Заказать звонок"
                                    : "Request a call"
                            }
                        </button>
                    </div>
                </div>
            </div>
            {
                callForm && <CallForm modal={props.modalCall.modal} setCallForm={setCallForm} />
            }
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default PageNotFound;