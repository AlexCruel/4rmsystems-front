import {GET_INFO, SET_INFO} from "@/store/Info/Info.constant";

export const getInfo = () => ({
    type: GET_INFO
});

export const setInfo = payload => ({
    type: SET_INFO,
    payload
});