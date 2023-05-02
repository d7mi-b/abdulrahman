import style from './style/hero.module.css';

const Hero = () => {
    return (
        <article className={style.hero}>
            <header className={style.header}>
                <h3>أهلًا &#128075; إسمي</h3>
                <h1>عبدالرحمن بهيان</h1>
                <h2>مصمم ومطور مواقع</h2>
            </header>
            <section className={style.img}>
                <img src='images/Innovation-amico.svg' alt='hero' />
            </section>
        </article>
    )
}

export default Hero;