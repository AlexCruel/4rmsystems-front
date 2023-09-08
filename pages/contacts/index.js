import Map from "@/components/Map";
import {
    getInfoData, getModalData,
    getPageData
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmallContactForm from "@/components/Forms/SmallContactForm";
import cn from "./styles.module.scss";
import mail from "@/public/icons/mail_footer.svg";
import Image from "next/image";
import phone from "@/public/icons/phone_footer.svg";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("contacts");
    const modal = await getModalData('consult_form');

    return {
        props: {
            ...info,
            ...page,
            ...modal
        }
    }
}

const Contacts = ({ ...props }) => {
    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
            </Head>
            <Header phones={props.info.phone_items} />
            <div className={cn.container}>
                <h1>Контакты</h1>
                <div className={cn.container__main}>
                    <SmallContactForm socials={props.socials} modal={props.modal} />
                    <div className={cn.container__main_house}>
                        {
                            props.page.contacts_main.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={cn.house_title}>{item.title}</div>
                                        <div className={cn.house_contacts}>
                                            {
                                                item.phone_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={phone} alt="Phone" />
                                                            <a href={`tel:${item.phone}`}>{item.phone}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                            {
                                                item.email_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={mail} alt="Mail" />
                                                            <a href="#">{item.email}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className={cn.house_text}>
                                            {item.description}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={cn.container__submain}>
                    <div className={cn.house_title}>Сервисные центры и партнеры</div>
                    <div className={cn.container__submain_items}>
                        {
                            props.page.contacts_submain.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={cn.house_title}>{item.title}</div>
                                        <div className={cn.house_contacts}>
                                            {
                                                item.phone_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={phone} alt="Phone" />
                                                            <a href={`tel:${item.phone}`}>{item.phone}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                            {
                                                item.email_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={mail} alt="Mail" />
                                                            <a href="#">{item.email}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className={cn.house_text}>
                                            {item.description}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Map />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Contacts;