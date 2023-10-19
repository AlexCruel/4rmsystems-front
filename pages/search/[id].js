import {setLocalizationCookie} from "@/utils/localization";
import {getCookie} from "cookies-next";
import {getInfoData, getModalData} from "@/utils/functions";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import cn from "./styles[id].module.scss";
import {getSearchInfo} from "@/pages/api/search";
import Link from "next/link";
import parse from "html-react-parser";
import Breadcrumbs from "@/components/Breadcrumbs";
import Head from "next/head";

export const getServerSideProps = async ({params, resolvedUrl, req, res, locale}) => {
    setLocalizationCookie(req, res, locale);
    const { id } = params;
    const lang = getCookie('lang', {req, res});

    const searchResult = await getSearchInfo(id, lang, 'ssr');
    const info = await getInfoData(lang);
    const modalCall = await getModalData('call_form', lang);

    return {
        props: {
            id,
            searchResult,
            lang,
            ...info,
            modalCall
        }
    }
}

const Search = ({ ...props }) => {
    const notFoundText = props.lang === "RU" ? "По Вашему запросу ничего не найдено" : "Nothing was found for your request";

    return (
        <>
            <Head>
                <meta name="robots" content="noindex, nofollow" key='robots' />
            </Head>
            <Header phones={props.info.phone_items} modal={props.modalCall.modal} />
            <div className={cn.container}>
                <div className={cn.container__text}>
                    <h1 itemProp="headline" suppressHydrationWarning>{
                        props.lang === "RU"
                        ? "Результаты поиска"
                        : "Searching results"
                    }</h1>
                    <Breadcrumbs
                        pre_title=''
                        title={props.lang === "RU"
                            ? `Результаты поиска по запросу "${props.id}"`
                            : `Search results for your query "${props.id}"`} />
                </div>
                <div className={cn.container__result}>
                    {
                        props.searchResult?.map((item, index) => {
                            return (
                                <div key={index} className={cn.result__item}>
                                    <div className={cn.item_image}>
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                            alt={item.image.alt} />
                                    </div>
                                    <div className={cn.item__box}>
                                        <Link href={item.type !== undefined ? `/${item.type}/${item.slug}` : `/projects/${item.slug}`}>
                                            <p className={cn.item_title}>{item.title}</p>
                                        </Link>
                                        <p className={cn.item_text}>{parse(`${item.content.slice(0, 300)}...`)}</p>
                                        <div className={cn.item_type}>
                                            {
                                                props.lang === "RU"
                                                    ? item.type === "news"
                                                        ? "Новости"
                                                        : item.type === "blog"
                                                            ? "Блог"
                                                            : "Проекты"
                                                    : item.type === "news"
                                                        ? "News"
                                                        : item.type === "blog"
                                                            ? "Blog"
                                                            : "Projects"
                                            }
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {
                        !props.searchResult.length && <div className={cn.notFound_text}>{notFoundText}</div>
                    }
                </div>
            </div>
            <Footer info={props.info} menu={props.menu} socials={props.socials} />
        </>
    );
}

export default Search;