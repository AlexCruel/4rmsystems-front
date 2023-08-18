import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import CatalogModal from "@/components/Modals/CatalogModal";
import {useState} from "react";

const Catalog = ({ catalog }) => {
    const [activeModal, setActiveModal] = useState(false);
    const [modalObject, setModalObject] = useState(
        {
            image_items: [],
            description: ""
        }
    );

    const clickCatalogHandler = (event) => {
        const item = catalog.find(x => x.id == event.target.id);

        setActiveModal(!activeModal);
        setModalObject(prev => {
            return {
                ...prev,
                image_items: item.image_items,
                description: item.description
            }
        });
    }

    console.log("catalog", modalObject);

    return (
        <div className={cn.container}>
            <div className={cn.header}>
                <div className={cn.header__menu}>
                    <h1>Каталог</h1>
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
                classes: {
                    prev  : `splide__arrow--prev`,
                    next  : `splide__arrow--next`
                }
            }} aria-label="My Favorite Images">
                {catalog.map((item, index) => {
                    return (
                        <SplideSlide onClick={clickCatalogHandler} key={index} style={{display: "flex", justifyContent: "center"}}>
                            <div className={cn.slider__slide}>
                                <Image
                                    id={item.id}
                                    src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image}`}
                                    width={295}
                                    height={276}
                                    alt="Project"/>
                                <p>{item.title}</p>
                            </div>
                        </SplideSlide>
                    );
                })}
            </Splide>
            <CatalogModal activeModal={activeModal} setActiveModal={setActiveModal} modalObject={modalObject} />
        </div>
    );
}

export default Catalog;