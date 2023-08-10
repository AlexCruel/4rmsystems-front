import {GET_INFO} from "@/store/Info/Info.constant";

export const getInfo = payload => ({
    type: GET_INFO,
    payload
});