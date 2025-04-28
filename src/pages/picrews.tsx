import PicrewCards from '../components/PicrewCard';

export default function Picrews() {
    return (
        <div className='md:flex block bg-base md:px-12 p-4'>
            <div className='md:w-2/5 w-11/12 mx-auto md:my-4 md:pr-4'>
                <h1 className='md:text-4xl text-2xl text-pink font-bold mb-2 drop-shadow-lg'>
                    picrews that i&apos;ve made
                </h1>
                <p className='text-sm text-subtext0 font-medium drop-shadow-md md:mb-6 mb-4'>
                    (and their sources ofc)
                </p>
                <p className='text-sm text-subtext0 font-medium drop-shadow-md md:mb-4 mb-2'>
                    disclaimer: these are not the{' '}
                    <span className='italic'>only</span> picrews that i&apos;ve
                    made, just my favorites/most recent
                </p>
                <p className='text-sm text-subtext0 font-medium drop-shadow-md'>
                    i will absolutely not be storing every picrew i&apos;ve ever
                    made on this site
                </p>
            </div>
            <br className='md:hidden' />
            <div className='flex flex-col flex-wrap gap-5 md:w-3/5 w-11/12 m-auto justify-center'>
                <PicrewCards />
            </div>
        </div>
    );
}
