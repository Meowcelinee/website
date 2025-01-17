import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '@/src/components/footer';
import Header from '@/src/components/header/header';
import '@/src/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();
    return (
        <>
            <Head>
                <title>my site :3</title>
                <meta name='description' content='made with next' />

                <meta property='og:title' content="natalie's site" />
                <meta
                    property='og:description'
                    content='shittily made with nextjs'
                />
                <meta
                    property='og:image'
                    content='/images/picrews/2439112.png'
                />
            </Head>

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
