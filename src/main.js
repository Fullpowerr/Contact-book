import App from './App.vue';
import router from './router/router';
import store from './store/index.js';
import { createApp } from 'vue';
import './style.css';
import './index.css';

const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
