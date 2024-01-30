<script>
  export default{
    name: "VideoSection"
  };

</script>

<template>
  <section id="division" class="pt-10 pb-10 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-center mb-8 text-3xl font-bold text-orange-500">Explora nuestros servicios</h2>
      <div class="flex flex-wrap justify-center mt-5">

        <video class="w-11/12 h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoplay muted>
          <source src="../assets/E-robot-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

      </div>
    </div>
  </section>
</template>

<style scoped>

</style>