import axios from "./axios";

export const getProduct = () => axios.get("/client/products");
//export const postProduct = (productData) => axios.post("/products", productData);
