type three = 3; // this is totally necessary

interface Orientation {
    romantic: string;
    sexual: string;
}

interface Nerd {
    firstName: string;
    middleName: string;
    lastName: string;
    birthday: string;
    orientation: Orientation;
    pronouns: string[];
    interests?: string[];
    colon?: three;
}

export const natalie: Nerd = {
    firstName: 'Natalie',
    middleName: 'Ashley',
    lastName: 'Raine',
    birthday: '2006-01-13',
    orientation: {
        romantic: 'Lesbian',
        sexual: 'Demisexual',
    },
    pronouns: ['she/her'],
    interests: ['Music', 'Programming', 'Destiny 2', 'Minecraft', 'Amelia'],
    colon: 3,
};

const date = new Date();

export function isBirthday(): boolean {
    const birthday = '1/13';
    const currentDate = date.toLocaleDateString().split('/');
    const today = `${currentDate[0]}/${currentDate[1]}`;
    return today === birthday ? true : false;
}
