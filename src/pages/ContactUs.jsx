import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/contactUs.module.css';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
    return (
        <article className={style.contactUs}>
            <header>
                <h1>تواصل معي وأحصل على ما يناسب إحتياجك</h1>
            </header>
            <section className={style.contactForm}>
                <form action="https://fabform.io/f/AJSY0ng" method="post">
                    <input type='text' name='name' required placeholder='الأسم' />
                    <input type='email' name='email' required placeholder='البريد الإلكتروني' />
                    <textarea type='text' name='message' required placeholder='الرسالة' />
                    <section className='btn-container'>
                        <button className='btn'>إرسال <FontAwesomeIcon icon={faPaperPlane} /></button>
                    </section>
                </form>
            </section>
        </article>
    )
}

export default ContactUs;