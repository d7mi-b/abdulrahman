import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/footer.module.css';
import { faCodepen, faGithubSquare, faLinkedin, faSquareXTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSms } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className={style.footer}>
            <section className={style.logo}>
                <p>&lt;/&gt;</p>
            </section>
            <section className={style.icons}>
                <a href='https://wa.me/+967738642955' target='_blank'><FontAwesomeIcon icon={faWhatsappSquare} /></a>
                <a href='https://www.linkedin.com/in/abdulrahman-bahyan-3448431a6/' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://twitter.com/d7mii_b' target='_blank'><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                <a href='https://github.com/d7mi-b' target='_blank'><FontAwesomeIcon icon={faGithubSquare} /></a>
                <a href='mailto:d7mii.b@gmail.com' target='_blank'><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href='https://codepen.io/d7mii' target='_blank'><FontAwesomeIcon icon={faCodepen} /></a>
                <a href='sms:+967738642955' target='_blank'><FontAwesomeIcon icon={faSms} /></a>
            </section>
            <section className={style.copyright}>
                <p>{ t('Abdulrahman Bahyan') } &copy; { new Date().getFullYear() }</p>
            </section>
        </footer>
    );
}

export default Footer;