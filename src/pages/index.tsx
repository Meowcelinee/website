import Link from 'next/link';

export default function Homepage() {
    return (
        <>
            <section>
                <div className="text-center">
                    navbar will go here (component ofc)
                </div>
                <div className="flex md:flex-row flex-col-reverse gap-5 md:gap-3 justify-center align-middle bg-base">
                    <div className="flex flex-col gap-3 justify-center items-center p-3 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        <div className="block bg-gradient-to-br from-mantle via-mantle to-crust rounded-lg drop-shadow-md py-3 px-3 mx-auto w-full">
                            <div className="my-2">
                                <Link
                                    href=""
                                    className="text-xl text-pink font-semibold transition duration-300 hover:text-text"
                                >
                                    Project name
                                </Link>
                            </div>
                            <div>
                                <ul className="text-sm list-disc mx-4">
                                    <li className="marker:text-pink">
                                        language
                                    </li>
                                    <li className="marker:text-pink">
                                        date started
                                    </li>
                                    <li className="marker:text-pink">
                                        other info
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center py-3 px-3 mx-auto md:mx-0 w-11/12 md:w-2/5">
                        this will PROBABLY be links or smth
                    </div>
                </div>
            </section>
        </>
    );
}
