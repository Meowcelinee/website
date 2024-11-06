interface Nav {
    title: string;
    link: string;
}

const navLinks: Nav[] = [
    {
        title: 'home',
        link: '/',
    },
    {
        title: 'about me',
        link: '/about',
    },
    {
        title: 'local projects',
        link: '/projects',
    }
]

export default navLinks;