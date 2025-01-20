import Codeblock from '@/src/components/about_me/Codeblock';
import List from '@/src/components/about_me/List';
import AboutLink from '@/src/components/homepage/links';
import links from '@/src/data/linkData';

export default function AboutMe() {
    return (
        <>
            <div className='bg-base p-8'>
                <div className='md:w-4/5 w-11/12 m-auto'>
                    <h1 className='md:text-4xl text-3xl text-pink font-bold mb-2 drop-shadow-lg'>
                        about me
                    </h1>
                    <p className='text-subtext0 font-medium drop-shadow-md'>
                        and some links related to me
                    </p>
                </div>
                <br />

                <div className='flex flex-col gap-8'>
                    <div className='md:flex md:flex-row flex-col gap-4 md:w-4/5 w-11/12 mx-auto'>
                        <Codeblock />
                        <div className='block bg-gradient-to-tr from-mantle via-crust to-mantle py-3 px-4 rounded-md border-2 border-transparent transition duration-500 md:w-4/5 w-11/12 h-fit md:hover:border-overlay0'>
                            <p className='text-subtext1'>
                                here&apos;s that but in a more.. readable
                                format:
                            </p>
                            <div className='p-2'>
                                <List />
                            </div>
                        </div>
                    </div>
                    <div className='md:w-4/5 w-11/12 mx-auto'>
                        <h2 className='text-2xl text-pink font-semibold mb-4'>
                            my links:
                        </h2>
                        <div className='flex flex-wrap justify-between w-full'>
                            {links.map((link, linkKey) => {
                                return <AboutLink {...link} key={linkKey} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
