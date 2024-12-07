import Codeblock from '../components/about_me/Codeblock';

export default function AboutMe() {
    return (
        <>
            <div className='md:flex block bg-base justify-center align-middle md:p-8 p-4'>
                <div className='w-full'>
                    <Codeblock />
                </div>
                <div className='w-full md:my-0 my-5'>
                    <div className='block bg-mantle py-3 px-4 m-auto rounded-md md:w-4/5 w-11/12'>
                        i'm gonna make this part a proper "about me" thing thats
                        like. actually understandable to most other people
                    </div>
                </div>
            </div>
        </>
    );
}
