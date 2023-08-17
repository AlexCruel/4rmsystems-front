import Image from "next/image";
import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Link from "next/link";

const Banner = ({ banners }) => {
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
                {banners.map((item, index) => {
                    return (
                        <SplideSlide key={index}>
                            <Link href={`${item.url}`}>
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image}`}
                                    layout="responsive"
                                    width={100}
                                    height={100}
                                    alt="Banner" />
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default Banner;