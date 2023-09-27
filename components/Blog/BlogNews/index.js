import {Splide, SplideSlide} from '@splidejs/react-splide';
import cn from "../styles.module.scss";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";

const BlogNews = ({ newsComponent }) => {
    return (
        <div>
            <Splide options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                pagination: false,
                autoplay: true,
                interval: 3000,
                breakpoints: {
                    1150: {
                        perPage: 3,
                        perMove: 3
                    },
                    850: {
                        perPage: 2,
                        perMove: 2
                    },
                    650: {
                        perPage: 1,
                        perMove: 1
                    }
                },
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.custom__arrow}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.custom__arrow}`
                }
            }} aria-label="My Favorite Images" >
                {
                    newsComponent.map((item, index) => {
                        return (
                            <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                                <Link className={cn.slide} href={`news/${item.slug}`}>
                                    <div itemScope itemType="https://schema.org/ImageObject">
                                        <Image
                                            itemProp="contentUrl"
                                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                            alt={item.image.alt}
                                            width={201}
                                            height={190}
                                            layout="responsive"
                                        />
                                    </div>
                                    <div itemProp="headline">{item.title}</div>
                                </Link>
                            </SplideSlide>
                        );
                    })
                }
            </Splide>
        </div>
    );
}

export default BlogNews;