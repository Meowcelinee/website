import Image from 'next/image';
import Link from 'next/link';
import wallpapers from '@/src/data/wallpaperData';
import { useState } from 'react';
import classNames from 'classnames';

export default function Wallpapers() {
    const [imagesLoaded, setImagesLoaded] = useState(false);

    return (
        <>
            <div
                className={classNames('flex', {
                    'hidden ': imagesLoaded,
                })}
            >
                <h2 className='text-yellow font-semibold text-xl animate-pulse italic'>
                    loading wallpapers...
                </h2>
            </div>
            {wallpapers
                .sort((a, b) => {
                    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
                })
                .map((wp, wpKey) => {
                    // TODO: find an api to automatically convert the pngs to webp
                    const previewPath = `/images/wallpapers/previews/${wp.src
                        .split('/')[3]
                        .replace('.png', '.webp')
                        .replace('.jpg', '.webp')}`;

                    console.log(previewPath);

                    return (
                        <div
                            className={classNames('p-0', {
                                'invisible h-0': !imagesLoaded,
                            })}
                            key={wpKey}
                        >
                            <div className='bg-mantle rounded-lg drop-shadow-md'>
                                <div className=''>
                                    <Link
                                        href={wp.src}
                                        target='_blank'
                                        className='w-fit'
                                    >
                                        <Image
                                            width={600}
                                            height={300}
                                            alt={wp.name}
                                            src={previewPath}
                                            className='rounded-t-lg transition ease-in-out h-fit w-fit duration-300 hover:scale-105'
                                            onLoad={() => setImagesLoaded(true)}
                                            quality={60}
                                        />
                                    </Link>
                                    <div className='px-3 py-2 mb-2'>
                                        <h3 className='text-pink text-xl font-semibold'>
                                            {wp.name}
                                        </h3>
                                        <p className='text-subtext0 font-medium'>
                                            {wp.dimensions}
                                        </p>
                                        {wp.ctp && (
                                            <p className='text-subtext1'>
                                                Catppuccin
                                            </p>
                                        )}
                                        <Link
                                            className='text-pink underline transition duration-300 hover:text-text'
                                            href={wp.src}
                                            download={true}
                                        >
                                            Download
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </>
    );
}
