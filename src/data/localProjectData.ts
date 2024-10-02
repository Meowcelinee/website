interface LocalProject {
    date: string;
    description: string;
    id: number;
    image: string;
    link: string;
    title: string;
}

const localProjects: LocalProject[] = [
    {
        title: 'Calculator',
        description: 'A basic calculator that performs basic math functions. Basically.',
        date: 'Still a WIP',
        image: '/images/missing-texture.png',
        link: '/projects/calculator',
        id: 1,
    }
];

export default localProjects;