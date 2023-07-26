import Image from "next/image";
import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import img_1 from "../../public/img/slide_img_1.png";
import img_2 from "../../public/img/slide_img_2.png";
import img_3 from "../../public/img/slide_img_3.png";


const Banner = () => {
    return (
        <div className={cn.container}>
            <Splide options={{
                type: 'slide',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 3000,
                rewind: true,
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.x}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.x}`
                }
            }} aria-label="My Favorite Images">
                <SplideSlide>
                    <div>
                        <Image src={img_1} alt="Image 1"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <Image src={img_2} alt="Image 2"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <Image src={img_3} alt="Image 3"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <Image src={img_1} alt="Image 4"/>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div>
                        <Image src={img_2} alt="Image 5"/>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Banner;