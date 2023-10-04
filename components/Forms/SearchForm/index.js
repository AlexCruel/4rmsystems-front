import cn from "./styles.module.scss";
import {useState} from "react";
import {getSearchInfo} from "@/pages/api/search";

const SearchForm = ({ setSearchForm }) => {
    const [searchResult, setSearchResult] = useState(null);

    const inputHandler = async (event) => {
        console.log(event.target.value.length);
        const res = await getSearchInfo();
        setSearchResult(prev => res);
        console.log(res);
        console.log("searchResult", searchResult);
    }

    return (
        <div className={cn.modal} onClick={() => setSearchForm(false)}>
            <div className={cn.modal__container} onClick={e => e.stopPropagation()}>
                <input onChange={inputHandler} />
                {
                    searchResult.map((item, index) => {
                        return (
                            <p key={index}>{item.title}</p>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default SearchForm;