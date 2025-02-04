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

export type { three, OrientationType, Nerd };
