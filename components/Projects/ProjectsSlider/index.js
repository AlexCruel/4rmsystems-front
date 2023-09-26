import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import {getCookie} from "cookies-next";

const ProjectsSlider = ({ projects }) => {
    const lang = getCookie('lang');

    return (
        <div className={cn.container}>
            <div className={cn.container__header}>
                <div className={cn.container__header_menu}>
                    <h2 className={cn.header__menu_title} suppressHydrationWarning>{lang === "ENG" ? "Projects" : "Проекты"}</h2>
                </div>
                <Link href="/projects" className={cn.container__btn_up}>
                    <button suppressHydrationWarning>
                        {lang === "ENG" ? "All projects" : "Все проекты"}
                    </button>
                </Link>
            </div>
            <Splide options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                pagination: false,
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    1300: {
                        perPage: 2,
                        perMove: 2
                    },
                    900: {
                        perPage: 1,
                        perMove: 1
                    }
                },
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.x}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.x}`
                }
            }} aria-label="My Favorite Images">
                {projects.map((item, index) => {
                    return (
                        <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                            <Link href={`projects/${item.slug}`} className={cn.test}>
                                <div className={cn.slider__cards} itemScope itemType="https://schema.org/ImageObject">
                                    <Image
                                        itemProp="contentUrl"
                                        src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                        width={340}
                                        height={270}
                                        layout="responsive"
                                        alt={item.image.alt} />
                                    {/*<p itemProp="headline">{item.title}</p>*/}
                                </div>
                                <p itemProp="headline">{item.title}</p>
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
            <Link href="/projects" className={cn.container__btn_down}>
                <button suppressHydrationWarning>
                    {lang === "ENG" ? "All projects" : "Все проекты"}
                </button>
            </Link>
        </div>
    );
}

export default ProjectsSlider;