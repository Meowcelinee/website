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
            start: '3/13/2024',
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
            start: '4/17/2024',
            complete: '8/1/2024',
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
            start: '8/4/2024',
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
            start: '8/1/2024',
        },
        wip: true,
    },
    {
        name: 'mystery project :)',
        language: {
            lang: Lang.TSX,
            img: '/images/lang/react.png',
        },
        date: {
            start: '11/28/2024',
            complete: '2/22/2025',
        },
        wip: true,
    },
    {
        name: 'Pylist',
        language: {
            lang: Lang.PYTHON,
            img: '/images/lang/python.png',
        },
        date: {
            start: '12/3/2024',
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
            start: '6/6/2024',
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
            start: '2/25/2024',
            complete: '3/17/2024',
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
            start: '8/13/2024',
            complete: '9/7/2024',
        },
        wip: false,
    },
];

export default projects;
