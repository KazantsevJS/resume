import { useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import ContactModal from './components/ContactModal/ContactModal'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import LeftColumn from './components/LeftColumn/LeftColumn'
import Nav from './components/Nav/Nav'
import { translations } from './data/translations'
import './index.css'

function App() {
	const [language, setLanguage] = useState('ru')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const printRef = useRef()

	const switchLanguage = (lang) => {
		setLanguage(lang)
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const handlePrint = useReactToPrint({
		contentRef: printRef,
		documentTitle: `${translations[language].name}_Resume`,
		onAfterPrint: () => console.log('PDF успешно сохранен!'),
		onPrintError: (error) => console.error('Ошибка печати:', error),
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
