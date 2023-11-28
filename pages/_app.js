import '@/styles/globals.scss'
import {Provider} from "react-redux";
import store, {wrapper} from "@/store/store";
import Head from "next/head";
import {useEffect} from "react";
import {createLightGallery} from "@/utils/lightGallery";
import ScrollButton from "@/components/ScrollButton";

function App({ Component, pageProps }) {
    useEffect(() => {
        createLightGallery();
    }, []);

    return (
        <>
            <Head>
                <meta name="robots" content="index, follow" key='robots' />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
            <ScrollButton />
        </>
  );
}

export default wrapper.withRedux(App);
