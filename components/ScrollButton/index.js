import Image from "next/image";
import scrollButton from '../../public/img/scroll_button.svg';
import cn from './styles.module.scss';
import {useEffect, useState} from "react";

const ScrollButton = () => {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                setBackToTop(true);
            } else {
                setBackToTop(false);
            }
        })
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <Image className={backToTop ? cn.scrollButton : cn.invisible} src={scrollButton} onClick={scrollUp} alt="Scroll Arrow" />
    );
}

export default ScrollButton;