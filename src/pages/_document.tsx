import { Html, Head, Main, NextScript } from 'next/document';
import { fonts } from './_app';

export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body className={`bg-mantle text-text ${fonts.plexSans.className}`}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
