import Link from 'next/link';

export default function Footer() {
    return (
        <>
            <div className='bg-mantle mt-3 mx-5 md:py-4 md:px-3 py-3 px-2'>
                <p className='mx-1'>site by natalie raine :3</p>
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
        </>
    );
}
