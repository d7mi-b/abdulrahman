import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/about.module.css';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <article className={`page center ${style.about}`}>
            <header className={style.header}>
                <h1>{ t("who am i") }</h1>
            </header>
            <section className={style.content}>
                <p> 
                    <span>{ t('hi') } { t('I') } { t('Abdulrahman Bahyan') } </span>
                    { t('about') }
                </p>
            </section>
            <section className={`btn-container`}>
                <a 
                    className='btn' 
                    href='Abdulrahman Bahyan.pdf'
                    download
                >
                    { t('download') } { t('cv') }
                    <FontAwesomeIcon icon={faFileDownload} />
                </a>
            </section>
        </article>
    )
}

export default About;