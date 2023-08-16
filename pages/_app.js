import '@/styles/globals.scss'
import {Provider} from "react-redux";
import store, {wrapper} from "@/store/store";

function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
  );
}

export default wrapper.withRedux(App);
