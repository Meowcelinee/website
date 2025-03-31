import { Project, Lang } from '@/src/types/ProjectTypes';

const projects: Project[] = [
    {
        name: 'My Original Site (pages.gay)',
        link: 'https://nyatalie.pages.gay',
        language: {
            lang: Lang.HTML,
            img: '/images/lang/html.png',
        },
        date: {
            start: '2024-03-13',
        },
        wip: false,
    },
    {
        name: 'Original Gae Enterprises Site',
        link: 'https://gae-ent.vercel.app/',
        language: {
            lang: Lang.HTML,
            img: '/images/lang/html.png',
        },
        date: {
            start: '2024-04-17',
            complete: '2024-08-01',
        },
        wip: false,
    },
    {
        name: 'This Site',
        link: '/',
        language: {
            lang: Lang.TSX,
            img: '/images/lang/react.png',
        },
        date: {
            start: '2024-08-04',
        },
        wip: true,
    },
    {
        name: 'New Gae Enterprises Site',
        link: 'https://gae-ent.pages.dev/',
        language: {
            lang: Lang.TSX,
            img: '/images/lang/react.png',
        },
        date: {
            start: '2024-08-01',
        },
        wip: true,
    },
    {
        name: 'OOCQC Site',
        link: 'https://oocqc.pages.dev/',
        language: {
            lang: Lang.TSX,
            img: '/images/lang/react.png',
        },
        date: {
            start: '2024-11-28',
            complete: '2025-02-22',
        },
        wip: false,
    },
    {
        name: 'Pylist',
        language: {
            lang: Lang.PYTHON,
            img: '/images/lang/python.png',
        },
        date: {
            start: '2024-12-03',
        },
        wip: true,
    },
    {
        name: 'Colon3 Bot',
        link: 'https://github.com/Nyatalieeee/colon3-bot',
        language: {
            lang: Lang.JS,
            img: '/images/lang/js.png',
        },
        date: {
            start: '2024-06-06',
        },
        wip: false,
    },
    {
        name: 'MFHS Clock',
        link: 'https://mfhsclock.pages.dev/',
        language: {
            lang: Lang.JS,
            img: '/images/lang/js.png',
        },
        date: {
            start: '2025-03-22',
            complete: '2025-03-30',
        },
        wip: false,
    },
    {
        name: 'Picrew Userstyle',
        link: 'https://github.com/catppuccin/userstyles/tree/main/styles/picrew',
        language: {
            lang: Lang.CSS,
            img: '/images/lang/css.png',
        },
        date: {
            start: '2024-02-25',
            complete: '2024-03-17',
        },
        wip: false,
    },
    {
        name: 'NameMC Userstyle',
        link: 'https://github.com/catppuccin/userstyles/tree/main/styles/namemc',
        language: {
            lang: Lang.CSS,
            img: '/images/lang/css.png',
        },
        date: {
            start: '2024-08-13',
            complete: '2024-09-07',
        },
        wip: false,
    },
];

export default projects;
