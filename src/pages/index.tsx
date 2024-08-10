import Link from 'next/link';
import Projects from '../components/projects/projects';

export default function Homepage() {
    return (
        <>
            <section>
                <div className="text-center">
                    navbar will go here (component ofc)
                </div>
                <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-3 justify-center align-middle bg-base">
                    <div className="flex flex-col gap-5 justify-center items-center p-4 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        <Projects />
                    </div>
                    <div className="text-center py-4 px-3 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        this will PROBABLY be links or smth
                    </div>
                </div>
            </section>
        </>
    );
}
