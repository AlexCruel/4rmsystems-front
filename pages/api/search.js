const url = process.env.NEXT_PUBLIC_API_URL;

export const getSearchInfo = async (searchData) => {
    const request = await fetch(`${url}/search/${searchData}`);

    return await request.json();
}