import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/navbar.module.css';
import { faBars, faLanguage, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Scroll from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const ScrollLink = Scroll.Link;

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [ theme, setTheme ] = useState('dark');

    const handelTheme = () => {    
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let targetTheme = "light";
    
        if (currentTheme === "light") {
            targetTheme = "dark";
        }
    
        document.documentElement.setAttribute('data-theme', targetTheme)
        localStorage.setItem('theme', targetTheme);
        setTheme(targetTheme);
    }

    const handelLang = () => {
        let lang = i18n.language;

        if (lang === 'ar') {
            i18n.changeLanguage('en');
            lang = "en";
        }
        else {
            i18n.changeLanguage("ar");
            lang = 'ar';
        }

        lang === 'ar' ? document.documentElement.dir = 'rtl' : document.documentElement.dir = 'ltr'
        document.documentElement.setAttribute('lang', lang);
    }

    useEffect(() => {
        let storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme)
            setTheme(storedTheme);
        }
    }, [])

    return (
        <nav className={style.navbar}>
            <section className={style.logo}>
                <p>&lt;/&gt; { t("Abdulrahman") }</p>
            </section>

            <section className={style.navbarList}>
                <section className={style.listBar}>
                    <FontAwesomeIcon icon={faBars} />
                </section>
                <ul className={style.list}>
                    <li className={style.logo}>
                        <p>&lt;/&gt; { t("Abdulrahman") }</p>
                    </li>
                    <li>
                        <ScrollLink 
                            to="home" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   { t("home") }
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="about" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   { t("who am i") }
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="skills" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   { t("my skills") }
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink 
                            to="projects" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   { t("my works") }
                        </ScrollLink>
                    </li>
                    <li>   
                        <ScrollLink 
                            to="contactMe" 
                            spy={true} 
                            smooth={true} 
                            duration={500} 
                        >   { t("contact") }
                        </ScrollLink>
                    </li>
                    <li>
                        <section className={style.icons}>
                            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} id="theme-toggle" onClick={handelTheme} />
                            <FontAwesomeIcon icon={faLanguage} id='lang-toggle' onClick={handelLang}/>
                        </section>
                    </li>
                </ul>
            </section>

            <section className={style.icons}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} id="theme-toggle" onClick={handelTheme} />
                <FontAwesomeIcon icon={faLanguage} id='lang-toggle' onClick={handelLang} />
            </section>
        </nav>
    )
}

export default Navbar;