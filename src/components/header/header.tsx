import Image from 'next/image';
import Navbar from './navbar';
import Link from 'next/link';

export default function Header() {
    return (
        <header className='flex justify-center bg-gradient-to-br from-crust via-mantle to-crust drop-shadow-xl mx-auto'>
            <div className='flex md:gap-2 w-full'>
                <div className='flex align-middle md:mx-8 mx-3 my-2'>
                    <Link href='/about'>
                        <Image
                            className='rounded-full transition duration-500 hover:scale-110'
                            src='/images/natalie.png'
                            width={66}
                            height={66}
                            alt='natalie'
                            title="natalie's favorite picrew"
                        />
                    </Link>
                </div>
                <div className='my-auto'>
                    <Navbar />
                </div>
            </div>
        </header>
    );
}
