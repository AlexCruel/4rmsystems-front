import {getCookie, setCookie} from "cookies-next";

export const setLocalizationCookie = (req, res) => {
    const lang = getCookie('lang', {req, res});

    if (!lang) {
        setCookie('lang', 'RU', {req, res});
    }
}