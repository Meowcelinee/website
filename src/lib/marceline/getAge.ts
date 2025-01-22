export default function getAge(): number {
    const birthday = [1, 13, 2006];
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
