import {wrapper} from "@/store/store";
import {
    getAbout,
    getBanner,
    getFooterMenu,
    getInfo,
    getInformation,
    getPage,
    getPartner,
    getSocials
} from "@/pages/api/hello";

// export const getServerSideProps = wrapper.getServerSideProps(store =>
//     async () => {
//         console.log("qwe2");
//         store.dispatch(getInfo());
//         store.dispatch(getFooterMenu());
//         store.dispatch(getSocials());
//     }
// );

export const getInfoData = async () => {
    const info = await getInfo();
    const menu = await getFooterMenu();
    const socials = await getSocials();

    return {
        info, menu, socials
    };
}

export const getBannerData = async () => {
    const banner = await getBanner();

    return {
        banner
    };
}

export const getAboutData = async () => {
    const about = await getAbout();

    return {
        about
    };
}

export const getInformationData = async (type) => {
    const information = await getInformation(type);

    return {
        information
    };
}

export const getPartnerData = async () => {
    const partner = await getPartner();

    return {
        partner
    };
}

export const getPageData = async (code) => {
    const page = await getPage(code);

    return {
        page
    };
}