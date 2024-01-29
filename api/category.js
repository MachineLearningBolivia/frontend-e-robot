import axios from "./axios";

export const getCategoriesRequest = () => axios.get("/client/categories");

export const getCategoryRequest = (id) => axios.get("/client/categories/" + id);

