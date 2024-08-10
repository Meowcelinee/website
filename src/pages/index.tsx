import Link from 'next/link';
import Projects from '../components/projects/projects';

export default function Homepage() {
    return (
        <>
            <section>
                <div className="flex gap-32 text-center justify-center bg-base">
                    <p>klj;sdasdfjk</p>
                </div>
                <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-3 justify-center align-middle bg-base">
                    <div className="flex flex-col gap-5 justify-center items-center p-4 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        <Projects />
                    </div>
                    <div className="text-center py-4 px-3 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        links go here (just like the other site)
                    </div>
                </div>
            </section>
        </>
    );
}
