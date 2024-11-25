import Link from 'next/link';
import Image from 'next/image';
import picrews from '../data/picrewData';

export default function PicrewCards() {
    return picrews.map(picrew => {
        return (
            <div className='bg-mantle w-72 my-5 md:mx-3 mx-auto p-4 rounded-md'>
                <Link href={picrew.image} target='_blank'>
                    <Image
                        src={picrew.image}
                        width={500}
                        height={500}
                        className='rounded-md drop-shadow-lg mx-auto mb-2 md:w-fit transition-all duration-150 md:hover:scale-105'
                        alt=''
                    />
                </Link>
                <p className='font-bold'>{picrew.name}</p>
                <p className='text-overlay1'>
                    by{' '}
                    <span className='font-semibold text-subtext0'>
                        {picrew.author}
                    </span>
                </p>
                <Link
                    className='text-pink underline transition-all duration-300 hover:text-text'
                    href={picrew.link}
                    target='_blank'
                >
                    Source &#129109;
                </Link>
            </div>
        );
    });
}
