import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage, faSun, faBars } from '@fortawesome/free-solid-svg-icons';
import { useLanguageContext } from '../../hooks/useLanguageContext';
import Scroll from 'react-scroll';
import style from '../style/navbar.module.css';


const ScrollLink = Scroll.Link;

const NavbarEN = () => {
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
                <p>&lt;/&gt; Abdulrahman</p>
            </section>

            <section className={style.navbarList}>
                <section className={style.listBar}>
                    <FontAwesomeIcon icon={faBars} />
                </section>
                <ul className={style.list}>
                    <li className={style.logo}>
                        <p>&lt;/&gt; Abdulrahman</p>
                    </li>
                    <li>
                        <ScrollLink 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   Home
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   About
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   Skils
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   Projects
                        </ScrollLink>
                    </li>
                    <li>   
                        <ScrollLink 
                            to="contactMe" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   Contact me
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

export default NavbarEN;