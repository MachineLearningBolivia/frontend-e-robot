<template>
  <nav :class="{ 'bg-transparent': isTransparent, 'bg-white': !isTransparent }" class="sticky top-0 z-50 h-20 flex items-center justify-between">
    <div class="flex items-center">
      <img src="../assets/E-ROBOT-removebg.png" alt="Logo" class="h-16 mr-60" />
    </div>
    <router-link to="/" @click="toggleWordsnt" class="text-[#004f91] hover:text-blue-500">
      <v-icon name="io-storefront" scale="1.7"/>
    </router-link>
    <div class="flex items-center justify-between w-60">
      <span @click="toggleWords" class="text-[#004f91] cursor-pointer">
        <router-link to="/inicioo"  class="hover:text-blue-500"><v-icon name="io-home" href="#portada" scale="1.7"/> </router-link>
      </span>
      <transition name="fade">
        <div v-show="showWords" class="right-30 text-center justify-between">
          <a class="titul ml-1 text-[#001120] hover:text-blue-500" href="#cursos" @click="scrollTo('#cursos')">Cursos</a>
          <a class="titul ml-1 text-[#001120] hover:text-blue-500" href="#servicios" @click="scrollTo('#servicios')">Servicios</a>
          <a class="titul ml-1 text-[#001120] hover:text-blue-500" href="#otros" @click="scrollTo('#otros')">Otros</a>
          <router-link to="/aboutus" class="titul ml-1 text-[#001120] hover:text-blue-500">Sobre nosotros</router-link>
        </div>
      </transition>
      <transition name="fade">
        <div v-show="!showWords" class="right-30 text-center justify-between">
          <span class="ml-1 invisible">Cursos</span>
          <span class="ml-1 invisible">Servicios</span>
          <span class="ml-1 invisible">Otros</span>
          <span class="ml-1 invisible">Sobre Nosotros</span>
        </div>
      </transition>
    </div>
    <a href="https://wa.me/59162426763" target="_blank" class="navbar-text m-3 d-flex justify-content-end text-white">
      <v-icon name="io-logo-whatsapp" alt="WhatsApp" class="h-full mr-4 w-full justify-end text-green-700 rounded-lg" scale="1.7"/>
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
const showWords = ref(false);
const open = ref(false);
const handleScroll = () => {
  isTransparent.value = window.scrollY === 0;
};

const toggleWords = () => {
  showWords.value = true
};

const toggleWordsnt = () => {
  showWords.value = false
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
.bg-transparent { background-color: rgba(255, 255, 255, 0.5); }
.bg-white { background-color: #ffffff; }

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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.titul {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
