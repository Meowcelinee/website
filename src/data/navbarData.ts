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
        title: 'picrews',
        link: '/picrews',
    },
    {
        title: 'projects',
        link: '/projects',
    },
    {
        title: 'wallpapers',
        link: '/wallpapers',
    },
];

export default navLinks;
export type { NavLink };
