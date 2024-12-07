interface Project {
    name: string;
    link: string;
    language: string;
    date: string;
}

const projects: Project[] = [
    {
        name: 'My Original Site (pages.gay)',
        link: 'https://nyatalie.pages.gay',
        language: 'HTML/CSS',
        date: '03/13/2024',
    },
    {
        name: 'Original Gae Enterprises Site',
        link: 'https://gae-ent.vercel.app/',
        language: 'HTML/CSS',
        date: '04/17/2024',
    },
    {
        name: 'This Site (i love recursion)',
        link: '/',
        language: 'Typescript/TSX',
        date: '08/04/2024',
    },
    {
        name: 'New Gae Enterprises Site',
        link: 'https://gae-ent.pages.dev/',
        language: 'Typescript/TSX',
        date: '08/01/2024',
    },
    {
        name: 'Pylist',
        link: '/wip',
        language: 'Python',
        date: '12/03/2024',
    },
    {
        name: 'Colon3 Bot',
        link: 'https://github.com/Nyatalieeee/colon3-bot',
        language: 'Javascript',
        date: '06/06/2024',
    },
    {
        name: 'Picrew Userstyle',
        link: 'https://github.com/catppuccin/userstyles/tree/main/styles/picrew',
        language: 'CSS',
        date: '02/25/2024',
    },
    {
        name: 'NameMC Userstyle',
        link: 'https://github.com/catppuccin/userstyles/tree/main/styles/namemc',
        language: 'CSS',
        date: '08/13/2024',
    },
];

export default projects;
