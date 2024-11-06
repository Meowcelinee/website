import localProjects from '../data/localProjectData';
import Link from 'next/link';
import Image from 'next/image';

export default function LocalProjectList() {
    return localProjects.map(project => {
        return (
            <div
                className='md:flex block bg-gradient-to-br from-mantle via-base to-mantle rounded-lg md:w-5/6 w-3/4 mx-auto my-5 drop-shadow-md'
                key={project.title}
            >
                <div className='md:w-2/3 w-full rounded-lg py-5 px-6'>
                    <Link
                        href={project.link}
                        className='md:text-3xl text-2xl text-pink font-bold drop-shadow-lg transition duration-500 hover:brightness-125'
                    >
                        {project.title}
                    </Link>
                    <div className='text-subtext1 font-medium my-8'>
                        {project.description}
                    </div>
                    <div className='text-subtext1 text-sm my-4'>
                        {project.date}
                    </div>
                </div>
                <div className='md:w-1/3 w-full rounded-lg'>
                    <Image
                        src={project.image}
                        width={1000}
                        height={1000}
                        className='md:rounded-r-md rounded-b-md'
                        alt=''
                    />
                </div>
            </div>
        );
    });
}
