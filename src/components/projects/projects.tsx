import Link from 'next/link';

export default function Project() {
    return (
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
                    <li className="marker:text-pink">language</li>
                    <li className="marker:text-pink">date started</li>
                    <li className="marker:text-pink">other info</li>
                </ul>
            </div>
        </div>
    );
}
