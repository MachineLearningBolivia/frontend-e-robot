import axios from "./axios";

export const getProduct = () => axios.get("/client/products");
export const getOneProduct = (productId) => {
  // Construir la URL de la solicitud GET con el ID del producto
  const url = `/client/products/${productId}`;

  // Realizar la solicitud GET usando axios
  return axios.get(url);
};
