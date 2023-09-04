import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const ProjectsSlider = ({ projects }) => {
    return (
        <div className={cn.container}>
            <div className={cn.container__header}>
                <div className={cn.container__header_menu}>
                    <h1>Проекты</h1>
                </div>
                <Link href="/projects"><button>Все проекты</button></Link>
            </div>
            <Splide options={{
                type: 'loop',
                perPage: 3,
                perMove: 1,
                pagination: false,
                autoplay: true,
                interval: 3000,
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.x}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.x}`
                }
            }} aria-label="My Favorite Images">
                {projects.map((item, index) => {
                    return (
                        <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                            <Link href={`projects/${item.slug}`}>
                                <div className={cn.slider__cards}>
                                    <Image
                                        src={item.image.url}
                                        width={100}
                                        height={100}
                                        alt={item.image.alt} />
                                    <p>{item.title}</p>
                                </div>
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default ProjectsSlider;