import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './style/projects.module.css';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

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
        name: 'TypeScript',
        skil: 'images/typescript.svg'
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
        name: 'PHP',
        skil: 'images/php.svg'
    },
    {
        id: 10,
        name: 'Laravel',
        skil: 'images/laravel.svg'
    },
    {
        id: 11,
        name: 'Prisma',
        skil: 'images/prisma.svg'
    },
    {
        id: 12,
        name: 'tRPC',
        skil: 'images/tRPC.svg'
    },
    {
        id: 13,
        name: 'Tailwindcss',
        skil: 'images/tailwindcss.svg'
    },
    // {
    //     id: 14,
    //     name: 'Bootstrap',
    //     skil: 'images/bootstrap.svg'
    // },
    
    {
        id: 15,
        name: 'mySQL',
        skil: 'images/mysql.svg'
    },
    {
        id: 16,
        name: 'PostgreSQL',
        skil: 'images/postgresql.svg'
    },
    {
        id: 17,
        name: 'mongoDB',
        skil: 'images/mongodb.svg'
    },
    {
        id: 18,
        name: 'Supabase',
        skil: 'images/supabase.svg'
    },
    {
        id: 19,
        name: 'Adobe XD',
        skil: 'images/xd.svg'
    },
    {
        id: 20,
        name: 'Figma',
        skil: 'images/figma.svg'
    },
    {
        id: 21,
        name: 'Git',
        skil: 'images/git.svg'
    }
];

const projects = [
    {
        id: 9,
        title: 'موقع شركة عرب فوم',
        title_en: 'Arab Foam',
        body: 'تصميم وتطوير موقع شركة عرب فوم للعوازل.',
        body_en: 'Design and development of the website of Arab Foam Insulation Company.',
        skils: ['HTML', 'CSS', 'Laravel', 'mySQL'],
        link: 'https://arab-foam.com/',
        github: '',
        image: 'images/Arab-Foam.png'
    },
    {
        id: 8,
        title: 'منصة عمّد',
        title_en: 'Ammed',
        body: 'منصة تعمل كوسيط رقمي بين طالب الخدمة ومقدم الخدمة في قطاع المقاولات، نعمل على تسهيل عمليات الطلب والعرض لمختلف الخدمات في مكان واحد, عملت بها في التطوير البيئة الخلفية للمنصة.',
        body_en: 'A platform that works as a digital intermediary between the service requester and the service provider in the contracting sector. We work to facilitate the request and offer processes for various services in one place. I worked on developing the platform’s back-end.',
        skils: ['Laravel', 'PostgreSQL'],
        link: 'https://www.ammed.sa/',
        github: '',
        image: 'images/Ammed.png'
    },
    {
        id: 7,
        title: 'عرب وير دوز',
        title_en: 'Arab Ware Dos',
        body: 'تصميم وتطوير موقع شركة عرب وير دوز للحلول التقنية',
        body_en: "Design and development of the website of Arab Ware Dos company for technical solutions",
        skils: ['HTML', 'CSS', 'Laravel', 'mySQL'],
        link: 'https://www.arabwdos.com/',
        github: '',
        image: 'images/Arab-Ware-Dos.png'
    },
    {
        id: 6,
        title: 'منصة دواء',
        title_en: 'Dawa',
        body: 'منصة تهدف الى تسهيل الوصول الى المرضى المحتاجون الذين يعانون من صعوبةٍ في توفير احتياجاتهم الصحية اللازمة, تقوم المنصة بربطهم مع متبرعين قادرين على مساعدتهم والتبرع لهم بالأدوية اللازمة لهم .',
        body_en: 'A platform that aims to facilitate access to needy patients who have difficulty providing their necessary health needs. The platform connects them with donors who are able to help them and donate the necessary medicines for them.',
        skils: ['HTML', 'Tailwindcss', 'Next.JS', 'Typescript', 'Prisma', 'tRPC', 'Supabase'],
        link: 'https://www.dawa.fyi/',
        github: 'https://github.com/d7mi-b/Dawa',
        image: 'images/Dawa.png'
    },
    {
        id: 5,
        title: 'جداول المحاضرات الجامعية',
        title_en: 'Academic Timetable',
        body: 'منصة رقمية تقوم بعملية إنشاء جداول المحاضرات الجامعية بأفضل النتائج.',
        body_en: 'A digital platform that creates academic timetable with the best results.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mySQL'],
        link: '',
        github: 'https://github.com/d7mi-b/genertingTimeTable',
        image: 'images/timetable.png'
    },
    {
        id: 4,
        title: ' نسخ موقع Quislet',
        title_en: 'Quislet Clone',
        body: 'نسخ فكرة موقع Quizlet بشكل مبسط, فكرة الموقع هيا إنشاء مجموعات دراسية يمكن لأي شخص ان يدرس فيها وعمل تحديات بسيطة لما تتم دراسته.',
        body_en: 'Quizlet clone in a simple way, the idea of the web application is to create study sets in which anyone can study and make simple challenges for what is being studied.',
        skils: ['HTML', 'Tailwindcss', 'Next.JS', 'Typescript', 'Prisma', 'tRPC', 'Supabase'],
        link: 'https://quizlet-clone-h8l3cixis-d7mi-b.vercel.app/',
        github: 'https://github.com/d7mi-b/quizlet-clone',
        image: 'images/Quizlet-Clone.png'
    },
    {
        id: 3,
        title: 'تطبيق قائمة المهام',
        title_en: 'To Do List Application',
        body: 'تطبيق قوم بعمل قائمة مهامك اليومية ويمكنك من استخدام مصفوفة إيزنهاور لتصنيف مهامك.',
        body_en: 'An application that makes your daily to-do list and enables you to use the Eisenhower Matrix to classify your tasks.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mongoDB'],
        link: '',
        github: 'https://github.com/d7mi-b/hadhramout-university-gate',
        image: 'images/to do.png'
    },
    {
        id: 2,
        title: 'بوابة جامعة حضرموت لخدمات الطالب',
        title_en: 'Hadhramout Unversity Gate for Student Services',
        body: 'منصة رقمية تقدم الخدمات للطلاب بطريقة رقمية دون الحاجة للذهاب الى الجامعة مثل إستخراج بيان درجات أو تجديد القيد.',
        body_en: 'A digital platform that provides services to students in a digital way without the need to go to the university.',
        skils: ['HTML', 'CSS', 'React.JS', 'Node.JS', 'mongoDB'],
        link: '',
        github: 'https://github.com/d7mi-b/hadhramout-university-gate',
        image: 'images/HUG.png'
    },
    {
        id: 1,
        title: 'مواقيت الصلاة',
        title_en: "Prayer Times",
        body: 'تطبيق ويب يقوم بعرض مواقيت الصلاة بناءً على الموقع الإحداثي للمستخدم.',
        body_en: "A web application that displays prayer times based on the user's coordinate location.",
        skils: ['HTML', 'CSS', 'React.JS'],
        link: 'https://d7mi-b.github.io/prayerTimes',
        github: 'https://github.com/d7mi-b/prayerTimes',
        image: 'images/prayer times.png'
    },
]

const Projects = () => {
    const { t, i18n } = useTranslation();

    return (
        <article className={`page ${style.projects}`}>
            <header className={style.header}>
                <h1>{ t('my works') }</h1>
            </header>
            <section className={style.projectsContainer}>
                {
                    projects.map(e => {
                        return (
                            <article className={style.project} key={e.id}>
                                <section className={`center ${style.content}`}>
                                    <header>
                                        <h1>{ i18n.language === 'ar' ? e.title : e.title_en}</h1>
                                    </header>
                                    <p>{ i18n.language === 'ar' ? e.body : e.body_en }</p>
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
                                                { t('visit') }
                                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                            </a>
                                        }
                                        { 
                                            e.github && <a className={`btn ${style.btnGithub}`} href={e.github} target='_blank'>
                                                { t('see code') }
                                                <FontAwesomeIcon icon={faGithub} />
                                            </a>
                                        }
                                    </section>
                                </section>
                                <section className={style.img}>
                                    <img src={e.image} alt={ i18n.language === 'ar' ? e.title : e.title_en} />
                                </section>
                            </article>
                        )
                    })
                }
            </section>

            <section className='btn-container'>
                <a className='btn' href='https://github.com/d7mi-b' target='_blank'>
                    { t('more') } <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </section>
        </article>
    );
}

export default Projects;