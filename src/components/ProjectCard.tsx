import Link from 'next/link';
import Image from 'next/image';
import projects from '@/src/data/projectData';

export default function ProjectCards() {
    const sortedByLang = projects.sort((a, b) => {
        return a.language.lang < b.language.lang
            ? -1
            : a.language.lang > b.language.lang
            ? 1
            : 0;
    });

    return sortedByLang.map((project, projectKey) => {
        return (
            <div
                className='flex md:flex-row flex-col gap-4 md:justify-between bg-gradient-to-br from-crust via-mantle to-crust rounded-lg md:px-4 px-3 py-3'
                key={projectKey}
            >
                <div className='flex flex-col gap-2'>
                    {project.link ? (
                        <Link
                            href={project.link}
                            target='_blank'
                            className='md:text-2xl text-xl text-pink font-semibold transition duration-300 hover:text-text underline'
                        >
                            {project.name}{' '}
                        </Link>
                    ) : (
                        <h2 className='md:text-2xl text-xl text-pink font-semibold'>
                            {project.name}
                        </h2>
                    )}
                    <ul className='flex flex-col gap-1 text-subtext1 list-disc list-inside marker:text-pink odd:marker:text-sky'>
                        <li>Date started: {project.date.start}</li>

                        {project.date.complete && (
                            <li>Date completed: {project.date.complete}</li>
                        )}

                        <li>Language(s) used: {project.language.lang}</li>
                    </ul>
                </div>
                <div className='flex md:justify-end justify-center'>
                    <Image
                        src={project.language.img}
                        width={84}
                        height={84}
                        alt={project.language.lang}
                        title={project.language.lang}
                        className='my-auto transition duration-500 hover:scale-105'
                    />
                </div>
            </div>
        );
    });
}
