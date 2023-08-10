import {GET_INFO} from "@/store/Info/Info.constant";

const Info = (state = { info: {} }, action) => {
    switch (action.type) {
        case GET_INFO:
            return { ...state, info: action.payload };
        default:
            return state;
    }
}

export default Info;