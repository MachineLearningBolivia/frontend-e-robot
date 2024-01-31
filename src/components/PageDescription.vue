<template>
  <section id="descripcion" class="bg-orange-500 py-16 content-center">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <h1 class="text-6xl font-extrabold text-black leading-tight">{{ title }}</h1>
        </div>
        <div class="md:w-1/2 content-center">
          <p class="text-lg font-semibold text-black">{{ description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "E-ROBOT",
      description:
        "Cursos y materiales relacionados a la robótica y electrónica. Placas arduino, mini computadoras, raspberry pi, microcontroladores y software libre.",
    };
  },
};
</script>
