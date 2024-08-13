import Link from 'next/link';

export default function PageWip() {
    return (
        <>
            <div className='flex flex-col justify-center items-center bg-gradient-to-br from-mantle via-base to-crust h-screen w-screen'>
                <div className='block'>
                    <h1 className='text-center text-pink text-3xl font-semibold drop-shadow-lg md:text-4xl my-8'>
                        page under construction
                    </h1>
                    <h3 className='text-left text-lg drop-shadow-md mb-8'>
                        check back sometime later :3c
                    </h3>
                    <Link
                        className='text-center text-subtext0 bg-surface0 px-3 py-2 md:py-3 rounded-lg drop-shadow-md transition duration-300 hover:bg-surface2 hover:text-text'
                        href='/'
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </>
    );
}
