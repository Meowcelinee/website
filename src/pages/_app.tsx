import type { AppProps } from 'next/app';
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Footer from '@/src/components/footer';
import Header from '@/src/components/header/header';
import '@/src/globals.css';

const plexSans = IBM_Plex_Sans({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

const jetbrains = JetBrains_Mono({
    weight: ['100', '200', '300', '400', '500', '600', '700'],
    subsets: ['latin'],
});

export const fonts = { plexSans, jetbrains };

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    if (router.pathname === '/404') return <Component {...pageProps} />;

    return (
        <>
            <Head>
                <title>my site :3</title>
                <meta name='description' content='made with nextjs' />

                <meta property='og:title' content="marceline's website :3" />
                <meta
                    property='og:description'
                    content='a glorified "about me"'
                />
                <meta
                    property='og:image'
                    content='https://meowceline.pages.dev/images/picrews/696554.png'
                />
                <meta property='og:image:width' content='300' />
                <meta property='og:image:height' content='300' />
            </Head>

            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}
