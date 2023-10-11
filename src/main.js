import 'bootstrap/dist/css/bootstrap.css'; // BOOTSTRAP
import router from './router/router'; // VUE-ROUTER

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.use(router);

app.mount('#app');