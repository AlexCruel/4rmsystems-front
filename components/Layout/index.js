import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useDispatch, useSelector} from "react-redux";

const Layout = ({children}) => {
    // const info = useSelector(store => store?.Info?.info);
    // const menu = useSelector(store => store?.Info?.footerMenu);
    // const socials = useSelector(store => store?.Info?.socials);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getInfo());
    //     dispatch(getFooterMenu());
    //     dispatch(getSocials());
    // }, [dispatch]);

    return (
        <>
            <Header phones={info.phone_items} />
            <main>{children}</main>
            <Footer info={info} menu={menu} socials={socials} />
        </>
    );
}

export default Layout;