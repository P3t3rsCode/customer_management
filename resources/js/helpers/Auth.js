import Axios from "axios";

export function login(credentials) {
    return new Promise(async (res, rej) => {
        try {
            let response = await axios.post("/api/auth/login", credentials);
            console.log(response);
            if (response.data) res(response.data);
            else rej("Wrong email or password");
        } catch (err) {
            rej("Wrong email or password");
        }
    });
}

export function getLocalUser() {
    const user_string = localStorage.getItem("user");

    if (!user_string) {
        return null;
    } else {
        return JSON.parse(user_string);
    }
}
