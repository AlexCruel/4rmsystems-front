import {SET_FOOTER_MENU, SET_INFO, SET_SOCIALS} from "@/store/Info/Info.constant";
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    info: {},
    footerMenu: [],
    socials: {}
};

const Info = (state = initialState , action) => {
    switch (action.type) {
        case HYDRATE:
            return {...action.payload.Info};
        case SET_INFO:
            return { ...state, info: action.payload };
        case SET_FOOTER_MENU:
            return { ...state, footerMenu: action.payload };
        case SET_SOCIALS:
            return { ...state, socials: action.payload };
        default:
            return state;
    }
}

export default Info;