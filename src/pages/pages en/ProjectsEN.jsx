import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/projects.module.css';
import { faArrowUpRightDots, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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

const projects = [
    {
        id: 1,
        title: 'Hadhramout Unversity Gate for Student Services',
        body: 'A digital platform that provides services to students in a digital way without the need to go to the university.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mongoDB'],
        link: '',
        github: 'https://github.com/d7mi-b/hadhramout-university-gate',
        image: 'images/HUG.png'
    },
    {
        id: 2,
        title: 'Academic Timetable',
        body: 'A digital platform that creates academic timetable with the best results.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mySQL'],
        link: '',
        github: 'https://github.com/d7mi-b/genertingTimeTable',
        image: 'images/timetable.png'
    },
    {
        id: 3,
        title: 'To Do List Application',
        body: 'An application that makes your daily to-do list and enables you to use the Eisenhower Matrix to classify your tasks.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mongoDB'],
        link: '',
        github: 'https://github.com/d7mi-b/hadhramout-university-gate',
        image: 'images/to do.png'
    },
    {
        id: 4,
        title: 'Prayer Times',
        body: "A web application that displays prayer times based on the user's coordinate location.",
        skils: ['HTML', 'CSS', 'React.JS'],
        link: 'https://d7mi-b.github.io/prayerTimes',
        github: 'https://github.com/d7mi-b/prayerTimes',
        image: 'images/prayer times.png'
    },
]

const ProjectsEN = () => {
    return (
        <article className={style.projects}>
            <header className={style.header}>
                <h1>My Projects</h1>
            </header>
            <section className={style.projectsContainer}>
                {
                    projects.map(e => {
                        return (
                            <article className={style.project} key={e.id}>
                                <section className={style.content}>
                                    <header>
                                        <h1>{e.title}</h1>
                                    </header>
                                    <p>{e.body}</p>
                                    <section className={style.skils}>
                                        {
                                            e.skils.map(skil => {
                                                return skils.filter(s => s.name === skil)
                                                    .map(ele => {
                                                        return (
                                                            <img 
                                                                className={style.skil} 
                                                                src={ele.skil} 
                                                                alt={ele.name} 
                                                                title={ele.name}
                                                                key={ele.id}
                                                            />
                                                        )
                                                    })
                                            })
                                        }
                                    </section>
                                    <section className={`btn-container ${style.btnContainer}`}>
                                        { 
                                            e.link && <a className={`btn`} href={e.link} target='_blank'>
                                                visit the website
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </a>
                                        }
                                        { 
                                            e.github && <a className={`btn ${style.btnGithub}`} href={e.github} target='_blank'>
                                                See the code
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        }
                                    </section>
                                </section>
                                <section className={style.img}>
                                    <img src={e.image} alt='project' />
                                </section>
                            </article>
                        )
                    })
                }
            </section>

            <section className='btn-container'>
                <a className='btn' href='https://github.com/d7mi-b' target='_blank'>
                See more projects <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </section>
        </article>
    );
}

export default ProjectsEN;