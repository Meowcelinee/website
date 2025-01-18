import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className='bg-mantle mt-3 mx-5 md:py-3 md:px-2 py-3 px-2'>
            <p className='text-subtext1 mx-1'>
                &copy; {currentYear} marceline raine :3{' '}
                <span className='text-xs text-overlay2 opacity-60'>
                    (not actually but idc)
                </span>
            </p>
            <hr className='my-2 border-overlay0' />
            <p className='text-subtext0 text-sm mx-1 my-1'>
                hosted by{' '}
                <Link
                    className='text-peach underline transition-all duration-300 hover:text-text'
                    href='https://pages.cloudflare.com/'
                    target='_blank'
                >
                    cloudflare pages
                </Link>
            </p>
            <p className='text-subtext0 text-sm mx-1 my-1'>
                made with <span className='text-pink'>{`<`}3</span>
            </p>
        </div>
    );
}
