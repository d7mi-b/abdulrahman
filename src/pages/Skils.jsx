import style from './style/skils.module.css';

const skils = [
    {
        id: 1,
        name: 'HTML',
        skil: 'images/html.svg'
    },
    {
        id: 2,
        name: 'CSS',
        skil: 'images/css.svg'
    },
    {
        id: 3,
        name: 'Javascript',
        skil: 'images/js.svg'
    },
    {
        id: 4,
        name: 'React.JS',
        skil: 'images/react.svg'
    },
    {
        id: 5,
        name: 'Next.JS',
        skil: 'images/next.svg'
    },
    {
        id: 6,
        name: 'Bootstrap',
        skil: 'images/bootstrap.svg'
    },
    {
        id: 7,
        name: 'Node.JS',
        skil: 'images/node.svg'
    },
    {
        id: 8,
        name: 'Express',
        skil: 'images/ex.svg'
    },
    {
        id: 9,
        name: 'mySQL',
        skil: 'images/mysql.svg'
    },
    {
        id: 10,
        name: 'mongoDB',
        skil: 'images/mongodb.svg'
    },
    {
        id: 11,
        name: 'Adobe XD',
        skil: 'images/xd.svg'
    },
    {
        id: 12,
        name: 'Git',
        skil: 'images/git.svg'
    }
];

const Skils = () => {
    return (
        <article className={style.skils}>
            <header className={style.header}>
                <h1>مهاراتي</h1>
            </header>
            <section className={style.SkilsContainer}>
                {
                    skils.map(e => {
                        return(
                            <img src={e.skil} id={e.id} title={e.name} alt={e.name} key={e.id} />
                        )
                    })
                }
            </section>
        </article>
    );
}

export default Skils;