import { apiClient } from "./config"

export const apiSignup = async (payload) => {
    return await apiClient.post("/users/register", payload);
};

export const apiLogin = async (payload) =>{
    return await apiClient.post("/users/login", payload);
};

export const apiDelete = async (id) => {
    return await apiClient.delete(`/educationals/${id}`);
};
