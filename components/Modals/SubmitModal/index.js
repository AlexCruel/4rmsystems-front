import cn from "./styles.module.scss";

const SubmitModal = ({ modalActive, setModalActive, modal }) => {
    return (
        <div className={modalActive ? cn.modal + ' ' + cn.active : cn.modal} onClick={() => setModalActive(false)}>
            <div className={modalActive ? cn.modal__content + ' ' + cn.active : cn.modal__content}>
                <h2>{modal.title}</h2>
                <p>{modal.text}</p>
                <div onClick={() => setModalActive(false)} className={cn.modal__content_close}>X</div>
            </div>
        </div>
    );
}

export default SubmitModal;