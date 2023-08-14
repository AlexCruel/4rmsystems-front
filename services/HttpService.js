import Axios from "axios";

const defaultConfig = {
    // baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        "Content-Type": "application/json",
    }
};

const agent = Axios.create(defaultConfig);