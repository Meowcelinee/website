import Image from 'next/image';
import Directory from '@/src/components/homepage/Directory';
import Link from 'next/link';
import marceline from '@/src/lib/marceline';

export default function Homepage() {
    return (
        <>
            <div className='bg-gradient-to-b from-base to-mantle md:py-12 py-16'>
                <div className='md:animate-appearShort animate-appearShortTranslate flex md:flex-row flex-col gap-8 justify-center'>
                    <div className='flex md:justify-end justify-center my-auto'>
                        <Image
                            width={250}
                            height={250}
                            src='/images/picrews/1918788.png'
                            alt=''
                            className='rounded-full transition duration-500 md:hover:scale-105'
                            quality={65}
                            priority
                        />
                    </div>
                    <div className='md:animate-appearShort animate-appearTranslate md:justify-start flex flex-col justify-center md:mx-0 m-auto text-left'>
                        <h1 className='md:text-4xl text-4xl font-semibold'>
                            {marceline.firstName.toLowerCase()}&apos;s old
                            website
                        </h1>
                        <p className='text-subtext0 mt-2'>
                            i have to keep this up for Reasons :^)
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-full px-4 py-3 md:my-12 my-4'>
                <div className='animate-delayedAppear'>
                    <h2 className='md:text-3xl text-2xl text-center font-semibold'>
                        directory
                    </h2>
                    <div className='flex md:flex-row flex-col justify-between md:px-12 px-6 py-4 mx-auto max-w-screen-xl'>
                        <Directory />
                    </div>
                </div>

                {/* new website links (it's really stupid looking on purpose) */}
                <div className='flex flex-col justify-center w-full'>
                    <Link
                        className='animate-newWebsiteLinkAppear text-xl bg-green-500 border-4 border-yellow-300 rounded-sm text-crust text-center font-bold drop-shadow-2xl px-6 py-4 my-4 mx-auto md:w-auto w-11/12 transition-all duration-300 brightness-110 md:hover:brightness-125 md:hover:scale-105 md:hover:-translate-y-1'
                        href='https://meowcelinee.pages.gay/'
                        target='_blank'
                    >
                        my gay ass new website which you should{' '}
                        <span className='underline underline-offset-2'>
                            totally
                        </span>{' '}
                        visit instead
                    </Link>
                    <Link
                        className='animate-newWebsiteSubtextAppear md:text-lg text-overlay1 text-center underline w-fit mx-auto transition duration-200 hover:text-subtext0'
                        href='https://www.newarab.com/news/vercel-faces-boycott-after-founder-poses-netanyahu'
                        target='_blank'
                    >
                        (it does not use nextjs)
                    </Link>
                </div>
            </div>
        </>
    );
}
