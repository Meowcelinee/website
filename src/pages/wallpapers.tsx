import Wallpapers from '@/src/components/Wallpaper';
import wallpapers from '@/src/data/wallpaperData';

export default function WallpaperPage() {
    return (
        <>
            <div className='bg-base p-8 md:px-16 px-8'>
                <div className='md:w-4/5 w-11/12 m-auto'>
                    <h1 className='md:text-4xl text-3xl text-pink font-bold mb-2 drop-shadow-lg'>
                        some wallpapers i like
                    </h1>
                    <p className='text-subtext0'>
                        disclaimer: i did not make these wallpapers
                    </p>
                    <p className='text-subtext0 italic'>
                        (i like catppuccin if you couldnt tell)
                    </p>
                    <p className='text-subtext1 my-2'>
                        total wallpapers:{' '}
                        <span className='text-green font-medium'>
                            {wallpapers.length}
                        </span>
                    </p>
                </div>
                <br />
                <div className='flex flex-col flex-wrap md:grid md:grid-cols-2 md:gap-4 gap-2 md:w-4/5 w-11/12 m-auto justify-center'>
                    <Wallpapers />
                </div>
            </div>
        </>
    );
}
