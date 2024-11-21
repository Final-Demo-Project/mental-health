import { apiClient } from "./config";

export const apiGetProducts = async () => 
    apiClient.get("/educationals");

export const apiGetUserProducts = async () => 
    apiClient.get("/users/me/educationals");

export const apiAddProduct = async (payload) => 
    apiClient.post("/educationals", payload);

export const apiGetSingleProduct = async (id) => {
    const cntn = await apiClient.get(`/educationals/${id}`);
    return cntn;


};
