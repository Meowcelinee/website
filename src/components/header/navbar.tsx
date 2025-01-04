import navLinks from '@/src/data/navbarData';
import Link from 'next/link';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
    return (
        <div className='flex justify-center md:gap-8 gap-3'>
            {navLinks.map((link, linkKey) => {
                return (
                    <Link
                        className={classNames(
                            'font-medium border-b-2 md:text-lg drop-shadow-md my-3 transition duration-300 hover:border-b-pink hover:text-text',
                            {
                                'text-text border-b-pink':
                                    router.pathname === link.link,
                                'text-subtext0 border-b-transparent':
                                    router.pathname !== link.link,
                            }
                        )}
                        href={link.link}
                        key={linkKey}
                    >
                        {link.title}
                    </Link>
                );
            })}
        </div>
    );
}
