import {GET_FOOTER_MENU, GET_INFO, GET_SOCIALS, SET_FOOTER_MENU, SET_INFO, SET_SOCIALS} from "@/store/Info/Info.constant";

export const getInfo = () => ({
    type: GET_INFO
});

export const setInfo = payload => ({
    type: SET_INFO,
    payload
});

export const getFooterMenu = () => ({
    type: GET_FOOTER_MENU
});

export const setFooterMenu = payload => ({
    type: SET_FOOTER_MENU,
    payload
});

export const getSocials = () => ({
    type: GET_SOCIALS
});

export const setSocials = payload => ({
    type: SET_SOCIALS,
    payload
});