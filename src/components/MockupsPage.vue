<template>
  <section id="mockups" class="pt-5 pb-5 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-center mb-4 text-3xl font-bold text-orange-500">Algunos de nuestros cursos</h2>
      <swiper
          :effect="'coverflow'"
          :grabCursor="true"
          :centeredSlides="true"
          :slidesPerView="'auto'"
          :coverflowEffect="{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
          :pagination="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide
            v-for="slide in mockups"
            :key="slide.id">
          <img :src="slide.imageSrc" alt=""/>
        </swiper-slide>
      </swiper>
      <!--<vueper-slides
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
      </vueper-slides>-->
      <!--
      <div class="flex justify-center mt-3">
        <a href="https://www.figma.com/file/vKPXFYGaHc3PaVPHvje35N/MockupsRommos?type=design&node-id=0-1&mode=design&t=WnoEYYuApfYvs3Zk-0" class="docs-link" target="_blank">Explora nuestros Mockups</a>
      </div>
      -->
    </div>
  </section>
</template>

<script>

import envolvedoraImage from "../assets/curso1.jpg";
import tripodeImage from "../assets/curso2.jpg";
import termoformadoraImage from "../assets/curso3.jpg";
import cncImage from "../assets/curso4.jpg";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default {
  name: 'MockupsPage',
  components:{
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [EffectCoverflow,Pagination],
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
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 400px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

</style>

