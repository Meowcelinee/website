enum ProjectNames {
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

interface Project<ProjectNames, Languages, E> {
    name: ProjectNames;
    link?: string;
    language: Languages;
    date: string;
    other?: E;
}

const Projects: Project = {
    // fucking kill me
};

// const projects = [
//     {
//         name: 'Colon3 Bot',
//         link: 'https://github.com/Nyatalieeee/colon3-bot',
//         language: 'Javascript',
//         date: '06/06/2024',
//         id: 1,
//     },
//     {
//         name: 'Original Gae Enterprises Site',
//         link: 'https://gae-ent.vercel.app/',
//         language: 'HTML/CSS',
//         date: '04/17/2024',
//         id: 2,
//     },
//     {
//         name: 'My Site (pages.gay)',
//         link: 'https://nyatalie.pages.gay',
//         language: 'HTML/CSS',
//         date: '03/13/2024',
//         id: 3,
//     },
//     {
//         name: 'Picrew Userstyle',
//         link: 'https://github.com/catppuccin/userstyles/tree/main/styles/picrew',
//         language: 'CSS',
//         date: '02/25/2024',
//         organization: 'Catppuccin',
//         id: 4,
//     },
//     {
//         name: 'This Site',
//         link: '/',
//         language: 'Typescript/TSX',
//         date: '08/04/2024',
//         framework: 'React, Nextjs',
//         id: 5,
//     },
// ];

// export default projects;
