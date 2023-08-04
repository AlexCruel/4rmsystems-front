import Image from "next/image";
import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import img_1 from "../../public/img/slide_img_1.png";
import img_2 from "../../public/img/slide_img_2.png";
import img_3 from "../../public/img/slide_img_3.png";
import banner_1 from "../../public/img/banner_1.png";
import arrow from "../../public/icons/arrow.svg";

const Banner = () => {
    return (
        <div className={cn.banner_container}>
            <Splide options={{
                type: 'slide',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 3000,
                rewind: true,
                classes: {
                    arrows: `splide__arrows your-class-arrows ${cn.arrows}`,
                    arrow: `splide__arrow your-class-arrow ${cn.arrow}`,
                    prev: `splide__arrow--prev ${cn.prev}`,
                    next: `splide__arrow--next ${cn.prev}`,
                    page: `splide__pagination__page ${cn.page}`
                }
            }} aria-label="My Favorite Images">
                <SplideSlide>
                    <Image src={banner_1} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={img_2} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={img_3} alt="Image 3"/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={img_1} alt="Image 4"/>
                </SplideSlide>
                <SplideSlide>
                    <Image src={img_2} alt="Image 5"/>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Banner;