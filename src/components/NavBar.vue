<template>
  <nav :class="{ 'bg-transparent': isTransparent, 'bg-white': !isTransparent }" class="sticky top-0 z-50 h-20 flex items-center justify-between">
    <div class="flex items-center">
      <img src="../assets/E-ROBOT-removebg.png" alt="Logo" class="h-16 " />
    </div>
    <ul class="flex justify-around w-1/2">
      <li>
        <router-link to="/" @click="toggleWordsnt" class="text-[#004f91] hover:text-blue-500">
          <v-icon name="io-storefront" scale="1.7"/>
        </router-link>
      </li>
      <li class="">
        <router-link to="/inicioo"  class="text-[#004f91] hover:text-blue-500">
          <v-icon name="io-home" href="#portada" scale="1.7"/>
        </router-link>
        <ul class="dropdown">
          <li><a class="submenuLi titul ml-1 text-white hover:text-blue-500" href="/inicioo#cursos" @click="navigateOrScroll('/inicioo', 'cursos')">Cursos</a></li>
          <li><a class="submenuLi titul ml-1 text-white hover:text-blue-500" href="/inicioo#servicios" @click="navigateOrScroll('/inicioo', 'servicios')">Servicios</a></li>
          <li><a class="submenuLi titul ml-1 text-white hover:text-blue-500" href="/inicioo#otros" @click="navigateOrScroll('/inicioo', 'otros')">Otros</a></li>
        </ul>
      </li>
      <li>
        <router-link to="/aboutus" @click="toggleWordsnt" class="text-[#004f91] hover:text-blue-500">
          <v-icon name="io-people-circle-outline" scale="1.7"/>
        </router-link>
        <ul class="dropdown">
          <li><a class="submenuLi titul ml-1 text-white hover:text-blue-500" href="/aboutus#personal" @click="navigateOrScroll('/aboutus', 'personal')">Personal</a></li>
          <li><a class="submenuLi titul ml-1 text-white hover:text-blue-500" href="/aboutus#mapa" @click="navigateOrScroll('/aboutus', 'mapa')">Ubicación</a></li>
        </ul>
      </li>
    </ul>
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
import { RouterView, useRoute } from 'vue-router';
const route = useRoute();
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

const navigateOrScroll = (path, hash) => {
  if (route.path === path) {
    // Si ya estamos en la ruta correcta, solo hacemos el scroll
    scrollTo(hash);
  } else {
    // Si no estamos en la ruta correcta, navegamos y luego hacemos el scroll
    router.push({ path: path });

    // Esperar a que se complete la navegación y luego desplazarse
    router.afterEach(() => {
      scrollTo(hash);
    });
  }
};

const scrollTo = (hash) => {
  const targetElement = document.querySelector(hash);
  if (targetElement) {
    const offsetTop = targetElement.offsetTop;
    const offsetParent = targetElement.offsetParent;

    window.scrollTo({
      top: offsetTop - offsetParent.offsetTop,
      behavior: 'smooth',
    });
  }
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

ul {
  list-style: none;
  text-align: center;
}
ul li {
  display: inline-block;
  position: relative;
}
ul li a {
  font-weight: bold;
  display: block;
  padding: 25px 25px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
}
.submenuLi{
  display: block;
  padding: 10px 25px;
  text-decoration: none;
  text-align: center;
  font-size: 16px;
}
ul li ul.dropdown li {
  display: block;
  background: #004f91;
  margin: 1px 0px;
}
ul li ul.dropdown {
  width:auto;
  background: #ffffff;
  position: absolute;
  z-index: 999;
  display: none;
}

ul li:hover ul.dropdown{
  display: block;
}

.titul {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>
