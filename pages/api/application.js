//const url = process.env.NEXT_PUBLIC_API_URL;
const url = "https://api.4rm.org/api";

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

export const postSubscription = async (data) => {
    const response = await fetch(`${url}/subscription`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await response.json();
}

export const call = async (data) => {
    const response = await fetch(`${url}/call`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await response.json();
}

export const question = async (data) => {
    const response = await fetch(`${url}/question`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await response.json();
}