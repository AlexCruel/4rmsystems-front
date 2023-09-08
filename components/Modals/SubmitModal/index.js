import cn from "./styles.module.scss";

const SubmitModal = ({ modalActive, setModalActive }) => {
    return (
        <div className={modalActive ? cn.modal + ' ' + cn.active : cn.modal} onClick={() => setModalActive(false)}>
            <div className={modalActive ? cn.modal__content + ' ' + cn.active : cn.modal__content}>
                <h1>Благодарим за обращение!</h1>
                <p>В ближайшее время сотрудник 4 RM свяжется с вами</p>
            </div>
        </div>
    );
}

export default SubmitModal;