<template>
  <section id="mockups" class="pt-5 pb-5 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-center mb-4 text-3xl font-bold text-orange-500">Algunos de nuestros cursos</h2>
      <vueper-slides
          ref="myVueperSlides"
          autoplay
          :pause-on-hover="pauseOnHover"
          @autoplay-pause="internalAutoPlaying = false"
          @autoplay-resume="internalAutoPlaying = true">
        <vueper-slide v-for="slide in mockups"
                      :key="slide.id"
                      :image="slide.imageSrc"
        >
        </vueper-slide>
      </vueper-slides>
      <!--
      <div class="flex justify-center mt-3">
        <a href="https://www.figma.com/file/vKPXFYGaHc3PaVPHvje35N/MockupsRommos?type=design&node-id=0-1&mode=design&t=WnoEYYuApfYvs3Zk-0" class="docs-link" target="_blank">Explora nuestros Mockups</a>
      </div>
      -->
    </div>
  </section>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import envolvedoraImage from "../assets/curso1.jpg";
import tripodeImage from "../assets/curso2.jpg";
import termoformadoraImage from "../assets/curso3.jpg";
import cncImage from "../assets/curso4.jpg";

export default {
  name: 'MockupsPage',
  components:{
    VueperSlide,
    VueperSlides,
  },
  data() {
    return {
      mockups: [
        {
          imageSrc: envolvedoraImage,
          imageAlt: "Mockup 1",
        },
        {
          imageSrc: tripodeImage,
          imageAlt: "Mockup 2",
        },
        {
          imageSrc: termoformadoraImage,
          imageAlt: "Mockup 3",
        },
        {
          imageSrc: cncImage,
          imageAlt: "Mockup 4",
        },
      ],
    };
  },
};
</script>

<style>
.vueperslides__arrow {
  color: black;
  font-weight: bold;
}
</style>

