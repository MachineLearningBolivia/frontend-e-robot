<template>
  <div class=" flex-col pt-20">
    <div id="empresa" class=" flex px-24 bg-[#001120] h-20 pt-5">
      <h1 class="titlee text-2xl md:text-3xl font-bold text-white">NUESTRA EMPRESA</h1>
    </div>
    <VisionMision/>
    <div id="personal" class=" flex px-24 bg-[#001120] h-20 pt-5">
      <h1 class="titlee text-2xl md:text-3xl font-bold text-white">NUESTRO EQUIPO</h1>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-col w-3/4">
        <div class="flex justify-center">
          <CardTeam/>
        </div>
        <br>
        <div id="mapa" class="bg-[#001120] h-20 px-24 pt-5">
          <h1 class="titlee text-2xl md:text-3xl font-bold text-white">NUESTRA OFICINA</h1>
        </div>
        <div class="flex justify-center py-5">
          <GoogleMap api-key="AIzaSyBt1z9tkppo_rFO59CWpW5SUz0GYyK87JE" style="width: 500px; height: 500px; border-radius: 20px" :center="center" :zoom="20" >
            <Marker :options="{position: center}"/>
          </GoogleMap>
        </div>
      </div>
      <div class="hidden lg:flex flex-col w-1/3 bg-[#001120]">
        <ImagePlace class="place-self-center"/>
      </div>
    </div>
  </div>
  <Footer/>
</template>

<script>
  import CardTeam from "../components/CardTeam.vue";
  import ImagePlace from "../components/ImagePlace.vue";
  import Footer from "../components/Footer.vue"
  import VisionMision from "../components/VisionMision.vue";
  import { GoogleMap, Marker } from "vue3-google-map";


  export default{
    components: {CardTeam, ImagePlace, Footer, GoogleMap, Marker, VisionMision},
    setup(){
      const center = {lat: -16.503204955582962 , lng: -68.13225731779119}
      return{center}
    }
  };
</script>

<style>
.titlee {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>