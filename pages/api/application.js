const url = process.env.NEXT_PUBLIC_API_URL;

export const postFeedback = async (data) => {
    const response = await fetch(`${url}/feedback`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await response.json();
}