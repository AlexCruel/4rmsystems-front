import cn from "../styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";

const BlogBlog = ({ className, blogsComponent }) => {
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
                    blogsComponent.map((item, index) => {
                        return (
                            <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                                <Link href={`blog/${item.slug}`}>
                                    <div className={cn.slide}>
                                        <Image
                                            src={item.image.url}
                                            alt={item.image.alt}
                                            width={100}
                                            height={100}
                                        />
                                        <div>{item.title}</div>
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

export default BlogBlog;