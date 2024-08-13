import Projects from '../components/homepage/projects';
import Links from '../components/homepage/links';

export default function Homepage() {
    return (
        <>
            <section>
                <div className='flex justify-center bg-base px-8'>
                    <div className='flex md:flex-row flex-col gap-12 md:px-8 px-4 md:py-3 py-2 w-full'>
                        <div className='flex flex-col gap-2 md:my-3 my-2 mx-auto w-11/12 md:w-1/2'>
                            <h1 className='md:text-3xl text-2xl text-pink font-bold mx-1 my-2 md:my-3 md:mb-5'>
                                Links
                            </h1>
                            <Links />
                        </div>
                        <div className='flex flex-col gap-4 md:my-3 my-2 mx-auto w-11/12 md:w-1/2'>
                            <h1 className='md:text-3xl text-2xl text-pink font-bold mx-1 my-2 md:my-3'>
                                Projects
                            </h1>
                            <Projects />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
