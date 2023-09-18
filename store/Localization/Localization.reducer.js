import {GET_LOCALIZATION, SET_LOCALIZATION} from "@/store/Localization/Localization.constant";
import {HYDRATE} from "next-redux-wrapper";

const initialState = {
    lang: "RU"
}

const Localization = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload.lang }
        case SET_LOCALIZATION:
            return { ...state, lang: action.payload }
        default:
            return state;
    }
}

export default Localization;