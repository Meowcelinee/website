export default function isBirthday(): boolean {
    const birthday = '1/13';
    const currentDate = new Date().toLocaleDateString().split('/');
    const today = `${currentDate[0]}/${currentDate[1]}`;
    return today === birthday ? true : false;
}
