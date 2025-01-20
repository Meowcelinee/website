import Link from 'next/link';

export default function PageNotFound() {
    return (
        <>
            <div className='flex justify-center items-center bg-gradient-to-b from-base via-crust to-base h-screen w-screen'>
                <div className='px-8 py-6 transition duration-300'>
                    <h1 className='md:text-6xl text-5xl text-red drop-shadow-lg font-semibold mb-8'>
                        404
                    </h1>
                    <h3 className='md:text-3xl text-2xl text-subtext1 drop-shadow-md font-medium'>
                        that page doesn&apos;t exist here.
                    </h3>
                    <p className='mt-8 mb-4'>
                        <Link
                            href='/'
                            className='bg-surface0 rounded-xl px-4 py-3 font-medium text-text transition duration-300 hover:bg-pink hover:text-crust'
                        >
                            <i className='nf nf-fa-arrow_left font-thin text-sm mr-2'></i>
                            go home
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
