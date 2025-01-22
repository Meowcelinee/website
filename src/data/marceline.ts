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
