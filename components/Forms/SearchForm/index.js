import cn from "./styles.module.scss";
import {useEffect, useRef, useState} from "react";
import {getSearchInfo} from "@/pages/api/search";
import search from "../../../public/icons/search.svg";
import Image from "next/image";
import parse from "html-react-parser";
import Link from "next/link";

const SearchForm = ({ setSearchForm, lang }) => {
    const [searchResult, setSearchResult] = useState(null);
    const inputRef = useRef();
    const inputPlaceholder = lang === "RU" ? "Найти..." : "Find...";
    const notFoundText = lang === "RU" ? "По Вашему запросу ничего не найдено" : "Nothing was found for your request";
    const [notFound, setNotFound] = useState(false);

    const inputHandler = async (event) => {
        if (event.target.value.length > 0) {
            const res = await getSearchInfo(event.target.value, lang);
            setSearchResult(prev => res);

            if (res.length < 1) {
                setNotFound(true);
            } else {
                setNotFound(false);
            }

        } else {
            setSearchResult(prev => null);
        }
    }

    const clearBtnHandler = () => {
        inputRef.current.value = "";
        inputRef.current.placeholder = inputPlaceholder;
        setSearchResult(prev => null);
        setNotFound(false);
    }

    const clickInputHandler = () => {
        inputRef.current.placeholder = "";
    }

    const clickModalHandler = () => {
        setSearchForm(false);
        document.getElementsByTagName('body')[0].style = 'overflow: visible;';
    }

    const clickTitleHandler = () => {
        document.getElementsByTagName('body')[0].style = 'overflow: visible;';
        setSearchForm(false);
    }

    return (
        <div className={cn.modal} onClick={clickModalHandler}>
            <div className={cn.modal__container} onClick={e => e.stopPropagation()}>
                <div className={cn.container__input}>
                    <span className={cn.input_searchBtn}>
                        <Image src={search} alt="Seacrh" />
                    </span>
                    <input
                        onClick={clickInputHandler}
                        type="text"
                        ref={inputRef}
                        onChange={inputHandler}
                        placeholder={inputPlaceholder} />
                    <span onClick={clearBtnHandler} className={cn.input_clearBtn}>X</span>
                </div>
                <div className={cn.container__result}>
                    {
                        searchResult?.map((item, index) => {
                            return (
                                <div key={index} className={cn.result__item}>
                                    <div className={cn.item_image}>
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                            alt={item.image.alt} />
                                    </div>
                                    <div className={cn.item__box}>
                                        <Link href={item.type !== undefined ? `/${item.type}/${item.slug}` : `/projects/${item.slug}`}>
                                            <p onClick={clickTitleHandler} className={cn.item_title}>{item.title}</p>
                                        </Link>
                                        <p className={cn.item_text}>{parse(`${item.content.slice(0, 300)}...`)}</p>
                                        <div className={cn.item_type}>
                                            {
                                                lang === "RU"
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
                        notFound && <div className={cn.notFound_text}>{notFoundText}</div>
                    }
                </div>

            </div>
        </div>
    );
}

export default SearchForm;