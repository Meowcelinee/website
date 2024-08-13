import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header';
import Navbar from '../components/navbar';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: "natalie's site :3",
    description: 'made with next',
};

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            {router.pathname === '/404' || router.pathname === '/wip' ? (
                ''
            ) : (
                <>
                    <Header />
                    <Navbar />
                </>
            )}
            <Component {...pageProps} />
            {router.pathname === '/404' || router.pathname === '/wip' ? (
                ''
            ) : (
                <Footer />
            )}
        </>
    );
}
