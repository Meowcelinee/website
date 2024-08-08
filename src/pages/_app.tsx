import type { Metadata } from "next";
import type { AppProps } from "next/app";
import "../styles/globals.css";

export const metadata: Metadata = {
    title: "natalie's site :3",
    description: "made with next",
};

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}
