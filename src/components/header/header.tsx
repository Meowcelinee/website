import Image from 'next/image';

export default function Header() {
    return (
        <>
            <div className='flex justify-center items-center gap-10 bg-gradient-to-b from-base via-mantle to-mantle md:py-5 md:px-4 py-4 px-3'>
                <div className=''>
                    <Image
                        src='/images/ghpicrew.png'
                        width={500}
                        height={500}
                        className='rounded-full drop-shadow-lg m-auto md:h-40 md:w-40 h-28 w-28'
                        alt=''
                    />
                </div>
                <div className=''>
                    <p className='md:text-2xl text-xl font-semibold drop-shadow-lg'>
                        natalie raine :3
                    </p>
                    <p className='text-sm text-subtext1 drop-shadow-sm'>hi</p>
                </div>
            </div>
        </>
    );
}
