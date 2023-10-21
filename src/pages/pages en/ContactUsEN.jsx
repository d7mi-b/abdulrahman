import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import style from '../style/contactUs.module.css';

const ContactUsEN = () => {
    return (
        <article className={style.contactUs}>
            <header className='center'>
                <h1>Contact me and get what suits your need</h1>
            </header>
            <section className={`center ${style.contactForm}`}>
                <form action="https://fabform.io/f/AJSY0ng" method="post">
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