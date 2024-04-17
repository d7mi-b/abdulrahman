import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/contactUs.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const ContactUs = () => {
    const { t } = useTranslation();

    return (
        <article className={style.contactUs}>
            <header className='center'>
                <h1>{ t('contact body') }</h1>
            </header>
            <section className={`center ${style.contactForm}`}>
                <form action="https://fabform.io/f/AJSY0ng" method="post">
                    <input type='text' name='name' required placeholder={ t("name") } />
                    <input type='email' name='email' required placeholder={ t("email") } />
                    <textarea type='text' name='message' required placeholder={ t("message") } />
                    <section className='btn-container'>
                        <button className='btn'>
                            <FontAwesomeIcon icon={faPaperPlane} />
                            { t("send") }
                        </button>
                    </section>
                </form>
            </section>
        </article>
    )
}

export default ContactUs;