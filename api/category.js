import axios from "./axios";

export const getCategoriesRequest = () => axios.get("/categories");

export const getCategoryRequest = (id) => axios.get("/categories/" + id);

