import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div className='flex text-center mx-auto my-2'>
                <div className='flex gap-7 justify-center mx-auto w-full'>
                    <Link
                        className='font-normal text-subtext0 text-lg transition duration-300 hover:text-text'
                        href='/'
                    >
                        home
                    </Link>
                    <Link
                        className='font-normal text-subtext0 text-lg transition duration-300 hover:text-text'
                        href='/about'
                    >
                        about me
                    </Link>
                    <Link
                        className='font-normal text-subtext0 text-lg transition duration-300 hover:text-text'
                        href='/wip'
                    >
                        sample text
                    </Link>
                </div>
            </div>
        </>
    );
}
