import Link from 'next/link';
import links from '../../data/linkData';

export default function Links() {
    return links.map(link => {
        if (!link.link) {
            return (
                <div
                    className='bg-mantle rounded-2xl text-center mx-auto md:py-4 py-3 w-11/12 md:w-3/4'
                    key={link.name}
                >
                    <p className='font-medium md:text-lg'>{link.name}</p>
                    <p className='text-sm text-subtext0'>
                        {link.username ?? ''}
                    </p>
                </div>
            );
        }
        return (
            <Link
                className='bg-mantle rounded-2xl text-text text-center font-medium md:text-lg mx-auto md:py-4 py-3 w-11/12 md:w-3/4 transition duration-300 hover:text-pink hover:bg-surface0'
                href={link.link}
                target='_blank'
                key={link.name}
            >
                <p>{link.name}</p>
                <p className='text-sm text-subtext0'>{link.username ?? ''}</p>
            </Link>
        );
    });
}
