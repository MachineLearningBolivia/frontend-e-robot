import { createRouter, createWebHistory } from "vue-router";

import Catalogo from "/src/templates/Catalogo.vue";
import Producto from "/src/views/catalogo/Producto.vue";

import Inicio from "/src/views/catalogo/Inicio.vue"
import Inicioo from "/src/views/Inicioo.vue";
import AboutUs from "/src/views/AboutUs.vue";

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
    {
      path: "/inicioo",
      component: Inicioo
    },
    {
      path: "/aboutus",
      component: AboutUs
    },
    { path: "/", redirect: "/catalogo" },
    { path: "/:pathMatch(.*)*", redirect: "/catalogo" }, // Redirigir cualquier ruta no válida a /catalogo
  ],
});

export default router;
