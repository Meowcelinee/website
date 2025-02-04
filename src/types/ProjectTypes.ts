enum Lang {
    CSS = 'CSS',
    HTML = 'HTML/CSS',
    JS = 'Javascript',
    PYTHON = 'Python',
    TSX = 'Typescript/TSX',
}

type Date = { start: string; complete?: string };

interface Language {
    lang: Lang;
    img: string;
}

interface Project {
    name: string;
    link?: string;
    language: Language;
    date: Date;
    wip: boolean;
}

export { Lang };
export type { Project, Language, Date };
