type three = 3; // this is totally necessary

type Orientation = string | { romantic: string; sexuality: string };

type Birthday = {
    year: number;
    month: number;
    day: number;
};

interface Nerd {
    firstName: string;
    middleName: string;
    lastName: string;
    birthday: Birthday;
    orientation: Orientation;
    pronouns: string[];
    interests?: string[];
    colon?: three;

    getAge?: () => number;
    isBirthday?: () => boolean;
}

export type { three, Orientation, Birthday, Nerd };
