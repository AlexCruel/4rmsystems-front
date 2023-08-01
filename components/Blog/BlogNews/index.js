import {Splide, SplideSlide} from '@splidejs/react-splide';
import cn from "./styles.module.scss";
import '@splidejs/react-splide/css';

const BlogNews = () => {
    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <div className={cn.header_menu}>
                    <h1>Новости</h1>
                    <h2>Блог</h2>
                </div>
                <button>Все новости</button>
            </div>
            <Splide options={{
                type: 'loop',
                perPage: 4,
                perMove: 1,
                pagination: false,
                autoplay: true,
                interval: 3000,
                classes: {
                    prev  : `splide__arrow--prev + ' ' + ${ cn.x}`,
                    next  : `splide__arrow--next + ' ' + ${ cn.x}`
                }
            }} aria-label="My Favorite Images">
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <img src="" alt="."/>
                        <h5>Заголовок 1</h5>
                        <div>Lorem ipsum</div>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <img src="" alt="."/>
                        <h5>Заголовок 2</h5>
                        <div>Lorem ipsum</div>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <img src="" alt="."/>
                        <h5>Заголовок 3</h5>
                        <div>Lorem ipsum</div>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <img src="" alt="."/>
                        <h5>Заголовок 4</h5>
                        <div>Lorem ipsum</div>
                    </div>
                </SplideSlide>
                <SplideSlide style={{display: "flex", justifyContent: "center"}}>
                    <div className={cn.test}>
                        <img src="" alt="."/>
                        <h5>Заголовок 5</h5>
                        <div>Lorem ipsum</div>
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default BlogNews;