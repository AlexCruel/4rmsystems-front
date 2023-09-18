import {takeLatest, fork, put} from "redux-saga/effects";
import {GET_LOCALIZATION} from "@/store/Localization/Localization.constant";
import {setLocalization} from "@/store/Localization/Localization.action";

function* workerSetLocalization() {
    yield put(setLocalization("ENG"));
}

function* watchGetLocalization() {
    yield takeLatest(GET_LOCALIZATION, workerSetLocalization);
}

export default function localizationWatchers() {
    return [
        fork(watchGetLocalization)
    ];
}