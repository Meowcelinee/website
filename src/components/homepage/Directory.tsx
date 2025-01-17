import Link from 'next/link';
import navLinks, { NavLink } from '@/src/data/navbarData';

function DirectoryLink(props: NavLink) {
    return (
        <Link
            href={props.link}
            className='bg-surface0 border-2 border-transparent rounded-lg drop-shadow-md md:mx-2 mx-auto my-3 px-3 md:py-4 py-3 md:max-w-56 w-11/12 transition duration-300 hover:border-subtext1 hover:-translate-y-1'
        >
            <p className='text-center text-lg font-medium'>{props.title}</p>
        </Link>
    );
}

export default function Directory() {
    return navLinks.map((link, linkKey) => {
        return <DirectoryLink {...link} key={linkKey} />;
    });
}
