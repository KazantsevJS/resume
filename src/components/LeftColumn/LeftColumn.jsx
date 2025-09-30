import { translations } from '../../data/translations'
import styles from './LeftColumn.module.css'

const LeftColumn = ({ language }) => {
	return (
		<div className={styles.leftColumn}>
			<section id='about' className={styles.section}>
				<h3 className={styles.sectionTitle}>{translations[language].about}</h3>
				<div className={styles.card}>
					<div className={styles.cardContent}>
						<p>
							<strong>{translations[language]['specialization-strong']}</strong>
							{translations[language]['specialization-text']}
						</p>
					</div>
				</div>
			</section>

			<section id='skills' className={styles.section}>
				<h3 className={styles.sectionTitle}>{translations[language].skills}</h3>
				<div className={styles.card}>
					<div className={styles.cardContent}>
						<div className={styles.skills}>
							{/* Frontend Technologies */}
							<span className={styles.skill}>Next.js 15</span>
							<span className={styles.skill}>React</span>
							<span className={styles.skill}>TypeScript</span>
							<span className={styles.skill}>JavaScript (ES6+)</span>
							<span className={styles.skill}>Tailwind CSS</span>
							<span className={styles.skill}>Redux Toolkit</span>
							<span className={styles.skill}>React Hook Form</span>
							<span className={styles.skill}>Zod</span>
							<span className={styles.skill}>Axios</span>
							<span className={styles.skill}>Material UI</span>
							<span className={styles.skill}>Vite</span>

							{/* Backend Technologies */}
							<span className={styles.skill}>NestJS</span>
							<span className={styles.skill}>Node.js</span>
							<span className={styles.skill}>PostgreSQL</span>
							<span className={styles.skill}>Prisma</span>
							<span className={styles.skill}>JWT</span>
							<span className={styles.skill}>Docker</span>

							{/* General Technologies */}
							<span className={styles.skill}>REST API</span>
							<span className={styles.skill}>HTML5</span>
							<span className={styles.skill}>CSS3/SCSS</span>
							<span className={styles.skill}>Git</span>
							<span className={styles.skill}>Figma</span>
							<span className={styles.skill}>Agile/Scrum</span>
						</div>
					</div>
				</div>
			</section>

			<section id='education' className={styles.section}>
				<h3 className={styles.sectionTitle}>
					{translations[language].education}
				</h3>
				<div className={styles.card}>
					<div className={styles.cardContent}>
						<div className={styles.educationItem}>
							<div className={styles.university}>
								{translations[language]['education-place']}
							</div>
							{language === 'ru' ? (
								<div className={styles.specialty}>
									{translations[language]['education-specialty-ru']}
								</div>
							) : (
								<div className={styles.specialty}>
									{translations[language]['education-specialty-en']}
								</div>
							)}
						</div>
						<div className={styles.divider}></div>
						<div className={styles.languages}>
							<p>
								<strong>{translations[language].english}: </strong>
								<span>{translations[language]['english-level']}</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default LeftColumn
