import axios from "./axios";

export const getProduct = () => axios.get("/products");
export const getOneProduct = (productId) => {
  // Construir la URL de la solicitud GET con el ID del producto
  const url = `/products/${productId}`;

  // Realizar la solicitud GET usando axios
  return axios.get(url);
};
