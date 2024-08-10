enum Names {
    COLON3 = 'Colon3 Bot',
    GAEENT = 'Original Gae Enterprises Site',
    PAGESGAY = 'My Site (pages.gay)',
    PICREW = 'Picrew Userstyle',
    THIS = 'This Site',
}

enum Languages {
    JS = 'Javascript',
    CSS = 'CSS',
    HTMLCSS = 'HTML/CSS',
    TSX = 'Typescript/TSX',
}

const projects = [
    {
        name: Names.COLON3,
        link: 'https://github.com/Nyatalieeee/colon3-bot',
        language: Languages.JS,
        date: '06/06/2024',
        id: 1,
    },
    {
        name: Names.GAEENT,
        link: 'https://gae-ent.vercel.app/',
        language: Languages.HTMLCSS,
        date: '04/17/2024',
        id: 2,
    },
    {
        name: Names.PAGESGAY,
        link: 'https://nyatalie.pages.gay',
        language: Languages.HTMLCSS,
        date: '03/13/2024',
        id: 3,
    },
    {
        name: Names.PICREW,
        link: 'https://github.com/catppuccin/userstyles/tree/main/styles/picrew',
        language: Languages.CSS,
        date: '02/25/2024',
        id: 4,
    },
    {
        name: Names.THIS,
        link: '/',
        language: Languages.TSX,
        date: '08/04/2024',
        id: 5,
    },
];

export default projects;
