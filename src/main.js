import { createApp } from 'vue';
import App from './App.vue';

import './assets/main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '@/assets/stars.css'


AOS.init({
  duration: 800,
  once: false,
  mirror: true,
  offset: 120,
  easing: 'ease-in-out'
});


createApp(App).mount('#app');