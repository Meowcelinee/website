import NatalieTs from './NatalieTs';

export default function Codeblock() {
    return (
        <>
            <div
                className='block bg-gradient-to-br from-mantle via-crust to-mantle py-2 px-3 m-auto rounded-md border-2 border-transparent transition duration-500 md:w-4/5 w-11/12 md:hover:border-overlay0'
                id='aboutMeCodeblock'
            >
                <div className='border-b-2 border-surface1 mb-2 text-subtext0 italic text-sm px-1'>
                    natalie.ts
                </div>
                <div className='font-medium md:text-sm text-xs px-2'>
                    <NatalieTs />
                </div>
            </div>
        </>
    );
}
