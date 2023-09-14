import {Splide, SplideSlide} from '@splidejs/react-splide';
import cn from "../styles.module.scss";
import '@splidejs/react-splide/css';
import Image from "next/image";
import Link from "next/link";

const BlogNews = ({ className, newsComponent }) => {
    return (
        <div className={className}>
            <Splide options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                pagination: false,
                autoplay: true,
                interval: 3000,
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.custom__arrow}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.custom__arrow}`
                }
            }} aria-label="My Favorite Images" >
                {
                    newsComponent.map((item, index) => {
                        return (
                            <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                                <Link href={`news/${item.slug}`}>
                                    <div className={cn.slide} itemScope itemType="https://schema.org/ImageObject">
                                        <Image
                                            itemProp="contentUrl"
                                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                            alt={item.image.alt}
                                            width={100}
                                            height={100}
                                        />
                                        <div itemProp="headline">{item.title}</div>
                                    </div>
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