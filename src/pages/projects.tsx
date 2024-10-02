import LocalProjectList from '../components/localProjects';

export default function Projects() {
    return (
        <>
            <div className='bg-base p-8 md:px-16 px-8'>
                <div className='w-4/5 m-auto'>
                    <h1 className='md:text-4xl text-2xl text-pink font-bold mb-2 drop-shadow-lg'>
                        Projects on this site
                    </h1>
                    <h3 className='text-sm text-subtext0 font-medium drop-shadow-md'>
                        (project-ception)
                    </h3>
                    <p className='md:text-lg text-md text-text my-6'>
                        basically just all those basic beginner projects that
                        everyone tells people to do, but yknow, they're on this
                        site and you can use them too. if you wanted to for some
                        reason
                    </p>
                </div>
                <br />
                <LocalProjectList />
            </div>
        </>
    );
}
