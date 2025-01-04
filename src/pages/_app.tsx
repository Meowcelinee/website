import type { Metadata } from 'next';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Footer from '@/src/components/footer';
import Header from '@/src/components/header/header';
import '@/src/styles/globals.css';

export const metadata: Metadata = {
    title: "natalie's site :3",
    description: 'made with next',
};

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            {router.pathname === '/404' ? (
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
