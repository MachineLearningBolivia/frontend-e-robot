<template>
  <section class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-10 pt-8">
    <div v-for="person in personal" class="flex flex-col pt-4 w-44 md:w-80 bg-gray-800 border border-gray-200 rounded-lg shadow dark:border-gray-700 ">
      <img class="place-self-center rounded-md w-72 h-auto" :src="person.imageSrc" alt="" />
      <div class="flex flex-col p-5">
        <h5 class="titlee mb-2 text-center text-xl font-bold tracking-tight text-white">{{person.namePerson}}</h5>
        <div class="flex gap-3 justify-center">
          <v-icon name="io-phone-portrait" class="text-white"/>
          <a :href="'https://api.whatsapp.com/send?phone=' + person.cellphone + '&text=Hola,%20vengo%20de%20la%20pagina%20de%20EROBOT%20mi%20duda%20es%20la%20siguiente:'">
            <p class="titlee mb-3 font-normal text-gray-400">
            {{person.cellphone}}
            </p>
          </a>
        </div>
        <div class="flex gap-3 justify-center">
          <v-icon name="io-person" class="text-white"/>
          <p class="titlee mb-3 font-normal text-gray-400">{{person.cargo}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import foto1 from "../assets/curso1.jpg"
import foto2 from "../assets/curso2.jpg"
import foto3 from "../assets/curso3.jpg"
import foto4 from "../assets/curso4.jpg"
export default{
  name: 'CardTeam',
  data(){
    return{
      personal:[
        {
          imageSrc: foto1,
          namePerson: 'Ing. Osmar Gabriel Peñaloza Burgoa',
          cellphone: '+591 79666663',
          cargo: 'Gerente General'
        },
        {
          imageSrc: foto1,
          namePerson: 'Ing. Daniela Centellas Yucra',
          cellphone: '+591 68060853',
          cargo: 'Jefe Planta de Producción'
        },
        {
          imageSrc: foto1,
          namePerson: 'Ing. Edwin Condori Quispe',
          cellphone: '+591 78753973',
          cargo: 'Jefe de Diseño Mecánico'
        },
        {
          imageSrc: foto1,
          namePerson: 'Samuel Alejandro Aguilar Rodríguez',
          cellphone: '+591 61172951',
          cargo: 'Jefe Organización Industrial'
        }]
    }
  }
}
</script>

<style>
.titlee {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
