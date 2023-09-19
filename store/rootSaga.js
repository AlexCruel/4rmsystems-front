import {all} from "redux-saga/effects";
import infoWatchers from "@/store/Info/Info.saga";
import localizationWatchers from "@/store/Localization/Localization.saga";

export default function* rootSaga() {
    const watchers = [
        ...infoWatchers(),
        ...localizationWatchers()
    ];

    yield all(watchers);
}