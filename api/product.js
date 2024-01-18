import axios from "./axios";

export const getProduct = () => axios.get("/products");
//export const postProduct = (productData) => axios.post("/products", productData);
