//const url = process.env.NEXT_PUBLIC_API_URL;
const url = "https://api.4rm.org/api";
const url_ssr = "http://api.4rm.org/api";

export const getSearchInfo = async (searchData, lang, type) => {
    switch (type) {
        case 'ssr':
            const request_ssr = await fetch(`${url_ssr}/search/${searchData}/${lang}`);

            return await request_ssr.json();
        default:
            const request = await fetch(`${url}/search/${searchData}/${lang}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });

            return await request.json();
    }

}