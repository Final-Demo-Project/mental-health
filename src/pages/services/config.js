import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL

const token = localStorage.getItem("token")

if(token) {
    axios.defaults.headers.common["Authorization"] = `Bearern ${token}`
}

export const apiClient = axios.create({
    baseURL:baseUrl,
});

console.log('ba', baseUrl)