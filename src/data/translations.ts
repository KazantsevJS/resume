interface TranslationKeys {
	home: string
	about: string
	skills: string
	experience: string
	education: string
	contact: string
	print: string
	english: string
	'english-level': string
	'company-new': string
	'period-new': string
	'role-new': string
	'experience-description-new': string
	'key-modules-new': string
	'module-1': string
	'module-2': string
	'module-3': string
	'stack-new': string
	'team-new': string
	company: string
	period: string
	role: string
	'experience-description': string
	'key-modules': string
	'radar-desc': string
	'market-desc': string
	'clik-desc': string
	achievements: string
	'achievement-1': string
	'achievement-2': string
	'achievement-3': string
	'achievement-4': string
	stack: string
	team: string
	'education-place': string
	'education-specialty-ru': string
	'education-specialty-en': string
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
		education: 'Образование',
		contact: 'Связаться',
		print: 'Скачать PDF',
		english: 'Английский',
		'english-level': 'B1+ (Intermediate)',

		// Новый опыт (стартап)
		'company-new': 'No-name',
		'period-new': '09.2025 – настоящее время',
		'role-new': 'Fullstack Developer (Next.js/Nest.js)',
		'experience-description-new':
			'Разработка полнофункциональной HR-системы для управления процессом найма с нуля в HR-tech стартапе.',
		'key-modules-new': 'Ключевые направления:',
		'module-1':
			'Candidate Management: система управления кандидатами с расширенной фильтрацией',
		'module-2':
			'Interview Scheduler: календарь собеседований с автоматическим назначением',
		'module-3':
			'Authentication System: JWT-аутентификация с ролевой моделью доступа',
		'stack-new': 'Стек',
		'team-new': 'Команда',

		// Старый опыт (Astondevs)
		company: 'Astondevs',
		period: '06.2024 – 09.2025',
		role: 'Frontend Developer (React)',
		'experience-description':
			'Работа на проекте стороннего заказчика - внутренней логистической системы для управления поставками товаров в офисы банка.',
		'key-modules': 'Ключевые модули и мой вклад:',
		'radar-desc':
			'(ядро логистики): разработка интерфейса карты грузов в реальном времени и статус-трекинга посылок',
		'market-desc':
			'(система управления каталогом): создание фильтров, поиска товаров и корзины B2C-продаж',
		'clik-desc':
			'(система заказов): разработка форм оформления заказов с интеграцией Avito',
		achievements: 'Достижения и задачи:',
		'achievement-1':
			'Модернизация интерфейсов: перевод 8+ страниц на TypeScript, замена 15+ устаревших компонентов',
		'achievement-2':
			'Оптимизация производительности: ускорение рендеринга на 35% через React.memo, сокращение времени загрузки на 40%',
		'achievement-3':
			'Интеграция с бэкендом: реализация универсального слоя для API-запросов, работа с 10+ REST API эндпоинтами',
		'achievement-4':
			'Разработка функционала: создание 12+ переиспользуемых компонентов, адаптация элементов Material UI',
		stack: 'Стек',
		team: 'Команда',

		'education-place': 'Академия гражданской защиты (бакалавр)',
		'education-specialty-ru': 'Информационные системы и технологии',
		'education-specialty-en': 'Bachelor of Science in Information Systems',
		name: 'Александр Казанцев',
		title: 'Fullstack Developer (Next.js/Nest.js)',
		'specialization-strong': 'Fullstack-разработчик',
		'specialization-text':
			', специализируюсь на фронтенд-разработке с использованием React и Next.js. Имею опыт бэкенд-разработки на Nest.js, что позволяет эффективно работать в fullstack-проектах. Нацелен на результат, пишу качественный код, эффективно работаю в команде.',
	},
	en: {
		home: 'Home',
		about: 'Specialization',
		skills: 'Skills',
		experience: 'Experience',
		education: 'Education',
		contact: 'Contact me',
		print: 'Download PDF',
		english: 'English',
		'english-level': 'B1+ (Intermediate)',

		// New experience (startup)
		'company-new': 'No-name',
		'period-new': '09.2025 – Present',
		'role-new': 'Fullstack Developer (Next.js/Nest.js)',
		'experience-description-new':
			'Development of a full-featured HR system for managing the hiring process from scratch in an HR-tech startup.',
		'key-modules-new': 'Key areas:',
		'module-1':
			'Candidate Management: candidate management system with advanced filtering',
		'module-2':
			'Interview Scheduler: interview calendar with automatic assignment',
		'module-3':
			'Authentication System: JWT authentication with role-based access control',
		'stack-new': 'Stack',
		'team-new': 'Team',

		// Old experience
		company: 'Astondevs',
		period: '06.2024 – 09.2025',
		role: 'Frontend Developer (React)',
		'experience-description':
			'Work on a third-party customer project - an internal logistics system for managing supplies of goods to bank offices.',
		'key-modules': 'Key modules and my contribution:',
		'radar-desc':
			'(logistics core): development of real-time cargo map interface and parcel status tracking',
		'market-desc':
			'(catalog management system): creation of filters, product search and B2C shopping cart',
		'clik-desc':
			'(order system): development of order forms with Avito integration',
		achievements: 'Achievements and tasks:',
		'achievement-1':
			'Interface modernization: converted 8+ pages to TypeScript, replaced 15+ outdated components',
		'achievement-2':
			'Performance optimization: increased rendering speed by 35% through React.memo, reduced loading time by 40%',
		'achievement-3':
			'Backend integration: implemented a universal layer for API requests, worked with 10+ REST API endpoints',
		'achievement-4':
			'Functionality development: created 12+ reusable components, adapted Material UI elements',
		stack: 'Stack',
		team: 'Team',

		'education-place': 'Civil Defence Academy',
		'education-specialty-ru': 'Bachelor of Science in Information Systems',
		'education-specialty-en': 'Bachelor of Science in Information Systems',
		name: 'Alexander Kazantsev',
		title: 'Fullstack Developer (Next.js/Nest.js)',
		'specialization-strong': 'Fullstack Developer',
		'specialization-text':
			', specializing in frontend development with React and Next.js. Have backend development experience with Nest.js, which allows me to work effectively on fullstack projects. Result-oriented, I write high-quality code and work effectively in a team.',
	},
}
