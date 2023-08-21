import cn from "./styles.module.scss";
import parse from "html-react-parser";
import {useEffect, useState} from "react";

const Pagination = ({ blogData, blogsPerPage, paginate, currentPage, setCurrentPage }) => {
    const pageNumbers = [];
    const [opacityPrev, setOpacityPrev] = useState(false);
    const [opacityNext, setOpacityNext] = useState(true);

    useEffect(() => {
        if (currentPage > 1) {
            setOpacityPrev(true);
        } else {
            setOpacityPrev(false);
        }

        if (currentPage === pageNumbers.length) {
            setOpacityNext(false);
        } else {
            setOpacityNext(true);
        }
    }, [currentPage, pageNumbers]);

    for (let i = 1; i <= Math.ceil(blogData.length / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPage = () => {
        if (currentPage + 1 <= pageNumbers.length) {
            setCurrentPage(prev => prev + 1);
        }
    }
    const prevPage = () => {
        if (currentPage - 1 !== 0) {
            setCurrentPage(prev => prev - 1);
        }
    }

    return (
        <>
            <ul className={cn.container}>
                <li onClick={prevPage} className={opacityPrev ? cn.container__prev_visible : cn.container__prev_invisible}>{parse("<")}</li>
                {
                    pageNumbers.map((item, index) => (
                        <li key={index} onClick={() => paginate(item)}>
                            {item}
                        </li>
                    ))
                }
                <li onClick={nextPage} className={opacityNext ? cn.container__next_visible : cn.container__next_invisible}>{parse(">")}</li>
            </ul>
        </>
    );
}

export default Pagination;