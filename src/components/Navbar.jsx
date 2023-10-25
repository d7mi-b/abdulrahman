import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/navbar.module.css';
import { faBars, faLanguage, faSun } from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';
import { useLanguageContext } from '../hooks/useLanguageContext';

const ScrollLink = Scroll.Link;

const Navbar = () => {
    const { dispatch } = useLanguageContext();

    const handelTheme = (e) => {
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme)
            document.documentElement.setAttribute('data-theme', storedTheme)
    
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
    
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
    
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
    }

    const handelLang = (e) => {
        let storedLang = localStorage.getItem('lang');
        if (storedLang) {
            document.documentElement.setAttribute('lang', storedLang)
            storedLang === 'AR' ? document.documentElement.dir = 'rtl' : document.documentElement.dir = 'ltr'
        }

        let currentLang = document.documentElement.getAttribute("lang");
        let targetLang = "EN";

        if (currentLang === "EN") {
            targetLang = "AR";
        }

        targetLang === 'AR' ? document.documentElement.dir = 'rtl' : document.documentElement.dir = 'ltr'
        document.documentElement.setAttribute('lang', targetLang)
        localStorage.setItem('lang', targetLang);
        dispatch({ type: targetLang })
    }

    return (
        <nav className={style.navbar}>
            <section className={style.logo}>
                <p>&lt;/&gt; عبدالرحمن</p>
            </section>

            <section className={style.navbarList}>
                <section className={style.listBar}>
                    <FontAwesomeIcon icon={faBars} />
                </section>
                <ul className={style.list}>
                    <li className={style.logo}>
                        <p>&lt;/&gt; عبدالرحمن</p>
                    </li>
                    <li>
                        <ScrollLink 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   الرئيسية
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   من أنا؟
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   مهاراتي
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   أعمالي
                        </ScrollLink>
                    </li>
                    <li>   
                        <ScrollLink 
                            to="contactMe" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   تواصل معي
                        </ScrollLink>
                    </li>
                    <li>
                        <section className={style.icons}>
                            <FontAwesomeIcon icon={faSun} id="theme-toggle" onClick={handelTheme} />
                            <FontAwesomeIcon icon={faLanguage} id='lang-toggle' onClick={handelLang}/>
                        </section>
                    </li>
                </ul>
            </section>

            <section className={style.icons}>
                <FontAwesomeIcon icon={faSun} id="theme-toggle" onClick={handelTheme} />
                <FontAwesomeIcon icon={faLanguage} id='lang-toggle' onClick={handelLang} />
            </section>
        </nav>
    )
}

export default Navbar;