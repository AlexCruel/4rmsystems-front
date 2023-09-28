import Image from "next/image";
import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Link from "next/link";

const Banner = ({ banners }) => {
    return (
        <div className={cn.banner_container} itemScope itemType="https://schema.org/ImageObject">
            <Splide options={{
                type: 'slide',
                perPage: 1,
                perMove: 1,
                autoplay: true,
                interval: 3000,
                rewind: true,
                classes: {
                    arrows: `splide__arrows your-class-arrows`,
                    arrow: `splide__arrow your-class-arrow ${cn.arrow}`,
                    prev: `splide__arrow--prev ${cn.prev}`,
                    next: `splide__arrow--next ${cn.prev}`,
                    page: `splide__pagination__page ${cn.page}`
                }
            }} aria-label="My Favorite Images"
                    renderControls={() => (
                        <div className="splide__arrows">
                            <div className=" splide__arrow--prev" role="button">
                                NEXT
                            </div>
                            <div className="splide__arrow--next" role="button">
                                PREV
                            </div>
                        </div>
                    )}
            >
                {banners.map((item, index) => {
                    return (
                        <SplideSlide key={index}>
                            <Link href={`${item.url}`}>
                                <img
                                    itemProp="contentUrl"
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                    //layout="responsive"
                                    //width={1440}
                                    //height={500}
                                    alt={item.image.alt} />
                            </Link>
                        </SplideSlide>
                    );
                })}
            </Splide>
        </div>
    );
}

export default Banner;