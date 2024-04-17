import style from './style/hero.module.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <article className={`page ${style.hero}`}>
            <header className={`center ${style.header}`}>
                <h3>{ t("hi") } &#128075; { t("my_name") }</h3>
                <h1>{ t('Abdulrahman Bahyan') }</h1>
                <h2>{ t('dev') }</h2>
            </header>
            <section className={`center ${style.img}`}>
                <img src='images/Innovation-amico.svg' alt='hero' />
            </section>
        </article>
    )
}

export default Hero;