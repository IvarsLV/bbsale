import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store'; 
import i18n from './i18n';
import './assets/css/style.css';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store);
app.mount('#app');