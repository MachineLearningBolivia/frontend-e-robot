<template>
  <nav :class="{ 'bg-transparent': isTransparent, 'bg-black': !isTransparent }" class="sticky top-0 z-50 h-20 flex items-center justify-between">
    <div class="flex items-center">
      <img
        src="../src/assets/E-ROBOT-removebg.png"
        alt="Logo"
        class="h-16 mr-4"
      />
    </div>
    <router-link to="/" class="text-white"><v-icon name="io-storefront" scale="1.7"/></router-link>
    <router-link to="/inicioo" class="text-white">
      <span  ><v-icon name="io-home" scale="1.7"/></span></router-link>
    <a
        href="https://wa.me/59162426763"
        target="_blank"
        class="navbar-text m-3 d-flex justify-content-end text-white"
      >
        <v-icon
          name="io-logo-whatsapp"
          alt="WhatsApp"
          class="h-full mr-4 w-full justify-end text-green-700 rounded-lg"
          scale="1.7"
        />
      </a>
  </nav>
  <div>
    <div class="body-container">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView } from 'vue-router';

const isTransparent = ref(true);

const handleScroll = () => {
  isTransparent.value = window.scrollY === 0;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Asegúrate de que estas clases estén disponibles en tu configuración de Tailwind */
.bg-transparent { background-color: rgba(0, 0, 0, 0.5); }
.bg-black { background-color: #000; }

.color { color: #fff; }
.color2 { color: blue; }
nav {
  transition: background-color 0.3s ease-in-out;
}

/* Agregamos estilos para que el nav sea sticky y se superponga sobre el contenido */
.sticky {
  position: fixed;
  width: 100%;
  z-index: 50;
}
.body-container {
  padding-top: 0rem; /* Ajusta el padding-top según la altura de tu nav */
}

/* Estilos para el scrollbar */
body::-webkit-scrollbar {
  width: 8px; /* Ancho del scrollbar */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del scrollbar */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color del scrollbar al pasar el cursor sobre él */
}

/* Oculta el scrollbar en navegadores que lo soportan */
* {
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}
</style>
