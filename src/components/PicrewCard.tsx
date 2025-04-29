import Link from 'next/link';
import Image from 'next/image';
import picrews from '../data/picrewData';
import { useState } from 'react';
import classNames from 'classnames';

export default function PicrewCards() {
    const [picrewLoaded, setPicrewLoaded] = useState(false);

    return (
        <>
            <div
                className={classNames('flex', {
                    'hidden ': picrewLoaded,
                })}
            >
                <h2 className='text-yellow font-semibold text-xl animate-pulse italic'>
                    loading picrews...
                </h2>
            </div>
            {picrews.map(picrew => {
                return (
                    <div
                        className={classNames(
                            'flex gap-3 bg-gradient-to-r from-mantle via-mantle to-crust drop-shadow-sm w-full my-2 md:mx-3 mx-auto p-2 rounded-md',
                            { 'invisible h-0': !picrewLoaded }
                        )}
                        key={picrew.name}
                    >
                        <Link href={picrew.image} target='_blank'>
                            <Image
                                src={picrew.image}
                                width={90}
                                height={90}
                                className='rounded-md drop-shadow-lg mx-auto transition-all duration-200 md:hover:scale-105'
                                alt={picrew.name}
                                onLoad={() => setPicrewLoaded(true)}
                            />
                        </Link>
                        <div className='flex flex-col justify-between max-h-fit'>
                            <div className='bg'>
                                <p className='md:text-lg text-sm font-bold mb-1'>
                                    {picrew.name}
                                </p>
                                <p className='text-overlay1 text-sm'>
                                    by{' '}
                                    <span className='font-semibold text-subtext0'>
                                        {picrew.author}
                                    </span>
                                </p>
                            </div>
                            <div className='mb-1'>
                                <Link
                                    className='text-pink underline transition-all duration-300 hover:text-text'
                                    href={picrew.link}
                                    target='_blank'
                                >
                                    Source{' '}
                                    <i className='nf nf-oct-link_external text-xs' />
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
