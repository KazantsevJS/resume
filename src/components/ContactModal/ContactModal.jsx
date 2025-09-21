import styles from './ContactModal.module.css'

const ContactModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className={styles.modal} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<button className={styles.closeModal} onClick={onClose}>
					&times;
				</button>
				<a href='https://t.me/KazantsevJS' className={styles.modalContactItem}>
					<span className={styles.itemTitle}>Telegram</span>
				</a>
				<a href='https://wa.me/79960302435' className={styles.modalContactItem}>
					<span className={styles.itemTitle}>WhatsApp</span>
				</a>
				<a
					href='mailto:ale.kazantsev@mail.astondevs.ru'
					className={styles.modalContactItem}
				>
					<span className={styles.itemTitle}>Email</span>
				</a>
			</div>
		</div>
	)
}

export default ContactModal
