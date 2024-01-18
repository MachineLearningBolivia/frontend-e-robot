import { createRouter, createWebHistory } from "vue-router";

import Catalogo from "/src/templates/Catalogo.vue";
import Producto from "/src/views/catalogo/Producto.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/catalogo",
      component: Catalogo,
    },
    {
      path: "/producto/:id", // Utilizamos un parámetro dinámico para el ID del producto
      name: "producto",
      component: Producto,
    },
    { path: "/", redirect: "/catalogo" },
    { path: "/:pathMatch(.*)*", redirect: "/catalogo" }, // Redirigir cualquier ruta no válida a /catalogo
  ],
});

export default router;
