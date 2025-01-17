import Image from 'next/image';
import Directory from '@/src/components/homepage/Directory';

export default function Homepage() {
    return (
        <>
            <div className='animate-appear bg-gradient-to-b from-base to-mantle md:py-12 py-16'>
                <div className='flex md:flex-row flex-col gap-8 justify-center'>
                    <div className='flex md:justify-end justify-center my-auto'>
                        <Image
                            width={250}
                            height={250}
                            src='/images/picrews/2439112.png'
                            alt=''
                            className='rounded-full transition duration-700 hover:-translate-y-3'
                        />
                    </div>
                    <div className='md:justify-start flex flex-col justify-center md:mx-0 m-auto text-left'>
                        <h1 className='md:text-4xl text-4xl font-semibold'>
                            lorem ipsum
                        </h1>
                        <p className='text-subtext0'>
                            welcome to my website :)
                        </p>
                    </div>
                </div>
            </div>
            <div className='animate-appearShort bg-mantle w-full px-4 py-3 md:my-12 my-4'>
                <h2 className='md:text-3xl text-2xl text-center font-semibold'>
                    directory
                </h2>
                <div className='flex md:flex-row flex-col justify-between md:px-12 px-6 py-4 mx-auto max-w-screen-xl'>
                    <Directory />
                </div>
            </div>
        </>
    );
}
