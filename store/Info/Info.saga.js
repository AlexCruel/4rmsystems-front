import {takeLatest, put, call, fork} from "redux-saga/effects";
import {getInfo} from "@/pages/api/hello";
import {setInfo} from "@/store/Info/Info.action";
import {GET_INFO} from "@/store/Info/Info.constant";

function* workerGetInfo() {
    const data = yield call(getInfo);
    console.log(data);
    yield put(setInfo(data));
}

function* watchGetInfo() {
    yield takeLatest(GET_INFO, workerGetInfo);
}

export default function infoWatchers() {
    return [
        fork(watchGetInfo)
    ];
}