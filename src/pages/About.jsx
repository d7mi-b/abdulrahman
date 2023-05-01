import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/about.module.css';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <article className={style.about}>
            <header className={style.header}>
                <h1>من أنا؟</h1>
            </header>
            <section className={style.content}>
                <p> 
                    <span>أهلًا أنا عبدالرحمن بهيان</span> طالب هندسة حاسوب في السنة الأخيرة ومطور مواقع شغوف,
                    أتمتع بالخبرة في تطوير الواجهات الأمامية والخلفية للمواقع وأحرص على تنفيذها باحترافية عالية.
                </p>
            </section>
            <section className={`btn-container`}>
                <a 
                    className='btn' 
                    href='Abdulrahman Bahyan.pdf'
                    download
                >
                    تحميل السيرة الذاتية <FontAwesomeIcon icon={faFileDownload} />
                </a>
            </section>
        </article>
    )
}

export default About;