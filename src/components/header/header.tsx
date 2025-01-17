'use client';

import Image from 'next/image';
import Navbar from './navbar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

export default function Header() {
    const pathname = usePathname();

    return (
        <header
            className={classNames(
                'flex justify-center bg-gradient-to-br from-crust via-mantle to-crust drop-shadow-md mx-auto',
                {
                    visible: pathname !== '/',
                    hidden: pathname === '/',
                }
            )}
        >
            <div className='flex md:gap-2 w-full'>
                <div className='flex align-middle md:mx-8 mx-3 my-3'>
                    <Link href='/'>
                        <Image
                            className='transition duration-500 hover:scale-110'
                            src='/images/home.png'
                            width={35}
                            height={35}
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
