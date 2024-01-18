import "./style.css";
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Usar el router en la aplicación
app.use(router);

// Montar la aplicación en el elemento con id 'app'
app.mount('#app');
