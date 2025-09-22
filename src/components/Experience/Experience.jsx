import { translations } from '../../data/translations'
import styles from './Experience.module.css'

const Experience = ({ language }) => {
	const teamMembers =
		language === 'ru'
			? [
					'2 Frontend-разработчика',
					'1 UX/UI-дизайнер',
					'2 Backend-разработчика',
					'1 QA-инженер',
					'1 DevOps-инженер',
					'1 Project Manager',
			  ]
			: [
					'2 Frontend developers',
					'1 UX/UI designer',
					'2 Backend developers',
					'1 QA engineer',
					'1 DevOps engineer',
					'1 Project Manager',
			  ]

	return (
		<section id='experience' className={styles.section}>
			<h3 className={styles.section__title}>
				{translations[language].experience}
			</h3>
			<div className={styles.card}>
				<div className={styles.card__content}>
					<div className={styles.experience__item}>
						<div className={styles.company__row}>
							<h4 className={styles.company}>
								{translations[language].company}
							</h4>
							<span className={styles.period}>
								{translations[language].period}
							</span>
						</div>

						<div className={styles.description}>
							<p>{translations[language]['experience-description']}</p>

							<div className={styles.divider}></div>

							<p>
								<strong>{translations[language]['key-modules']}</strong>
							</p>
							<ul>
								<li>
									<strong>Radar</strong>
									<span> {translations[language]['radar-desc']}</span>
								</li>
								<li>
									<strong>Market</strong>
									<span> {translations[language]['market-desc']}</span>
								</li>
								<li>
									<strong>CLIK</strong>
									<span> {translations[language]['clik-desc']}</span>
								</li>
							</ul>

							<div className={styles.divider}></div>

							<p>
								<strong>{translations[language].achievements}</strong>
							</p>
							<ul>
								<li>{translations[language]['achievement-1']}</li>
								<li>{translations[language]['achievement-2']}</li>
								<li>{translations[language]['achievement-3']}</li>
								<li>{translations[language]['achievement-4']}</li>
							</ul>
						</div>

						<div className={styles.project__stack}>
							<strong>{translations[language].stack}: </strong>
							<div className={styles.stackItems}>
								<span className={styles.stackItem}>React 18</span>
								<span className={styles.stackItem}>TypeScript</span>
								<span className={styles.stackItem}>Redux Toolkit</span>
								<span className={styles.stackItem}>Axios</span>
								<span className={styles.stackItem}>Material UI</span>
								<span className={styles.stackItem}>Vite</span>
								<span className={styles.stackItem}>REST API</span>
							</div>
						</div>

						<div className={styles.team__section}>
							<strong>{translations[language].team}: </strong>
							<div className={styles.team__composition}>
								{teamMembers.map((member, index) => (
									<span key={index} className={styles.team__member}>
										{member}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Experience
