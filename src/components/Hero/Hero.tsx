import React from 'react'
import { translations } from '../../data/translations'
import styles from './Hero.module.css'

interface HeroProps {
	language: 'ru' | 'en'
	openModal: () => void
	handlePrint?: () => void
}

const Hero: React.FC<HeroProps> = ({ language, openModal, handlePrint }) => {
	const handlePrintClick = (): void => {
		if (handlePrint) {
			handlePrint()
		} else {
			console.error('handlePrint function is not available')
		}
	}

	return (
		<div className={`${styles.content} no-print`}>
			<div className={styles.printHeader}>
				<h1 className={styles.name}>{translations[language].name}</h1>
				<h2 className={styles.title}>{translations[language].title}</h2>
			</div>

			<div className={styles.buttonsWrapper}>
				<button
					className={`${styles.btn} ${styles.btnPrimary}`}
					onClick={openModal}
				>
					{translations[language].contact}
				</button>
				<button
					className={`${styles.btn} ${styles.btnGhost}`}
					onClick={handlePrintClick}
				>
					{translations[language].print}
				</button>
				<a
					href='https://github.com/KazantsevJS'
					className={`${styles.btn} ${styles.btnGhost}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					GitHub
				</a>
				<a
					href='https://www.codewars.com/users/KazantsevJS'
					className={`${styles.btn} ${styles.btnGhost}`}
					target='_blank'
					rel='noopener noreferrer'
				>
					Codewars
				</a>
			</div>
		</div>
	)
}

export default Hero
