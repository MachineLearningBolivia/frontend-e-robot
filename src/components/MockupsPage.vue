<template>
  <section id="mockups" class="pt-5 pb-5 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-center mb-4 text-3xl font-bold text-orange-500">Algunos de nuestros diseños</h2>
      <div class="flex flex-wrap justify-center">
        <div v-for="(mockup, index) in mockups" :key="index" class="w-full md:w-1/4 p-4">
          <img :src="mockup.imageSrc" :alt="mockup.imageAlt" class="w-full h-82 object-cover" />
        </div>
      </div>
      <!--
      <div class="flex justify-center mt-3">
        <a href="https://www.figma.com/file/vKPXFYGaHc3PaVPHvje35N/MockupsRommos?type=design&node-id=0-1&mode=design&t=WnoEYYuApfYvs3Zk-0" class="docs-link" target="_blank">Explora nuestros Mockups</a>
      </div>
      -->
    </div>
  </section>
</template>

<script>
import envolvedoraImage from "../assets/envolvedora.jpg";
import tripodeImage from "../assets/tripode.jpg";
import termoformadoraImage from "../assets/termoformadora.jpg";
import cncImage from "../assets/cnc.jpg";

export default {
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

