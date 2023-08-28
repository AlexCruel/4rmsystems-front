import cn from "./styles.module.scss";
import parse from "html-react-parser";
import {useEffect, useState} from "react";
import Link from "next/link";
import next from "../../public/icons/next.svg";
import prev from "../../public/icons/prev.svg";
import ellipsis from "../../public/icons/ellipsis.svg";
import Image from "next/image";

const setOpacity = (currentPage, pageNumbers, setOpacityPrev, setOpacityNext) => {
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
}

const setOpacityEllipsis = (currentPage, pageNumbers, setOpacityEllipsisPrev, setOpacityEllipsisNext) => {
    if (pageNumbers.length > 4 && currentPage <= pageNumbers.length - 2) {
        setOpacityEllipsisNext(true);
    } else {
        setOpacityEllipsisNext(false);
    }

    if (currentPage >= 3) {
        setOpacityEllipsisPrev(true);
    } else {
        setOpacityEllipsisPrev(false);
    }
}

const Pagination = ({ blogDataLength, blogsPerPage, paginate, currentPage, setCurrentPage, typePage }) => {
    const pageNumbers = [];
    const [opacityPrev, setOpacityPrev] = useState(false);
    const [opacityNext, setOpacityNext] = useState(true);
    const [opacityEllipsisPrev, setOpacityEllipsisPrev] = useState(false);
    const [opacityEllipsisNext, setOpacityEllipsisNext] = useState(false);

    useEffect(() => {

        setOpacity(currentPage, pageNumbers, setOpacityPrev, setOpacityNext);
        setOpacityEllipsis(currentPage, pageNumbers, setOpacityEllipsisPrev, setOpacityEllipsisNext);


    }, [currentPage, pageNumbers]);

    for (let i = 1; i <= Math.ceil(blogDataLength / blogsPerPage); i++) {
        pageNumbers.push(i);
    }

    const nextPageHandler = () => {
        if (currentPage + 1 <= pageNumbers.length) {
            setCurrentPage(prev => prev + 1);
        }
    }
    const prevPageHandler = () => {
        if (currentPage - 1 !== 0) {
            setCurrentPage(prev => prev - 1);
        }
    }

    return (
        <>
            {blogDataLength >= 7
                ? <ul className={cn.container}>
                    <Link href={currentPage == 2 ? `/${typePage}` : `/${typePage}/page/${currentPage - 1}`}>
                        <li onClick={prevPageHandler} className={opacityPrev ? cn.container__prev_visible : cn.container__prev_invisible}>
                            <Image src={prev} alt="<" />
                        </li>
                    </Link>
                    {
                        currentPage !== 1
                            ? <Link href={`/${typePage}`}>
                                <li onClick={() => paginate(1)}>
                                    1
                                </li>
                            </Link>
                            : ""
                    }
                    <li className={opacityEllipsisPrev ? cn.container__prevEllipsis_visible : cn.container__prevEllipsis_invisible}>
                        <Image src={ellipsis} alt="..." />
                    </li>
                    {
                        currentPage - 1 > 0 && currentPage - 1 !== 1
                            ? <Link href={`/${typePage}/page/${currentPage - 1}`}>
                                <li onClick={() => paginate(currentPage - 1)}>
                                    {currentPage - 1}
                                </li>
                            </Link>
                            : ""
                    }
                    <Link href={currentPage === 1 ? `/${typePage}` : `/${typePage}/page/${currentPage}`}>
                        <li onClick={() => paginate(currentPage)} className={cn.container__page}>
                            {currentPage}
                        </li>
                    </Link>
                    {
                        currentPage + 1 < pageNumbers.length
                            ? <Link href={`/${typePage}/page/${currentPage + 1}`}>
                                <li onClick={() => paginate(currentPage + 1)}>
                                    {currentPage + 1}
                                </li>
                            </Link>
                            : ""
                    }
                    <li className={opacityEllipsisNext ? cn.container__nextEllipsis_visible : cn.container__nextEllipsis_invisible}>
                        <Image src={ellipsis} alt="..." />
                    </li>
                    {
                        currentPage !== pageNumbers.length
                            ? <Link href={`/${typePage}/page/${pageNumbers.length}`}>
                                <li onClick={() => paginate(pageNumbers.length)}>
                                    {pageNumbers.length}
                                </li>
                            </Link>
                            : ""
                    }
                    <Link href={currentPage + 1 < blogDataLength ? `/${typePage}/page/${currentPage + 1}` : ""}>
                        <li onClick={nextPageHandler} className={opacityNext ? cn.container__next_visible : cn.container__next_invisible}>
                            <Image src={next} alt=">" />
                        </li>
                    </Link>
                </ul>
                : ""}
        </>
    );
}

export default Pagination;