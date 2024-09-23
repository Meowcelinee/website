import Link from 'next/link';

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
                        site and you can use them too, if you wanted to (for
                        some reason)
                    </p>
                </div>
                <br />
                <div className='flex bg-gradient-to-br from-mantle via-base to-mantle rounded-lg w-5/6 mx-auto my-5 drop-shadow-md'>
                    <div className='w-2/3 rounded-lg py-5 px-6'>
                        <Link
                            href='/404'
                            className='md:text-3xl text-2xl text-pink font-bold drop-shadow-lg transition duration-500 hover:brightness-125'
                        >
                            Title of the project
                        </Link>
                        <div className='text-subtext1 font-medium my-8'>
                            A brief description of the project
                        </div>
                        <div className='text-subtext1'>Date completed</div>
                    </div>
                    <div className='w-1/3 rounded-lg'>
                        <img
                            src='/images/missing-texture.png'
                            className='rounded-r-md'
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
