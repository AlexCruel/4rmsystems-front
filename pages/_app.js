import '@/styles/globals.scss'
import {Provider} from "react-redux";
import store, {wrapper} from "@/store/store";
import Head from "next/head";

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="robots" content="index, follow" key='robots' />
                <link rel="shortcut icon" href="/favicon.ico" />
            </Head>
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
  );
}

export default wrapper.withRedux(App);
