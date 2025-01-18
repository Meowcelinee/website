import Codeblock from '@/src/components/about_me/Codeblock';
import List from '@/src/components/about_me/List';

export default function AboutMe() {
    return (
        <>
            <div className='md:flex block bg-base justify-center align-middle md:p-8 p-4'>
                <div className='w-full'>
                    <Codeblock />
                </div>
                <div className='w-full md:my-0 my-5 h-full'>
                    <div className='block bg-gradient-to-tr from-mantle via-crust to-mantle py-3 px-4 m-auto rounded-md border-2 border-transparent transition duration-500 md:w-4/5 w-11/12 md:hover:border-overlay0'>
                        <p className='text-subtext1'>
                            here&apos;s that but in a more.. readable format:
                        </p>
                        <div className='p-2'>
                            <List />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
