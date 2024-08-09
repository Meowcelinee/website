import Link from 'next/link';

export default function PageNotFound() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gradient-to-bl from-crust via-mantle to-crust h-screen w-screen">
                <div className="block">
                    <h1 className="text-center text-2xl drop-shadow-lg md:text-3xl my-8">
                        page not found 3:
                    </h1>
                    <Link
                        className="text-center text-subtext0 bg-surface0 px-3 py-2 rounded-lg drop-shadow-md transition duration-300 hover:bg-surface2 hover:text-text"
                        href="/"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </>
    );
}
