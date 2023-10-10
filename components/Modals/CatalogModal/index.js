import cn from "./styles.module.scss";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import Image from "next/image";
import SubmitModal from "@/components/Modals/SubmitModal";
import {useState} from "react";
import QuestionForm from "@/components/Forms/QuestionForm";

const CatalogModal = ({ activeModal, setActiveModal, modalObject, lang, modalContact, modalQuestion }) => {
    const [modalActive, setModalActive] = useState(false);
    const [questionForm, setQuestionForm] = useState(false);

    return (
        <div className={activeModal ? `${cn.modal} ${cn.active}` : cn.modal} onClick={() => setActiveModal(!activeModal)}>
            <div className={cn.modal__container} onClick={e => e.stopPropagation()}>
                <div className={cn.modal__container_content} itemScope itemType="https://schema.org/ImageObject">
                    <div className={cn.content__title}>{modalObject.subtitle}</div>
                    <Splide options={{
                        type: 'slide',
                        perPage: 1,
                        perMove: 1,
                        //autoplay: true,
                        interval: 3000,
                        rewind: true,
                        pagination: true,
                        classes: {
                            arrow: `splide__arrow your-class-arrow ${cn.arrow}`,
                            prev: `splide__arrow--prev ${cn.prev}`,
                            next: `splide__arrow--next ${cn.prev}`,
                            page: `splide__pagination__page ${cn.page}`
                        }
                    }} aria-label="My Favorite Images">
                        {modalObject.image_items.map((item, index) => {
                            return (
                                <SplideSlide key={index} className={cn.slider__slide}>
                                    <div className={cn.slider__slide_img}>
                                        <img
                                            itemProp="contentUrl"
                                            src={`${process.env.NEXT_PUBLIC_SERVER_DOMAIN}/storage/app/media${item.image.url}`}
                                            //width={650}
                                            //height={425}
                                            //layout={size[0] <= 950 ? "responsive" : ""}
                                            //layout="responsive"
                                            alt={item.alt}
                                        />
                                    </div>
                                    <div className={cn.slider__slide_text}>
                                        <div itemProp="text">{item.subtitle}</div>
                                        <p itemProp="text">{item.description}</p>
                                    </div>
                                </SplideSlide>
                            );
                        })}
                    </Splide>
                    <div className={cn.content__button}>
                        <button onClick={() => setQuestionForm(true)} suppressHydrationWarning>
                            {lang === "ENG" ? "Send a request" : "Отправить заявку"}
                        </button>
                    </div>
                </div>
            </div>
            {
                questionForm && <QuestionForm modal={modalQuestion} setQuestionForm={setQuestionForm} />
            }
            {
                modalActive &&
                <SubmitModal
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    modal={modalContact}
                />
            }
        </div>
    );
}

export default CatalogModal;