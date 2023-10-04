const url = process.env.NEXT_PUBLIC_API_URL;

export const getSearchInfo = async () => {
    const request = await fetch(`${url}/hello`);

    return await request.json();
}