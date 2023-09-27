import {setCookie} from "cookies-next";

export const setLocalizationCookie = (req, res, locale) => {
    if (locale === "ru") {
        setCookie('lang', 'RU', {req, res});
    } else {
        setCookie('lang', 'ENG', {req, res});
    }
}