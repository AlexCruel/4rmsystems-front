import {combineReducers} from "redux";
import Info from "@/store/Info/Info.reducer";
import Localization from "@/store/Localization/Localization.reducer";

const rootReducer = combineReducers({
    Info,
    Localization
});

export default rootReducer;