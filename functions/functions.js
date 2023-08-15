import {wrapper} from "@/store/store";
import {getFooterMenu, getInfo, getSocials} from "@/store/Info/Info.action";

export const getServerSideProps = wrapper.getServerSideProps(store =>
    async () => {
        console.log("qwe2");
        store.dispatch(getInfo());
        store.dispatch(getFooterMenu());
        store.dispatch(getSocials());
    }
);