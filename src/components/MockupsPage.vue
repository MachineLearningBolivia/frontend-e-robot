<template>
  <section id="cursos" class="bg-gray-150 flex justify-center ">
    <div class="container w-full ">
      <h2 class="text-center mb-4 text-4xl font-extrabold text-orange-500">ALGUNOS DE NUESTROS CURSOS</h2>
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
          :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
          :pagination="true"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
          id="mySlider"
      >
        <swiper-slide
            v-for="slide in mockups"
            :key="slide.id"
        class="border-2 border-black rounded-xl">
          <img class="rounded-xl" :src="slide.imageSrc" alt=""/>
        </swiper-slide>
      </swiper>
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
import 'swiper/css/navigation';
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

export default {
  name: 'MockupsPage',
  components:{
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay,EffectCoverflow,Pagination, Navigation],
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

  width: 100%;
  height: 100%;
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

#mySlider .swiper-button-prev,
#mySlider .swiper-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  --swiper-navigation-size: 60px;
}


</style>

