<template>
  <section id="descripcion" class="bg-gray-100 py-16">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2 mb-4 md:mb-0">
          <h1 class="text-4xl font-bold text-orange-500 leading-tight">{{ title }}</h1>
        </div>
        <div class="md:w-1/2">
          <p class="text-lg text-gray-700">{{ description }}</p>
        </div>
      </div>
      <div class="pt-8">
        <h1 class="text-3xl font-bold text-center">{{ subHeader }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Machine learning",
      description:
        "Se establece como un emprendimiento boliviano dedicado a brindar asesoramiento profesional en diversas áreas empresariales. Brindar asistencia integral y personalizada a todos nuestros clientes, mediante servicios de consultoría, asesoría y capacitación, con el fin de contribuir en la oportuna toma de decisiones. Se compromete a promover la cultura de valores profesionales en sus clientes.",
    };
  },
};
</script>
