<template>
  <body>
    <CoverImage />
    <PageDescription />
    <br><br><br><br>
    <MockupsPage />
    <VideoPromo />
    <TolSection />
  </body>
  <Footer></Footer>
</template>

<script>
import PageDescription from '../components/PageDescription.vue';
import Footer from '../components/Footer.vue'
import CoverImage from '../components/CoverImage.vue'
import MockupsPage from '../components/MockupsPage.vue'
import TolSection from '../components/TolSection.vue'
import VideoPromo from "../components/VideoPromo.vue";
export default {
  name: "Inicioo",
  components: {
    VideoPromo,
    PageDescription,
    Footer,
    CoverImage,
    MockupsPage,
    TolSection
  },
};
</script>

<style>
body {
  padding-top: 0;
}
body::-webkit-scrollbar {
  width: 8px; /* Ancho del scroll */
}

body::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del scroll */
}

body::-webkit-scrollbar-thumb:hover {
  background-color: #555; /* Color del scroll al pasar el cursor sobre él */
}
</style>