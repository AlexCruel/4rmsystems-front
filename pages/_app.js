import '@/styles/globals.scss'
import Layout from "@/components/Layout";
import {useEffect} from "react";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from "@/store/store";
import {getInfo} from "@/store/Info/Info.action";

export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
  );
}
