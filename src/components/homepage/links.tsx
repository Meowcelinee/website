import Link from 'next/link';
import { LinkItem } from '@/src/data/linkData';

export default function AboutLink(props: LinkItem) {
    return props.link ? (
        <Link
            className='bg-mantle border-2 border-transparent rounded-lg my-2 py-2 px-2 md:w-[49%] w-full transition duration-300 hover:border-subtext0 hover:bg-base hover:-translate-y-1'
            href={props.link}
            target='_blank'
        >
            <div className='flex flex-col'>
                <h3 className='md:text-2xl text-xl text-pink font-medium w-fit'>
                    {props.name}
                </h3>
                <h2 className='md:text-lg text-subtext1 font-medium'>
                    {props.username}
                </h2>
            </div>
        </Link>
    ) : (
        <div className='bg-mantle border-2 border-transparent rounded-lg my-2 py-2 px-2 md:w-[49%] w-full'>
            <div className='flex flex-col'>
                <h3 className='md:text-2xl text-xl font-medium w-fit'>
                    {props.name}
                </h3>
                <h2 className='md:text-lg text-subtext1 font-medium'>
                    {props.username}
                </h2>
            </div>
        </div>
    );
}
