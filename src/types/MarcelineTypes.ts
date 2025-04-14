type three = 3; // this is totally necessary

type Orientation = string | { romantic: string; sexuality: string };

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

export type { three, Orientation, Nerd };
