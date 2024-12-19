import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '../components/footer';
import Header from '../components/header/header';
import '../styles/globals.css';

export const metadata: Metadata = {
    title: "natalie's site :3",
    description: 'made with next',
};

const hfIgnore = ['/404', '/wip'];

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            {hfIgnore.indexOf(router.pathname) > -1 ? (
                <Component {...pageProps} />
            ) : (
                <>
                    <Header />
                    <Component {...pageProps} />
                    <Footer />
                </>
            )}
        </>
    );
}
