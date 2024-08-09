import { Html, Head, Main, NextScript } from "next/document";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="bg-mantle text-text m-0">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
