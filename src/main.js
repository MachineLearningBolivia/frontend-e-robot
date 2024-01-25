import "./style.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaFlag, RiZhihuFill } from "oh-vue-icons/icons";
import * as IoIcons from "oh-vue-icons/icons/io";
const Io =Object.values({...IoIcons})
addIcons(FaFlag, RiZhihuFill, ...Io);
const app = createApp(App);
// Usar el router en la aplicación
app.use(router);
app.component("v-icon", OhVueIcon);
// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
