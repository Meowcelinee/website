import navLinks from '../../data/navbarData';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function NavbarLink() {
    const router = useRouter();
    const navLinkList = navLinks.map(link => {
        return (
            <Link
                className={classNames(
                    'font-normal text-subtext0 text-lg transition duration-300 hover:text-text',
                    {
                        'text-overlay2 hover:text-subtext1':
                            router.pathname !== link.link,
                        'text-text': router.pathname === link.link,
                    }
                )}
                href={link.link}
                key={link.title}
            >
                {link.title}
            </Link>
        );
    });
    return navLinkList;
}
