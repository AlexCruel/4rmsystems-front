import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import CatalogModal from "@/components/Modals/CatalogModal";
import {useState} from "react";
import {getCookie} from "cookies-next";

const Catalog = ({ catalog, modalContact, modalQuestion }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalObject, setModalObject] = useState(
        {
            subtitle: "",
            image_items: [],
        }
    );
    const lang = getCookie('lang');

    const clickCatalogHandler = (event) => {
        const item = catalog.find(x => x.id == event.target.id);

        setModalObject(prev => {
            return {
                ...prev,
                subtitle: item.title,
                image_items: item.image_items
            }
        });
        setActiveModal(!activeModal);
    }
    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <div className={cn.header__menu}>
                    <div className={cn.header__menu_title} suppressHydrationWarning>{lang === "ENG" ? "Catalog" : "Каталог"}</div>
                </div>
            </div>
            <Splide options={{
                type: 'splide',
                perPage: 3,
                perMove: 3,
                pagination: false,
                autoplay: true,
                interval: 3000,
                rewind: true,
                breakpoints: {
                    1300: {
                        perPage: 2,
                        perMove: 2
                    },
                    900: {
                        perPage: 1,
                        perMove: 1
                    }
                },
                classes: {
                    arrow: `splide__arrow your-class-arrow ${cn.arrow}`,
                    prev: `splide__arrow--prev ${cn.prev}`,
                    next: `splide__arrow--next ${cn.prev}`
                },
            }} aria-label="My Favorite Images">
                {catalog.map((item, index) => {
                    return (
                        <SplideSlide key={index} style={{display: "flex", justifyContent: "center"}}>
                            <div onClick={clickCatalogHandler} className={cn.slider__slide} itemScope itemType="https://schema.org/ImageObject">
                                <img
                                    itemProp="contentUrl"
                                    id={item.id}
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                    //width={495}
                                    //height={476}
                                    //layout="responsive"
                                    alt={item.image.alt}
                                />
                                <p onClick={clickCatalogHandler} id={index + 1} itemProp="name">{item.title}</p>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
            {
                activeModal ?
                <CatalogModal
                    activeModal={activeModal}
                    setActiveModal={setActiveModal}
                    modalObject={modalObject}
                    lang={lang}
                    modalContact={modalContact}
                    modalQuestion={modalQuestion} />
                : ""
            }

        </div>
    );
}

export default Catalog;