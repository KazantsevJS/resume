import { translations } from '../../data/translations'
import styles from './Hero.module.css'

const Hero = ({ language, openModal }) => {
	return (
		<div className={styles.content}>
			<h1 className={styles.name}>{translations[language].name}</h1>
			<h2 className={styles.title}>{translations[language].title}</h2>
			<div className={styles.buttonsWrapper}>
				<button
					className={`${styles.btn} ${styles.btnPrimary}`}
					onClick={openModal}
				>
					{translations[language].contact}
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
