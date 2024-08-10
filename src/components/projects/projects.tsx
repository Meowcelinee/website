import Link from 'next/link';
import projects from './projectData';

export default function Project() {
    return (
        <>
            <div className="block bg-gradient-to-br from-mantle via-mantle to-crust rounded-lg drop-shadow-md py-3 px-3 mx-auto w-full">
                <div className="my-2">
                    <Link
                        href={project.link}
                        className="text-xl text-pink font-semibold transition duration-300 hover:text-text"
                    >
                        {project.name}
                    </Link>
                </div>
                <div>
                    <ul className="text-sm list-disc mx-4">
                        <li className="marker:text-pink">{project.language}</li>
                        <li className="marker:text-pink">{project.date}</li>
                        <li className="marker:text-pink">
                            {project.other ?? ''}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
