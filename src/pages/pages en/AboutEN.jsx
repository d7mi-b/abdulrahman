import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import style from '../style/about.module.css';

const AboutEN = () => {
    return (
        <article className={`page center ${style.about}`}>
            <header className={style.header}>
                <h1>Who am I?</h1>
            </header>
            <section className={style.content}>
                <p> 
                    <span>Hi I'm Abdulrahman Bahyan</span> a computer engineer and passionate website developer, 
                    I have experience in developing the front-end, back-end, and dealing with databases, 
                    I always strive to develop myself and learn new in my field and I make sure to carry out my work with professional way.
                </p>
            </section>
            <section className={`btn-container`}>
                <a 
                    className='btn' 
                    href='Abdulrahman Bahyan.pdf'
                    download
                >
                    Download CV <FontAwesomeIcon icon={faFileDownload} />
                </a>
            </section>
        </article>
    )
}

export default AboutEN;