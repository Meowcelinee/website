export default function getAge(): number {
    const [birthMonth, birthday, birthYear] = [1, 13, 2006];
    const currentDate = new Date().toLocaleDateString().split('/');

    const [thisMonth, today, thisYear] = [
        Number(currentDate[0]),
        Number(currentDate[1]),
        Number(currentDate[2]),
    ];

    const monthAfterBirthday: boolean = thisMonth > birthMonth;
    const monthDuringBirthday: boolean = thisMonth === birthMonth;

    const todayAfterBirthday: boolean = today >= birthday;

    const postBirthdayAge: number = thisYear - birthYear;
    const preBirthdayAge: number = thisYear - birthYear - 1;

    // - if it's a month after my birthday, OR if it's a day after my birthday in the SAME month,
    // - return the post birthday age. otherwise return the pre birthday age
    return monthAfterBirthday || (monthDuringBirthday && todayAfterBirthday)
        ? postBirthdayAge
        : preBirthdayAge;
}

// prettier-ignore
const getAgeOneLiner = (): number => (Number(new Date().toLocaleDateString().split('/')[0]) > 1) || (Number(new Date().toLocaleDateString().split('/')[0]) === 1 && Number(new Date().toLocaleDateString().split('/')[1]) >= 13) ? Number(new Date().toLocaleDateString('/')[2]) - 2006 : Number(new Date().toLocaleDateString('/')[2]) - 2006 - 1;
// ^^^^ and this is why we use variables.
