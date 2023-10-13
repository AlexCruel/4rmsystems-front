//const url = process.env.NEXT_PUBLIC_API_URL;
const url = "https://api.4rm.org/api";

export const getSearchInfo = async (searchData, lang) => {
    const request = await fetch(`${url}/search/${searchData}/${lang}`);

    return await request.json();
}