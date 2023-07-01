import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { initializeApp } from 'firebase/app';
import { auth, db } from './firebaseConfig';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');