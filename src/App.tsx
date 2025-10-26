import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import ContactModal from './components/ContactModal/ContactModal'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import LeftColumn from './components/LeftColumn/LeftColumn'
import Nav from './components/Nav/Nav'
import { translations } from './data/translations'
import './index.css'

type Language = 'ru' | 'en'

const App: React.FC = () => {
	const [language, setLanguage] = useState<Language>('ru')
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const printRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const logVisit = async () => {
			try {
				const response = await fetch('/api/log-visit')
				const data = await response.json()
				console.log('Visit logged successfully:', data)
			} catch (error) {
				console.error('Failed to log visit:', error)
			}
		}

		logVisit()
	}, [])

	const switchLanguage = (lang: Language): void => {
		setLanguage(lang)
	}

	const openModal = (): void => {
		setIsModalOpen(true)
	}

	const closeModal = (): void => {
		setIsModalOpen(false)
	}

	const handlePrint = useReactToPrint({
		contentRef: printRef,
		documentTitle: `${translations[language].name}_Resume`,
		onAfterPrint: (): void => console.log('PDF успешно сохранен!'),
		onPrintError: (
			_errorLocation: 'onBeforePrint' | 'print',
			error: Error
		): void => console.error('Ошибка печати:', error),
	})

	return (
		<div className='container'>
			<div className='bg-grid'></div>

			<Nav language={language} switchLanguage={switchLanguage} />
			<Hero
				language={language}
				openModal={openModal}
				handlePrint={handlePrint}
			/>

			<div ref={printRef} className='resume-content'>
				<div className='page'>
					<div className='resume-grid'>
						<LeftColumn language={language} />
						<div className='right-column'>
							<Experience language={language} />
						</div>
					</div>
				</div>
			</div>

			<ContactModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default App
