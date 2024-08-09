import Link from "next/link";

export default function PageNotFound() {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-gradient-to-bl from-crust via-mantle to-crust h-screen w-screen">
                <div className="block">
                    <h1 className="text-center text-2xl drop-shadow-lg md:text-3xl my-8">
                        page not found 3:
                    </h1>
                    <Link
                        className="text-center bg-gradient-to-br from-base to-surface0 px-3 py-2 rounded-lg drop-shadow-md hover:from-surface0 hover:to-surface2"
                        href="/"
                    >
                        Go home
                    </Link>
                </div>
            </div>
        </>
    );
}
