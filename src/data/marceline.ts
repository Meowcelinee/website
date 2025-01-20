type three = 3; // this is totally necessary

type OrientationType = { romantic: string; sexuality: string };

interface Nerd {
    firstName: string;
    middleName: string;
    lastName: string;
    birthday: string;
    orientation: OrientationType;
    pronouns: string[];
    interests?: string[];
    colon?: three;
}

export const marceline: Nerd = {
    firstName: 'Marceline',
    middleName: 'Ashley',
    lastName: 'Raine',
    birthday: '2006-01-13',
    orientation: {
        romantic: 'Lesbian',
        sexuality: 'Demisexual',
    },
    pronouns: ['she/her'],
    interests: ['Music', 'Programming', 'Destiny 2', 'Minecraft', 'Women'],
    colon: 3,
};

const date = new Date();

export function getAge(): number {
    const birthday = [1, 17, 2006];
    const currentDate = new Date().toLocaleDateString().split('/');
    const today = [
        Number(currentDate[0]),
        Number(currentDate[1]),
        Number(currentDate[2]),
    ];

    const monthAfterBirthday: boolean = today[0] >= birthday[0];
    const todayAfterBirthday: boolean = today[1] >= birthday[1];

    const postBirthdayAge: number = today[2] - birthday[2];
    const preBirthdayAge: number = today[2] - birthday[2] - 1;

    if (monthAfterBirthday && todayAfterBirthday) return postBirthdayAge;
    return preBirthdayAge;
}

export function isBirthday(): boolean {
    const birthday = '1/13';
    const currentDate = date.toLocaleDateString().split('/');
    const today = `${currentDate[0]}/${currentDate[1]}`;
    return today === birthday ? true : false;
}
