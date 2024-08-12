import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <div className="flex text-center justify-between mx-auto my-2">
                <div className="flex justify-start mx-auto w-auto"></div>
                <div className="flex gap-7 justify-center mx-5 w-full">
                    <Link
                        className="font-normal text-subtext0 text-lg transition duration-300 hover:text-text"
                        href="/"
                    >
                        sample text
                    </Link>
                    <Link
                        className="font-normal text-subtext0 text-lg transition duration-300 hover:text-text"
                        href="/"
                    >
                        texticles
                    </Link>
                    <Link
                        className="font-normal text-subtext0 text-lg transition duration-300 hover:text-text"
                        href="/"
                    >
                        text-text
                    </Link>
                </div>
                <div className="flex justify-end mx-5 w-auto"></div>
            </div>
        </>
    );
}
