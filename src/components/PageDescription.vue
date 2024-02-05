<template>
  <section id="descripcion" class="bg-[#001120] py-16 content-center">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <h1 class="title text-6xl font-extrabold leading-tight">{{ title }}</h1>
        </div>
        <div class="md:w-1/2 content-center">
          <p class="lead description text-lg font-semibold">{{ description }}</p>
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

<style scoped>
.title {
  font-weight: bold;
  color: white; 
  text-align: justify;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.description {
  text-align: justify;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>