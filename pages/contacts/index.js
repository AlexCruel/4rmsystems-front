import Map from "@/components/Map";
import {
    getInfoData,
    getPageData
} from "@/utils/functions";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmallContactForm from "@/components/Forms/SmallContactForm";
import cn from "./styles.module.scss";

export const getServerSideProps = async () => {
    const info = await getInfoData();
    const page = await getPageData("news");

    return {
        props: {
            ...info,
            ...page
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
                    <SmallContactForm socials={props.socials} />
                    <div className={cn.container__main_house}>
                        <div>
                            <div className={cn.house_title}>Торговый дом 4RM Беларусь</div>
                            <div className={cn.house_contacts}>
                                <button>+375 21 265-05-12</button>
                                <button>info@4rm.com</button>
                            </div>
                            <div className={cn.house_text}>
                                Республика Беларусь, г. Минск, ул. Домбровская 9, 2 этаж, 220140
                            </div>
                        </div>
                        <div>
                            <div className={cn.house_title}>Торговый дом 4RM Россия</div>
                            <div className={cn.house_contacts}>
                                <button>+375 44 504-14-01</button>
                                <button>+375 21 265-05-12</button>
                            </div>
                            <div className={cn.house_text}>
                                125040, Российская Федерация, г. Москва, 3я улица Ямского Поля, д.2, к.26, оф.116
                            </div>
                        </div>
                        <div>
                            <div className={cn.house_title}>Производство</div>
                            <div className={cn.house_contacts}>
                                <button>+375 44 504-14-01</button>
                                <button>+375 21 265-05-12</button>
                            </div>
                            <div className={cn.house_text}>
                                210039, Республика Беларусь, г. Витебск,
                                ул. Петруся Бровки, 50, корп. 7
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cn.container__submain}>
                    <div className={cn.house_title}>Сервисные центры и партнеры</div>
                    <div className={cn.container__submain_items}>
                        <div>
                            <div className={cn.house_title}>Производство</div>
                            <div className={cn.house_contacts}>
                                <button>+375 44 504-14-01</button>
                                <button>+375 21 265-05-12</button>
                                <button>+375 21 265-05-12</button>
                            </div>
                            <div className={cn.house_text}>
                                210039, Республика Беларусь, г. Витебск,
                                ул. Петруся Бровки, 50, корп. 7
                            </div>
                        </div>
                        <div>
                            <div className={cn.house_title}>Производство</div>
                            <div className={cn.house_contacts}>
                                <button>+375 44 504-14-01</button>
                                <button>+375 21 265-05-12</button>
                            </div>
                            <div className={cn.house_text}>
                                210039, Республика Беларусь, г. Витебск,
                                ул. Петруся Бровки, 50, корп. 7
                            </div>
                        </div>
                        <div>
                            <div className={cn.house_title}>Производство</div>
                            <div className={cn.house_contacts}>
                                <button>+375 44 504-14-01</button>
                                <button>+375 21 265-05-12</button>
                            </div>
                            <div className={cn.house_text}>
                                210039, Республика Беларусь, г. Витебск,
                                ул. Петруся Бровки, 50, корп. 7
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map />
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Contacts;