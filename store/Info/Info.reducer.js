import {SET_INFO} from "@/store/Info/Info.constant";

const initialState = {
    info: {}
};

const Info = (state = initialState , action) => {
    switch (action.type) {
        case SET_INFO:
            return { ...state, info: action.payload };
        default:
            return state;
    }
}

export default Info;