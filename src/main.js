import App from './App.vue';
import router from './router/index';
import store from './store/index.js';
import { createApp } from 'vue';
import './style.css';
import './index.css';

const app = createApp(App);
app.use(store).use(router).mount('#app');
