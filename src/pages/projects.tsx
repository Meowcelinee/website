import ProjectCards from '@/src/components/ProjectCard';
import projects from '@/src/data/projectData';

export default function Projects() {
    return (
        <>
            <div className='bg-base p-8 md:px-16 px-8'>
                <div className='md:w-4/5 w-11/12 m-auto'>
                    <h1 className='md:text-4xl text-3xl text-pink font-bold mb-2 drop-shadow-lg'>
                        my projects :3
                    </h1>
                    <p className='text-sm text-subtext0 font-medium drop-shadow-md italic'>
                        (of varying degrees of quality)
                    </p>
                    <p className='text-subtext1 font-medium drop-shadow-md mt-2'>
                        total projects:{' '}
                        <span className='font-semibold text-green'>
                            {projects.length}
                        </span>
                    </p>
                </div>
                <br />
                <div className='flex flex-col flex-wrap gap-3 md:w-4/5 w-11/12 m-auto justify-center'>
                    <ProjectCards />
                </div>
            </div>
        </>
    );
}
