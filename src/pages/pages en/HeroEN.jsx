import style from '../style/hero.module.css';

const HeroEN = () => {
    return (
        <article className={`page ${style.hero}`}>
            <header className={`center ${style.header}`}>
                <h3>Hi &#128075; my name is</h3>
                <h1>Abdulrahman Bahyan</h1>
                <h2>Web developer</h2>
            </header>
            <section className={`center ${style.img}`}>
                <img src='images/Innovation-amico.svg' alt='hero' />
            </section>
        </article>
    )
}

export default HeroEN;