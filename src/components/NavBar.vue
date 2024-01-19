<template>
  <nav
    class="navbar navbar-expand-md navbar-dark bg-dark fixed top-0 w-full"
    :class="{ 'bg-transparent': isTransparent, 'bg-dark': !isTransparent }"
  >
    <a class="navbar-brand" href="#inicio">
      <img
        src="../assets/machine_learning-removebg-preview.png"
        alt="Logo"
        width="auto"
        height="40"
        class="m-3"
      />
    </a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto text-white">
        <li class="nav-item">
          <a class="nav-link" href="#inicio">Principal</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#descripcion">Descripción</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#division">Division</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#mockups">Diseños</a>
        </li>
      </ul>
    </div>
    <a
      href="https://wa.me/59162426763"
      target="_blank"
      class="navbar-text m-3 d-flex justify-content-end"
    >
      <img
        src="../assets/wasa-removed.png"
        alt="WhatsApp"
        width="auto"
        height="55"
      />
    </a>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isTransparent: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isTransparent = window.pageYOffset === 0;
    },
  },
};
</script>

<style scoped>
/* Estilo para la barra de navegación */
.navbar {
  transition: background-color 0.3s ease;
}

/* Estilo para la barra de navegación transparente */
.bg-transparent {
  background-color: transparent !important;
}

/* Estilo para el texto blanco */
.text-white {
  color: white !important;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
