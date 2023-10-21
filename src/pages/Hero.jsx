import style from './style/hero.module.css';

const Hero = () => {
    return (
        <article className={`page ${style.hero}`}>
            <header className={`center ${style.header}`}>
                <h3>أهلًا &#128075; إسمي</h3>
                <h1>عبدالرحمن بهيان</h1>
                <h2>مصمم ومطور مواقع</h2>
            </header>
            <section className={`center ${style.img}`}>
                <img src='images/Innovation-amico.svg' alt='hero' />
            </section>
        </article>
    )
}

export default Hero;