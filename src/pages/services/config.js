import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem("token")

if(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

export const apiClient = axios.create({
    baseURL:baseUrl,
});

export const getUserProfile = async () => {
    const token = localStorage.getItem("token")
    const  response = await axios.get('https://mental-health-api-ur3r.onrender.com/users/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data
}

// console.log('ba', baseUrl)