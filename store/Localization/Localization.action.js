import {GET_LOCALIZATION, SET_LOCALIZATION} from "@/store/Localization/Localization.constant";

export const getLocalization = () => ({
    type: GET_LOCALIZATION
});

export const setLocalization = payload => ({
    type: SET_LOCALIZATION,
    payload
});