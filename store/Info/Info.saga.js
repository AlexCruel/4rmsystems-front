import {takeLatest, put, call, fork} from "redux-saga/effects";
import {getFooterMenu, getInfo, getSocials} from "@/pages/api/hello";
import {setFooterMenu, setInfo, setSocials} from "@/store/Info/Info.action";
import {GET_FOOTER_MENU, GET_INFO, GET_SOCIALS} from "@/store/Info/Info.constant";

function* workerGetInfo() {
    const data = yield call(getInfo);
    yield put(setInfo(data));
}

function* workerGetFooterMenu() {
    const data = yield call(getFooterMenu);
    yield put(setFooterMenu(data));
}

function* workerGetSocials() {
    const data = yield call(getSocials);
    yield put(setSocials(data));
}

function* watchGetInfo() {
    yield takeLatest(GET_INFO, workerGetInfo);
    yield takeLatest(GET_FOOTER_MENU, workerGetFooterMenu);
    yield takeLatest(GET_SOCIALS, workerGetSocials);
}

export default function infoWatchers() {
    return [
        fork(watchGetInfo)
    ];
}