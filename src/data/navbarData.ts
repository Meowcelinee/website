interface Nav {
    title: string;
    link: string;
    id: number;
}

const navLinks: Nav[] = [
    {
        title: 'home',
        link: '/',
        id: 1,
    },
    {
        title: 'about me',
        link: '/about',
        id: 2,
    },
    {
        title: 'local projects',
        link: '/projects',
        id: 3,
    }
]

export default navLinks;