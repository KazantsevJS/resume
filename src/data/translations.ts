// translations.ts
interface TranslationKeys {
	home: string
	about: string
	skills: string
	experience: string
	contact: string
	print: string
	'company-new': string
	'period-new': string
	'role-new': string
	'experience-description-new': string
	'stack-new': string
	'team-new': string
	company: string
	period: string
	role: string
	achievements: string
	stack: string
	team: string
	name: string
	title: string
	'specialization-strong': string
	'specialization-text': string
}

export const translations: Record<'ru' | 'en', TranslationKeys> = {
	ru: {
		home: 'Главная',
		about: 'Специализация',
		skills: 'Навыки',
		experience: 'Опыт',
		contact: 'Связаться',
		print: 'Скачать PDF',

		'company-new': 'Novatech',
		'period-new': '09.2024 – Настоящее время',
		'role-new': 'Fullstack Developer (Express + Vue3)',
		'experience-description-new':
			'Разработка платформы для онлайн-кредитования с независимыми брендами',
		'stack-new': 'Стек',
		'team-new': 'Команда',

		company: 'Astondevs',
		period: '06.2024 – 08.2024',
		role: 'Frontend Developer (React)',
		achievements: 'Достижения',
		stack: 'Стек',
		team: 'Команда',

		name: 'Александр Казанцев',
		title: 'Fullstack Developer',
		'specialization-strong': 'Fullstack-разработчик',
		'specialization-text':
			', специализируюсь на разработке веб-приложений с использованием Vue.js, Express и TypeScript. Имею опыт работы с React, Node.js и современными инструментами разработки. Сосредоточен на создании качественного кода, оптимизации производительности и решении сложных технических задач в команде.',
	},
	en: {
		home: 'Home',
		about: 'Specialization',
		skills: 'Skills',
		experience: 'Experience',
		contact: 'Contact me',
		print: 'Download PDF',

		'company-new': 'Novatech',
		'period-new': '09.2024 – Present',
		'role-new': 'Fullstack Developer (Express + Vue3)',
		'experience-description-new':
			'Development an online lending platform with independent brands',
		'stack-new': 'Stack',
		'team-new': 'Team',

		company: 'Astondevs',
		period: '06.2024 – 08.2024',
		role: 'Frontend Developer (React)',
		achievements: 'Achievements',
		stack: 'Stack',
		team: 'Team',

		name: 'Alexander Kazantsev',
		title: 'Fullstack Developer',
		'specialization-strong': 'Fullstack Developer',
		'specialization-text':
			', specializing in web application development using Vue.js, Express and TypeScript. Have experience with React, Node.js and modern development tools. Focused on writing quality code, optimizing performance and solving complex technical challenges in a team environment.',
	},
}
