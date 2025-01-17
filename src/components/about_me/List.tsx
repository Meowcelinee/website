import Link from 'next/link';
import { getAge } from '@/src/data/natalie';

export default function List() {
    return (
        <ul className='flex flex-col gap-3 list-disc list-inside marker:text-pink'>
            <li>
                i&apos;m a {getAge()} year old trans girl who likes music,
                programming (sometimes), destiny 2, minecraft, and other women
            </li>
            <li>
                i used to live in texas(s) but currently live in connecticut
            </li>
            <li>
                i&apos;m a staff member for{' '}
                <Link
                    href='https://www.queercraft.net'
                    target='_blank'
                    className='underline text-subtext1 transition duration-300 hover:text-pink'
                >
                    queercraft
                </Link>{' '}
                (which is a very cool place with cool people)
            </li>
            <li>
                i&apos;ve used html/css/js, nextjs/typescript, and a LITTLE
                python, starting around early 2024. i&apos;ve
                worked/learned/practiced/whatever{' '}
                <span className='italic'>somewhat</span> off and on since then,
                because of distractions, frustration, etc.
            </li>
            <li>
                you can see my projects{' '}
                <Link
                    href='/projects'
                    className='text-pink transition duration-300 hover:text-text'
                >
                    here :3
                </Link>
            </li>
        </ul>
    );
}
