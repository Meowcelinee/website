interface NavLink {
    title: string;
    link: string;
}

const navLinks: NavLink[] = [
    {
        title: 'about',
        link: '/about',
    },
    {
        title: 'projects',
        link: '/projects',
    },
    {
        title: 'picrews',
        link: '/picrews',
    },
    {
        title: 'wallpapers',
        link: '/wallpapers',
    },
];

export default navLinks;
export type { NavLink };
