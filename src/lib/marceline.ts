import { Nerd } from '@/src/types/MarcelineTypes';

const marceline: Nerd = {
    firstName: 'Marceline',
    middleName: 'Ashley',
    lastName: 'Raine',
    birthday: {
        year: 2006,
        month: 1,
        day: 13,
    },
    orientation: 'Lesbian',
    pronouns: ['she/her'],
    interests: ['Music', 'Programming', 'Destiny 2', 'Minecraft', 'Women'],
    colon: 3,

    getAge: function (): number {
        const thisYear = new Date().getFullYear();
        const thisMonth = new Date().getMonth();
        const today = new Date().getDate();

        const monthAfterBirthday: boolean = thisMonth > this.birthday.month;
        const monthDuringBirthday: boolean = thisMonth === this.birthday.month;

        const todayAfterBirthday: boolean = today >= this.birthday.day;

        const postBirthdayAge: number = thisYear - this.birthday.year;
        const preBirthdayAge: number = thisYear - this.birthday.year - 1;

        // if it's a month after my birthday, OR if it's a day after my birthday in the SAME month,
        // return the post birthday age. otherwise return the pre birthday age
        return monthAfterBirthday || (monthDuringBirthday && todayAfterBirthday)
            ? postBirthdayAge
            : preBirthdayAge;
    },

    isBirthday: function (): boolean {
        const today = new Date().getDate();
        const month = new Date().getMonth();

        return this.birthday.day === today && this.birthday.month === month;
    },
};

export default marceline;
