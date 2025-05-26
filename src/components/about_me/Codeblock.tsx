import MarcelineTs from './MarcelineTs';
import { fonts } from '@/src/pages/_app';

export default function Codeblock() {
    return (
        <>
            <div
                className={`${fonts.jetbrains.className} block bg-gradient-to-br from-mantle via-crust to-mantle py-2 px-3 m-auto rounded-md border-2 border-transparent transition duration-500 md:w-4/5 w-11/12 md:hover:border-overlay0`}
            >
                <div className='border-b-2 border-surface1 mb-2 text-subtext0 italic text-sm px-1'>
                    marceline.ts
                </div>
                <div className='font-medium text-sm px-2'>
                    <MarcelineTs />
                </div>
            </div>
        </>
    );
}
