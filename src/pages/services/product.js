import{ apiClient } from "./config";

export const apiGetProducts = async() => 
    apiClient.get("/contents");

export const apiGetUserProducts = async ()
apiClient.get("/users/me/contents");

export const apiAddProduct = async (payload) =>
    apiClient.post("/contents", payload);

export const apiGetSingleProduct = async(id)=>{
    const cntn = await apiClient.get(`/contents/${id}`);

    return cntn
}