import axios from "axios";

const baseurl = "http://localhost:3000";

export const loginRequest = (user) => {
    const config = {
        headers: {
            "Content-type": "application/json",
        },
    };
    return axios.get(baseurl + "/login", config);
}
