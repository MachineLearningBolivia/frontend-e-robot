import { createRouter, createWebHistory } from "vue-router";

import Catalogo from "/src/templates/Catalogo.vue";
import Inicio from "/src/views/catalogo/Inicio.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/catalogo",
      component: Catalogo,
      children: [
        {
          path: "inicio",
          component: Inicio,
        },
        // Configuración
      ],
    },
    { path: "/", redirect: "/catalogo" },
    //{ path: "/:pathMatch(.*)*", redirect: "/" },
  ],
});
export default router;
