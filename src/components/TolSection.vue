<template>
  <section id="otros" class="pt-10 pb-10 bg-gray-100 justify-center">
    <div class="container mx-auto">
      <h2 class="tit text-center mb-8 text-4xl font-extrabold text-[#004d85]">TAMBIÉN TE PUEDE INTERESAR</h2>
      <div class="flex flex-wrap justify-around mt-5">
        <div v-for="card in cards" :key="card.id" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-8">
          <div class="card-wrapper" @mouseover="toggleOverlay(card.id)" @mouseleave="toggleOverlay(card.id)">
            <div class="card mb-4">
              <div class="img-wrapper relative overflow-hidden">
                <img :src="card.imageSrc" :alt="card.imageAlt" class="w-full h-82 object-cover rounded" />
                <div v-show="card.hovered" class="img-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded"></div>
                <div class="card-hover-text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                  <p>{{ card.hoverText }}</p>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text text-2xl font-bold text-center">{{ card.description }}</p>
              </div>
            </div>
          </div>
          <!-- Nuevo boton con hipervínculo debajo de cada tarjeta -->
          <div class="text-center mt-2">
            <button @click="redirectToPage(card.id)"
                    class="tit transition duration-500 ease-in-out bg-gray-800 hover:bg-[#061249] transform hover:-translate-y-1 hover:scale-110
                    text-white shadow-xl w-32 h-16 rounded-lg text-center font-bold">
              Nuestro Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import drimecImage from "../assets/drimecr.png";
import eRobotImage from "../assets/E-ROBOT-removebg.png";
import machineImage from "../assets/machinelearning.jpg"
export default {
  data() {
    return {
      cards: [
        {
          id: 1,
          imageSrc: drimecImage,
          imageAlt: "Image 1",
          description: "Drimec",
          hoverText: "Consruccion y diseño maquinas industriales",
          hovered: false,
        },
        {
          id: 2,
          imageSrc: machineImage,
          imageAlt: "Image 3",
          description: "Machine Learning",
          hoverText: "Asesorías y capacitaciones en cálculo estructural, diseño mecánico, diseño de maquinaria, estructuras metálicas, diseño electrónico, mecatrónico y prototipado.",
          hovered: false,
        },
      ],
    };
  },
  methods: {
    toggleOverlay(cardId) {
      this.cards.forEach((card) => {
        card.hovered = card.id === cardId;
      });
    },
    redirectToPage(cardId){
      if (cardId == 1){
        window.open("https://www.facebook.com/profile.php?id=100083152845774&sk=about", '_blank')
      }
      if (cardId == 2){
        window.open("https://www.facebook.com/MACHINELEARNINGBOLIVIA", '_blank')
      }
    }
  },
};
</script>

<style scoped>
/* Estilos de imagen y overlay */
.custom-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.img-wrapper {
  position: relative;
  overflow: hidden;
}

.img-overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  border-radius: 40px;
  transition: opacity 0.3s ease;
}

.card-wrapper:hover .img-overlay {
  opacity: 1;
}

.card-hover-text {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.card-wrapper:hover .card-hover-text {
  display: block;
}

.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
}

.card-body {
  padding: 10px;
}

.card-text {
  color: #000000;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.bigger-text {
  font-size: 24px;
  color: rgb(240, 98, 4);
  font-weight: bold;
}

/* Nuevo estilo para el enlace de la documentación */
.docs-link {
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
}

.docs-link:hover {
  color: orange; /* Cambia a naranja al pasar el ratón */
}

.tools-title {
  color: orange;
  font-weight: bold;
}

.tit {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

</style>