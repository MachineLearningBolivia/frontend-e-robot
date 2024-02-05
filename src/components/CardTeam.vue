<template>
  <div class="grid grid-cols-2 w-max gap-10 pt-8">
    <div v-for="person in personal" class="flex flex-col pt-4 w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img class="place-self-center rounded-md w-72 h-auto" :src="person.imageSrc" alt="" />
      <div class="flex flex-col p-5">
        <h5 class="titlee mb-2 place-self-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{person.namePerson}}</h5>
        <div class="flex gap-3 justify-center">
          <v-icon name="io-mail" class="text-white"/>
          <p class="titlee mb-3 font-normal text-gray-700 dark:text-gray-400">{{person.cellphone}}</p>
        </div>
        <div class="flex gap-3 justify-center">
          <v-icon name="io-phone-portrait" class="text-white"/>
          <p class="titlee mb-3 font-normal text-gray-700 dark:text-gray-400">{{person.email}}</p>
        </div>
      </div>
    </div>
  </div>
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
          namePerson: 'Juan Juan Juan',
          cellphone: '66666666',
          email: 'abcdef@gmail.com'
        },
        {
          imageSrc: foto1,
          namePerson: 'nombre1',
          cellphone: '66666666',
          email: 'abcdef@gmail.com'
        },
        {
          imageSrc: foto1,
          namePerson: 'nombre1',
          cellphone: '66666666',
          email: 'abcdef@gmail.com'
        },
        {
          imageSrc: foto1,
          namePerson: 'nombre1',
          cellphone: '66666666',
          email: 'abcdef@gmail.com'
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
