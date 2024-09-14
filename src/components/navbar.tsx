import { useRouter } from 'next/router';
import NavbarLink from './navlinks';

export default function Navbar() {
    const router = useRouter();
    return (
        <div className='flex text-center mx-auto my-2'>
            <div className='flex gap-7 justify-center mx-auto w-full'>
                <NavbarLink />
            </div>
        </div>
    );
}
