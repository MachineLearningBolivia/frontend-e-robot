<template>
  <section id="informacion">
    <footer class="bg-[#001120] py-5 text-white">
      <div class="container mx-auto flex items-center">
        <!-- Logo a la izquierda -->
        <div class="w-1/5">
          <img src="../assets/titulo robot.png" alt="Logo" class="w-full h-auto" />
        </div>
        <div class="w-4/5">
          <div class="text-center">
            <!-- Texto genérico -->
            <p class="mb-2">&copy; 2023 E-ROBOT. Todos los derechos reservados.</p>
            <!-- <p class="mb-2">Términos de Servicio | Política de Privacidad</p> -->
          </div>
        </div>
        <div class="flex space-x-4">
  <a href="https://www.tiktok.com/@e_robot001?_t=8jHKW3KaJOf&_r=1" class="hover:text-blue-500">
    <v-icon name="io-logo-tiktok"/>
  </a>
  <a href="https://www.facebook.com/EROBOTBOLIVIA/" class="hover:text-blue-500">
    <v-icon name="io-logo-facebook"/>
  </a>
  <a href="https://maps.app.goo.gl/AkSvv3hPzySWQ2879" class="hover:text-red-600">
    <v-icon name="io-location-sharp"/>
  </a>
</div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "FooterSection", // Cambié el nombre a "FooterSection"
};
</script>

<style>
.footer {
  background-color: #333;
  padding: 20px 0;
  color: #fff;
}

.footer .container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer .row {
  display: flex;
  align-items: center;
}

.footer-logo {
  max-width: 100%;
  height: auto;
}

.footer-section {
  text-align: center;
}

.footer-text {
  margin: 5px 0;
  font-size: 14px;
}

.footer-text a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-text a:hover {
  color: #bbb;
}
</style>
