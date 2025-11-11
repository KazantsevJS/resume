import React from "react";
import styles from "./ContactModal.module.css";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} no-print`} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeModal} onClick={onClose}>
          &times;
        </button>
        <a href="https://t.me/alex_pauzhetsky" className={styles.modalContactItem}>
          <span className={styles.itemTitle}>Telegram</span>
        </a>
        <a href="https://wa.me/79960302435" className={styles.modalContactItem}>
          <span className={styles.itemTitle}>WhatsApp</span>
        </a>
        <a
          href="mailto:kazancev.alex2020@gmail.com"
          className={styles.modalContactItem}
        >
          <span className={styles.itemTitle}>Email</span>
        </a>
      </div>
    </div>
  );
};

export default ContactModal;
