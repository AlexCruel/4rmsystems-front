import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";

const CatalogModal = ({ activeModal, setActiveModal, modalObject }) => {
    return (
        <div className={activeModal ? `${cn.modal} ${cn.active}` : cn.modal} onClick={() => setActiveModal(!activeModal)}>
            <div className={cn.modal__container} onClick={e => e.stopPropagation()}>
                <div className={cn.modal__container_content}>
                    <div className={cn.content__title}>Кассовые зоны</div>
                    <Splide options={{
                        type: 'slide',
                        perPage: 1,
                        perMove: 1,
                        //autoplay: true,
                        interval: 3000,
                        rewind: true,
                        pagination: true,
                        classes: {
                            arrows: `splide__arrows your-class-arrows ${cn.arrows}`,
                            arrow: `splide__arrow your-class-arrow ${cn.arrow}`,
                            prev: `splide__arrow--prev ${cn.prev}`,
                            next: `splide__arrow--next ${cn.prev}`,
                            page: `splide__pagination__page ${cn.page}`
                        }
                    }} aria-label="My Favorite Images">
                        {modalObject.image_items.map((item, index) => {
                            return (
                                <SplideSlide key={index}>
                                    <Image
                                        src={item.image.url}
                                        width={650}
                                        height={425}
                                        alt={item.alt}
                                    />
                                    <p>{item.description}</p>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                </div>
                <div className={cn.content__button}>
                    <button>Отправить заявку</button>
                </div>
            </div>
        </div>
    );
}

export default CatalogModal;