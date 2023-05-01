import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/contactUs.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactUsEN = () => {
    return (
        <article className={style.contactUs}>
            <header>
                <h1>Contact me and get what suits your need</h1>
            </header>
            <section className={style.contactForm}>
                <form>
                    <input type='text' name='name' required placeholder='Name' />
                    <input type='email' name='email' required placeholder='Email' />
                    <textarea type='text' name='message' required placeholder='Message' />
                    <section className='btn-container'>
                        <button className='btn'>Send <FontAwesomeIcon icon={faPaperPlane} /></button>
                    </section>
                </form>
            </section>
        </article>
    )
}

export default ContactUsEN;