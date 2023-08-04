import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import catalog_1 from "@/public/img/Catalog/catalog_1.png";
import catalog_2 from "@/public/img/Catalog/catalog_2.png";
import catalog_3 from "@/public/img/Catalog/catalog_3.png";

const Catalog = () => {
    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <div className={cn.header_menu}>
                    <h1>Каталог</h1>
                </div>
                <button>Весь каталог</button>
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
                        <Image src={catalog_1} alt="Project"/>
                        <h5>Заголовок 1</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={catalog_2} alt="Project" />
                        <h5>Заголовок 2</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={catalog_3} alt="Project" />
                        <h5>Заголовок 3</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={catalog_1} alt="Project" />
                        <h5>Заголовок 4</h5>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <Image src={catalog_2} alt="Project" />
                        <h5>Заголовок 5</h5>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Catalog;