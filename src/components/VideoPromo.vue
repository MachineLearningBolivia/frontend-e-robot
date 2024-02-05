<script>
  export default{
    name: "VideoSection"
  };

</script>

<template>
  <section id="servicios" class="pt-10 pb-10 bg-[#004f91]">
    <div class="container mx-auto">
      <h2 class="ti text-center mb-8 text-4xl font-extrabold text-white">EXPLORA NUESTROS SERVICIOS</h2>
      <div class="flex flex-wrap justify-center mt-5">

        <video class="w-11/12 h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoplay muted loop>
          <source src="../assets/E-robot-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  </section>
</template>

<style scoped>
.ti {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>