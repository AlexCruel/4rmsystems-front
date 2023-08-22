import cn from "./styles.module.scss";
import parse from "html-react-parser";
import {useEffect, useState} from "react";
import Link from "next/link";
import next from "../../public/icons/next.svg";
import prev from "../../public/icons/prev.svg";
import Image from "next/image";

const Pagination = ({ blogDataLength, blogsPerPage, paginate, currentPage, setCurrentPage }) => {
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
            <ul className={cn.container}>
                <Link href={currentPage == 2 ? `/projects` : `/projects/page/${currentPage - 1}`}>
                    <li onClick={prevPageHandler} className={opacityPrev ? cn.container__prev_visible : cn.container__prev_invisible}>
                        <Image src={prev} alt="<" />
                    </li>
                </Link>
                {
                    pageNumbers.map((item, index) => (
                        <Link
                            key={index}
                            href={item === 1 ? `/projects` : `/projects/page/${item}`}
                            >
                            <li onClick={() => paginate(item)} className={item === currentPage ? cn.container__page : ""}>
                                {item}
                            </li>
                        </Link>
                    ))
                }
                <Link href={currentPage + 1 < blogDataLength ? `/projects/page/${currentPage + 1}` : ""}>
                    <li onClick={nextPageHandler} className={opacityNext ? cn.container__next_visible : cn.container__next_invisible}>
                        <Image src={next} alt=">" />
                    </li>
                </Link>
            </ul>
        </>
    );
}

export default Pagination;