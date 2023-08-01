import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import project from "../../public/img/project.png";
import Image from "next/image";

const Projects = () => {
    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <div className={cn.header_menu}>
                    <h1>Проекты</h1>
                </div>
                <button>Все проекты</button>
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
            }} aria-label="My Favorite Images" className={cn.slider}>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={project} alt="Project"/>
                        <h5>Заголовок 1</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={project} alt="Project" />
                        <h5>Заголовок 2</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={project} alt="Project" />
                        <h5>Заголовок 3</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={project} alt="Project" />
                        <h5>Заголовок 4</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={project} alt="Project" />
                        <h5>Заголовок 5</h5>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Projects;