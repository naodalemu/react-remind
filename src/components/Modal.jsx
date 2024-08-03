import classes from "./Modal.module.css";

function Modal({ onClosingModal, children }) {
    return (
        <div>
            <div className={classes.formContainer} onClick={onClosingModal} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </div>
    )
}

export default Modal;