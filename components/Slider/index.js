import img_1 from "../../public/img/slide_img_1.png";
import img_2 from "../../public/img/slide_img_2.png";
import img_3 from "../../public/img/slide_img_3.png";
import Image from "next/image";
import cn from "./styles.module.scss";
import Carousel from 'react-bootstrap/Carousel';


const Slider = () => {
    return (
        <>
            <Carousel pause="hover" className={cn.carousel}>
                <Carousel.Item interval={4000}>
                    <Image src={img_1} alt="image" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <Image src={img_2} alt="image" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <Image src={img_3} alt="image" />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Slider;