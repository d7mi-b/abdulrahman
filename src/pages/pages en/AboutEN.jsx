import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/about.module.css';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const AboutEN = () => {
    return (
        <article className={style.about}>
            <header className={style.header}>
                <h1>Who am I?</h1>
            </header>
            <section className={style.content}>
                <p> 
                    <span>Hi I'm Abdulrahman Bahyan</span> computer engineering and web developer with a
                    knowledge in front-end, back-end and database, My objective is simply to be the best web developer that I can be and to contribute to the technology industry all that I know and can do. I am dedicated to perfecting my craft by learning from more
                    seasoned developers.
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