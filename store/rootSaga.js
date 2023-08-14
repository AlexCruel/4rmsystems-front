import {all} from "redux-saga/effects";
import infoWatchers from "@/store/Info/Info.saga";

export default function* rootSaga() {
    const watchers = [
        ...infoWatchers()
    ];

    yield all(watchers);
}