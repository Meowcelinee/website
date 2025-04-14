import PicrewCards from '../components/PicrewCard';

export default function Picrews() {
    return (
        <>
            <div className='bg-base md:px-16 p-4'>
                <div className='md:w-4/5 w-11/12 m-auto'>
                    <h1 className='md:text-4xl text-2xl text-pink font-bold mb-2 drop-shadow-lg'>
                        picrews that i&apos;ve made
                    </h1>
                    <p className='text-sm text-subtext0 font-medium drop-shadow-md'>
                        (and their sources ofc)
                    </p>
                </div>
                <br />
                <div className='flex flex-col flex-wrap gap-5 md:w-4/5 w-11/12 m-auto justify-center'>
                    <PicrewCards />
                </div>
            </div>
        </>
    );
}
