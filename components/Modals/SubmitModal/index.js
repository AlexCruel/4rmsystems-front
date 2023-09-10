import cn from "./styles.module.scss";

const SubmitModal = ({ modalActive, setModalActive, modal }) => {
    return (
        <div className={modalActive ? cn.modal + ' ' + cn.active : cn.modal} onClick={() => setModalActive(false)}>
            <div className={modalActive ? cn.modal__content + ' ' + cn.active : cn.modal__content}>
                <h1>{modal.title}</h1>
                <p>{modal.text}</p>
            </div>
        </div>
    );
}

export default SubmitModal;