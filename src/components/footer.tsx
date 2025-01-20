import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-mantle mt-1 mx-2 md:py-3 md:px-3 py-2 px-2'>
            <p className='text-subtext1'>
                &copy; {currentYear} marceline raine :3{' '}
                <span className='text-xs text-overlay2 opacity-60'>
                    (not actually but idc)
                </span>
            </p>
            <hr className='my-2 border-overlay0' />
            <p className='text-subtext0 text-sm my-1'>
                hosted by{' '}
                <Link
                    className='text-peach underline transition-all duration-300 hover:text-text'
                    href='https://pages.cloudflare.com/'
                    target='_blank'
                >
                    cloudflare pages
                </Link>
            </p>
            <p className='text-subtext0 text-sm my-1'>
                made with <span className='text-pink'>{`<`}3</span>
            </p>
        </div>
    );
}
