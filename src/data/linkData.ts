interface LinkItem {
    name: string;
    link?: string;
    username?: string;
    id: number;
}

const links: LinkItem[] = [
    {
        name: 'Discord',
        username: '@nyatalieeee',
        id: 1,
    },
    {
        name: 'git.gay',
        link: 'https://git.gay/nyatalie',
        username: 'nyatalie',
        id: 2,
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Nyatalieeee',
        username: 'Nyatalieeee',
        id: 3,
    },
    {
        name: 'Mastodon (tech.lgbt)',
        link: 'https://tech.lgbt/@ideltic',
        username: '@ideltic (regrettably)',
        id: 4,
    },
    {
        name: 'Twitter (NOT x)',
        link: 'https://x.com/Nyatalieeeee',
        username: '@Nyatalieeeee',
        id: 5,
    },
    {
        name: 'Pronouns.page',
        link: 'https://en.pronouns.page/@Nyatalieeee',
        username: '@Nyatalieeee',
        id: 6,
    },
    {
        name: '<3',
        link: 'https://github.com/Nyameliaaaa',
        username: 'Nyameliaaaa',
        id: 7,
    },
    {
        name: 'Cool people',
        link: 'https://queercraft.net',
        id: 8,
    },
];

export default links;
