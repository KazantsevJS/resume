import { useState } from 'react'
import ContactModal from './components/ContactModal/ContactModal'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import LeftColumn from './components/LeftColumn/LeftColumn'
import Nav from './components/Nav/Nav'
import './index.css'

function App() {
	const [language, setLanguage] = useState('ru')
	const [isModalOpen, setIsModalOpen] = useState(false)

	const switchLanguage = (lang) => {
		setLanguage(lang)
	}

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	return (
		<div className='container'>
			<div className='bg-grid'></div>
			<Nav language={language} switchLanguage={switchLanguage} />
			<div className='page'>
				<Hero language={language} openModal={openModal} />
				<div className='resume-grid'>
					<LeftColumn language={language} />
					<div className='right-column'>
						<Experience language={language} />
					</div>
				</div>
			</div>
			<ContactModal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	)
}

export default App
