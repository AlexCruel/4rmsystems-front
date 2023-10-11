import cn from "./styles.module.scss";
import {useRef, useState} from "react";
import {getSearchInfo} from "@/pages/api/search";
import search from "../../../public/icons/search.svg";
import Image from "next/image";
import parse from "html-react-parser";

const SearchForm = ({ setSearchForm }) => {
    const [searchResult, setSearchResult] = useState(null);
    const inputRef = useRef();

    const inputHandler = async (event) => {
        if (event.target.value.length > 0) {
            const res = await getSearchInfo(event.target.value);
            setSearchResult(prev => res);
            console.log(res);
            console.log("searchResult", searchResult);
        } else {
            setSearchResult(prev => null);
        }
    }

    const clearBtnHandler = () => {
        inputRef.current.value = "";
        setSearchResult(prev => null);
    }

    return (
        <div className={cn.modal} onClick={() => setSearchForm(false)}>
            <div className={cn.modal__container} onClick={e => e.stopPropagation()}>
                <div className={cn.container__input}>
                    <span className={cn.input_searchBtn}>
                        <Image src={search} alt="Seacrh" />
                    </span>
                    <input type="text" ref={inputRef} onChange={inputHandler} />
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
                                        <p className={cn.item_title}>{item.title}</p>
                                        <p className={cn.item_text}>{parse(`${item.content.slice(0, 300)}...`)}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        </div>
    );
}

export default SearchForm;