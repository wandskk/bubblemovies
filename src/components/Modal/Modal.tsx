import React from "react";
import styles from "../../styles/Modal/Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children, onClose }) => {
  return (
    <div
      className={`${styles.modal} ${isOpen ? styles["modal--open"] : ""}`}
      onClick={onClose}
    >
      <div className={styles.modal__content}>
        <button className={styles.modal__close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
