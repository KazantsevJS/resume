import { translations } from '../../data/translations'
import styles from './Experience.module.css'

const Experience = ({ language }) => {
  return (
    <section id='experience' className={styles.section}>
      <h3 className={styles.sectionTitle}>
        {translations[language].experience}
      </h3>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <div className={styles.experienceItem}>
            <div className={styles.companyRow}>
              <h4 className={styles.company}>{translations[language].company}</h4>
              <span className={styles.period}>Июнь 2024 – Сентябрь 2025</span>
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
            
            <div className={styles.projectStack}>
              <strong>{translations[language].stack}: </strong>
              <span className={styles.stackItem}>React 18</span>
              <span className={styles.stackItem}>TypeScript</span>
              <span className={styles.stackItem}>Redux Toolkit</span>
              <span className={styles.stackItem}>Axios</span>
              <span className={styles.stackItem}>Material UI</span>
              <span className={styles.stackItem}>Vite</span>
              <span className={styles.stackItem}>REST API</span>
            </div>
            
            <div className={styles.projectStack}>
              <strong>{translations[language].team}: </strong>
              <span>{translations[language]['team-composition']}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience