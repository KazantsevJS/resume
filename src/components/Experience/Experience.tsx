// Experience.tsx
import React from 'react'
import { translations } from '../../data/translations'
import styles from './Experience.module.css'

interface ExperienceProps {
	language: 'ru' | 'en'
}

interface ExperienceCardProps {
	company: string
	period: string
	role: string
	description: string
	achievements: string
	achievementItems: string[]
	stack: string
	frontendStack: string[]
	backendStack: string[]
	team: string
	teamMembers: string[]
	showAchievements?: boolean
	showTeam?: boolean
}

const Experience: React.FC<ExperienceProps> = ({ language }) => {
	const t = translations[language]

	const teamMembersNovatech: string[] =
		language === 'ru'
			? [
					'5 Fullstack-разработчиков',
					'2 DevOps-инженера',
					'3 QA-инженера',
					'2 Business Analyst',
					'2 Project Manager',
					'1 UX/UI designer',
					'1 Product Owner',
			  ]
			: [
					'5 Fullstack developers',
					'2 DevOps engineers',
					'3 QA engineers',
					'2 Business Analysts',
					'2 Project Managers',
					'1 UX/UI designer',
					'1 Product Owner',
			  ]

	const ExperienceCard: React.FC<ExperienceCardProps> = ({
		company,
		period,
		role,
		description,
		achievements,
		achievementItems,
		stack,
		frontendStack,
		backendStack,
		team,
		teamMembers,
		showAchievements = true,
		showTeam = true,
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
						<div className={styles.stack__section}>
							<div className={styles.stack__items}>
								{frontendStack.map((item, index) => (
									<span key={index} className={styles.stack__item}>
										{item}
									</span>
								))}
							</div>
							{backendStack.length > 0 && (
								<div className={styles.stack__items}>
									{backendStack.map((item, index) => (
										<span key={index} className={styles.stack__item}>
											{item}
										</span>
									))}
								</div>
							)}
						</div>
					</div>

					{showTeam && teamMembers.length > 0 && (
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
					)}
				</div>
			</div>
		</div>
	)

	return (
		<section id='experience' className={styles.section}>
			<h3 className={styles.section__title}>{t.experience}</h3>

			{/* Novatech */}
			<ExperienceCard
				company={t['company-new']}
				period={t['period-new']}
				role={t['role-new']}
				description={t['experience-description-new']}
				achievements={t.achievements}
				achievementItems={[
					language === 'ru'
						? 'Участвовал в разработке системы фингерпринтинга, снизившей мошеннические заявки на 60% через анализ поведения пользователей и технических параметров'
						: 'Participated in developing fingerprinting system that reduced fraudulent applications by 60% through user behavior and technical parameter analysis',
					language === 'ru'
						? 'Участвовал в реализации A/B тестирования с увеличением конверсии на 18% через оптимизацию UX-воронки и интеграцию с сервисом телеметрии'
						: 'Participated in implementing A/B testing with 18% conversion increase through UX funnel optimization and telemetry service integration',
					language === 'ru'
						? 'Участвовал в оптимизации процессов обработки заявок, сократив время от подачи до одобрения на 45% через рефакторинг API и кэширование'
						: 'Participated in optimizing application processing, reducing time from submission to approval by 45% through API refactoring and caching',
					language === 'ru'
						? 'Участвовал в проектировании многобрендовой архитектуры с тремя независимыми системами, обеспечив изоляцию данных и гибкость развития каждого бренда'
						: 'Participated in designing multi-brand architecture with 3 independent systems, ensuring data isolation and development flexibility for each brand',
				]}
				stack={t['stack-new']}
				frontendStack={['Vue 3', 'TypeScript', 'Tailwind CSS', 'Pinia']}
				backendStack={[
					'Node.js',
					'Express',
					'TypeScript',
					'PostgreSQL',
					'MySQL',
					'MongoDB',
					'Sequelize',
					'JWT',
					'bcryptjs',
					'Multer',
					'Sharp',
					'Nodemailer',
					'Docker',
					'Docker Compose',
					'CI/CD',
					'Helmet',
					'CORS',
				]}
				team={t['team-new']}
				teamMembers={teamMembersNovatech}
				showAchievements={true}
				showTeam={true}
			/>

			{/* Astondevs */}
			<ExperienceCard
				company={t.company}
				period={t.period}
				role={t.role}
				description={
					language === 'ru'
						? 'Стажировка на внутренних проектах компании с фокусом на фронтенд-разработку. Работал над созданием и улучшением пользовательских интерфейсов, интеграцией с REST API, оптимизацией производительности компонентов. Участвовал в код-ревью, изучал лучшие практики React-разработки и принципы чистой архитектуры. Выполнял задачи по модернизации legacy-кода, рефакторингу компонентов и внедрению TypeScript.'
						: 'Internship on company internal projects with a focus on frontend development. Worked on creating and improving user interfaces, integrating with REST API, optimizing component performance. Participated in code reviews, studied React development best practices and clean architecture principles. Completed tasks on modernizing legacy code, refactoring components and implementing TypeScript.'
				}
				achievements={t.achievements}
				achievementItems={[]}
				stack={t.stack}
				frontendStack={[
					'React',
					'TypeScript',
					'Redux',
					'REST API',
					'Vite',
					'HTML5',
					'CSS3/SCSS',
					'Git',
				]}
				backendStack={[]}
				team={t.team}
				teamMembers={[]}
				showAchievements={false}
				showTeam={false}
			/>
		</section>
	)
}

export default Experience
