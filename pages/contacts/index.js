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
import Breadcrumbs from "@/components/Breadcrumbs";
import {getCookie} from "cookies-next";
import {setLocalizationCookie} from "@/utils/localization";
import useResize from "@/hooks/useResize";

export const getServerSideProps = async ({resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const lang = getCookie('lang', {req, res})

    const info = await getInfoData(lang);
    const page = await getPageData("contacts", lang);
    const modalConsult = await getModalData('consult_form', lang);
    const modalCall = await getModalData('call_form', lang);

    return {
        props: {
            ...info,
            ...page,
            modalConsult,
            modalCall,
            resolvedUrl,
            lang
        }
    }
}

const Contacts = ({ ...props }) => {
    const size = useResize();

    return (
        <>
            <Head>
                <title>{props.page.seo_title}</title>
                <meta name="keywords" content={props.page.seo_key} />
                <meta name="description" content={props.page.seo_description} />
                <meta property="og:title" content={props.page.seo_h1} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${process.env.NEXT_PUBLIC_SITE_DOMAIN}${props.resolvedUrl}`} />
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${props.page.banner.url}`} />
                <meta property="og:description" content={props.page.seo_description} />
                <meta property="og:site_name" content="4RM Systems" />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container} itemScope itemType="https://schema.org/Organization">
                <h1>{props.page.seo_h1}</h1>
                <Breadcrumbs title={props.page.name} />
                <div className={cn.container__main}>
                    {
                        size[0] >= 1200 ? <SmallContactForm socials={props.socials} modal={props.modalConsult.modal} /> : ""
                    }
                    <div className={cn.container__main_house}>
                        {
                            props.page.contacts_main?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <div className={cn.house_title} itemProp="name">{item.title}</div>
                                        <div className={cn.house_contacts}>
                                            {
                                                item.phone_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={phone} alt="Phone" />
                                                            <a href={`tel:${item.phone}`} itemProp="telephone">{item.phone}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                            {
                                                item.email_items?.map((item, index) => {
                                                    return (
                                                        <div key={index} className={cn.contacts_item}>
                                                            <Image src={mail} alt="Mail" />
                                                            <a href={`mailto:${item.email}`} itemProp="email">{item.email}</a>
                                                        </div>
                                                    );
                                                })
                                            }
                                        </div>
                                        <div className={cn.house_text} itemProp="address">
                                            {item.description}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                <div className={cn.container__submain}>
                    <div className={cn.house_title} suppressHydrationWarning>
                        {props.lang === "ENG" ? "Service centers and partners" : "Сервисные центры и партнеры"}
                    </div>
                    <div className={cn.container__submain_items}>
                        {
                            props.page.contacts_submain?.map((item, index) => {
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
                                                            <a href={`mailto:${item.email}`}>{item.email}</a>
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
            {
                size[0] <= 1200 ? <SmallContactForm socials={props.socials} modal={props.modalConsult.modal} /> : ""
            }
            <Map />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Contacts;