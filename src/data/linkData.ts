interface LinkItem {
    name: string;
    link?: string;
    username?: string;
}

const links: LinkItem[] = [
    {
        name: 'Discord',
        username: '@meowcelinee.',
    },
    {
        name: 'git.gay',
        link: 'https://git.gay/meowcelinee',
        username: 'meowcelinee',
    },
    {
        name: 'GitHub',
        link: 'https://github.com/Meowcelinee',
        username: 'Meowcelinee',
    },
    {
        name: 'Mastodon',
        link: 'https://tech.lgbt/@ideltic',
        username: 'tech.lgbt/@ideltic',
    },
    {
        name: 'Threads',
        link: 'https://www.threads.net/@meowcelineeee',
        username: '@Meowcelineeee',
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/meowcelineeee/',
        username: '@meowcelineeee',
    },
    {
        name: 'Pronouns.page',
        link: 'https://en.pronouns.page/@Nyatalieeee',
        username: '@Nyatalieeee (for now :p)',
    },
    {
        name: '<3',
        link: 'https://github.com/Nyameliaaaa',
        username: 'Nyameliaaaa',
    },
    {
        name: 'Cool people',
        link: 'https://queercraft.net',
    },
];

export default links;
export type { LinkItem };
