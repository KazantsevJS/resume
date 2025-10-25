// LeftColumn.tsx
import React from 'react'
import { translations } from '../../data/translations'
import styles from './LeftColumn.module.css'

interface LeftColumnProps {
	language: 'ru' | 'en'
}

const LeftColumn: React.FC<LeftColumnProps> = ({ language }) => {
	return (
		<div className={styles.leftColumn}>
			<section id='about' className={styles.section}>
				<h3 className={styles.section__title}>
					{translations[language].about}
				</h3>
				<div className={styles.card}>
					<div className={styles.card__content}>
						<p>
							<strong>{translations[language]['specialization-strong']}</strong>
							{translations[language]['specialization-text']}
						</p>
					</div>
				</div>
			</section>

			<section id='skills' className={styles.section}>
				<h3 className={styles.section__title}>
					{translations[language].skills}
				</h3>
				<div className={styles.card}>
					<div className={styles.card__content}>
						<div className={styles.skills}>
							{/* Frontend Technologies */}
							<span className={styles.skill}>Vue 3</span>
							<span className={styles.skill}>Pinia</span>
							<span className={styles.skill}>React</span>
							<span className={styles.skill}>Redux</span>
							<span className={styles.skill}>Axios</span>
							<span className={styles.skill}>HTML5</span>
							<span className={styles.skill}>CSS</span>
							<span className={styles.skill}>JavaScript</span>
							<span className={styles.skill}>Tailwind CSS</span>
							<span className={styles.skill}>TypeScript</span>
							<span className={styles.skill}>Vite</span>

							{/* Backend Technologies */}
							<span className={styles.skill}>Node.js</span>
							<span className={styles.skill}>Express</span>
							<span className={styles.skill}>PostgreSQL</span>
							<span className={styles.skill}>MongoDB</span>
							<span className={styles.skill}>MySQL</span>
							<span className={styles.skill}>JWT</span>
							<span className={styles.skill}>Sequelize</span>
							<span className={styles.skill}>bcryptjs</span>
							<span className={styles.skill}>Multer</span>
							<span className={styles.skill}>Sharp</span>
							<span className={styles.skill}>Nodemailer</span>

							{/* Infrastructure & Tools */}
							<span className={styles.skill}>Docker</span>
							<span className={styles.skill}>CI/CD</span>
							<span className={styles.skill}>Helmet</span>
							<span className={styles.skill}>CORS</span>
							<span className={styles.skill}>REST API</span>
							<span className={styles.skill}>Git</span>
							<span className={styles.skill}>Figma</span>
							<span className={styles.skill}>English B1+</span>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LeftColumn
