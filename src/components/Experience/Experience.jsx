import { translations } from '../../data/translations'
import styles from './Experience.module.css'

const Experience = ({ language }) => {
	const t = translations[language]

	const teamMembersOld =
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

	const teamMembersNew =
		language === 'ru'
			? ['3 Fullstack-разработчика', '1 Project Lead', '1 HR-менеджер']
			: ['3 Fullstack developers', '1 Project Lead', '1 HR manager']

	const ExperienceCard = ({
		company,
		period,
		role,
		description,
		keyModules,
		modules,
		achievements,
		achievementItems,
		stack,
		stackItems,
		team,
		teamMembers,
		showAchievements = true,
	}) => (
		<div className={styles.card}>
			<div className={styles.card__content}>
				<div className={styles.experience__item}>
					<div className={styles.company__row}>
						<h4 className={styles.company}>{company}</h4>
						<span className={styles.period}>{period}</span>
					</div>

					<div className={styles.role}>{role}</div>

					<div className={styles.description}>
						<p>{description}</p>

						<div className={styles.divider}></div>

						<p>
							<strong>{keyModules}</strong>
						</p>
						<ul>
							{modules.map((module, index) => (
								<li key={index}>{module}</li>
							))}
						</ul>

						{showAchievements &&
							achievementItems &&
							achievementItems.length > 0 && (
								<>
									<div className={styles.divider}></div>
									<p>
										<strong>{achievements}</strong>
									</p>
									<ul>
										{achievementItems.map((achievement, index) => (
											<li key={index}>{achievement}</li>
										))}
									</ul>
								</>
							)}
					</div>

					<div className={styles.project__stack}>
						<strong>{stack}: </strong>
						<div className={styles.stackItems}>
							{stackItems.map((item, index) => (
								<span key={index} className={styles.stackItem}>
									{item}
								</span>
							))}
						</div>
					</div>

					<div className={styles.team__section}>
						<strong>{team}: </strong>
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
	)

	return (
		<section id='experience' className={styles.section}>
			<h3 className={styles.section__title}>{t.experience}</h3>

			{/* Новый опыт - No-name (стартап) */}
			<ExperienceCard
				company={t['company-new']}
				period={t['period-new']}
				role={t['role-new']}
				description={t['experience-description-new']}
				keyModules={t['key-modules-new']}
				modules={[t['module-1'], t['module-2'], t['module-3']]}
				achievements={t.achievements}
				achievementItems={[]}
				stack={t['stack-new']}
				stackItems={[
					'Next.js 15',
					'TypeScript',
					'NestJS',
					'PostgreSQL',
					'Prisma',
					'Docker',
				]}
				team={t['team-new']}
				teamMembers={teamMembersNew}
				showAchievements={false}
			/>

			{/* Старый опыт - Astondevs */}
			<ExperienceCard
				company={t.company}
				period={t.period}
				role={t.role}
				description={t['experience-description']}
				keyModules={t['key-modules']}
				modules={[
					<>
						<strong>Radar</strong>
						<span> {t['radar-desc']}</span>
					</>,
					<>
						<strong>Market</strong>
						<span> {t['market-desc']}</span>
					</>,
					<>
						<strong>CLIK</strong>
						<span> {t['clik-desc']}</span>
					</>,
				]}
				achievements={t.achievements}
				achievementItems={[
					t['achievement-1'],
					t['achievement-2'],
					t['achievement-3'],
					t['achievement-4'],
				]}
				stack={t.stack}
				stackItems={[
					'React 18',
					'TypeScript',
					'Redux Toolkit',
					'Axios',
					'Material UI',
					'Vite',
					'REST API',
				]}
				team={t.team}
				teamMembers={teamMembersOld}
				showAchievements={true}
			/>
		</section>
	)
}

export default Experience
