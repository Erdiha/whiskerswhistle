import Lara from '@/presets/lara';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import { createApp } from 'vue';
import App from './App.vue';
import './assets/main.css';
import './assets/tailwind.css';
import router from './router';

createApp(App).use(router).use(PrimeVue, { ripple: true, unstyled:true,pt:Lara }).mount('#app')


