import "../styles/globals.css";
import DefaultLayout from "../layouts/DefaultLayout"
import type { AppProps } from "next/app";
import { Roboto } from '@next/font/google'

const roboto = Roboto({
subsets:["latin"],
weight:['400']

})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <main className={roboto.className}>
                <DefaultLayout >
                    <Component {...pageProps} />
                </DefaultLayout>
            </main>
        </>
    )
}

export default MyApp;