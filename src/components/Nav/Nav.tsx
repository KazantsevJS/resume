import React, { useEffect } from 'react'
import { translations } from '../../data/translations'
import styles from './Nav.module.css'

interface NavProps {
	language: 'ru' | 'en'
	switchLanguage: (lang: 'ru' | 'en') => void
}

const Nav: React.FC<NavProps> = ({ language, switchLanguage }) => {
	useEffect(() => {
		const handleClick = (e: MouseEvent): void => {
			const target = e.target as HTMLElement
			if (target.matches('a[href^="#"]')) {
				e.preventDefault()
				const targetId = target.getAttribute('href')

				if (targetId === '#') {
					window.scrollTo({ top: 0, behavior: 'smooth' })
					return
				}

				const targetElement = document.querySelector(targetId!) as HTMLElement
				if (targetElement) {
					const offsetTop = targetElement.offsetTop - 100
					window.scrollTo({ top: offsetTop, behavior: 'smooth' })
				}
			}
		}

		document.addEventListener('click', handleClick)
		return () => document.removeEventListener('click', handleClick)
	}, [])

	return (
		<nav className={styles.nav}>
			<div className={styles.navInner}>
				<div className={styles.navigation}>
					<a href='#' className={styles.navLink}>
						{translations[language].home}
					</a>
					<a href='#about' className={styles.navLink}>
						{translations[language].about}
					</a>
					<a href='#skills' className={styles.navLink}>
						{translations[language].skills}
					</a>
					<a href='#experience' className={styles.navLink}>
						{translations[language].experience}
					</a>
					<a href='#education' className={styles.navLink}>
						{translations[language].education}
					</a>
				</div>
				<div className={styles.langSwitcher}>
					<button
						className={`${styles.langBtn} ${
							language === 'ru' ? styles.active : ''
						}`}
						onClick={() => switchLanguage('ru')}
					>
						RU
					</button>
					<button
						className={`${styles.langBtn} ${
							language === 'en' ? styles.active : ''
						}`}
						onClick={() => switchLanguage('en')}
					>
						EN
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Nav
