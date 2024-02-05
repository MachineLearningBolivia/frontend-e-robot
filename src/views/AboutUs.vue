<template>
  <div class=" flex-col pt-20">
    <div class=" flex px-24 bg-[#001120] h-20 pt-3">
      <h1 class="titlee text-4xl font-bold text-white">NUESTRO EQUIPO</h1>
    </div>
    <div class="flex justify-center">
      <div class="flex flex-col w-3/4">
        <div class="pl-36">
          <CardTeam/>
        </div>
        <div class="bg-[#001120] h-20 pt-4">
          <h1 class="titlee text-4xl font-bold text-white">NUESTRO EQUIPO</h1>
        </div>
      </div>
      <div class="flex flex-col w-full bg-[#001120]">
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


  export default{
    components: {CardTeam, ImagePlace, Footer}
  };

</script>

<style>
.titlee {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>