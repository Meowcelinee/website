import Link from 'next/link';
import links from '../../data/linkData';
import classNames from 'classnames';

export default function Links() {
    const linkList = links.map((link) => {
        return (
            <Link
                className={classNames(
                    'bg-mantle rounded-xl text-text text-center font-medium md:text-lg mx-auto md:py-4 py-3 w-11/12 md:w-3/4',
                    {
                        'transition duration-300 hover:text-pink hover:bg-surface0':
                            link.link,
                    }
                )}
                href={link.link ?? ''}
                target={link.link ? '_blank' : ''}
                key={link.id}
            >
                <p>{link.name}</p>
                <p className="text-sm text-subtext0">{link.username ?? ''}</p>
            </Link>
        );
    });
    return <>{linkList}</>;
}
