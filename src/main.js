import Wind from '@/presets/wind';
import { defaultConfig, plugin } from '@formkit/vue';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
import Tooltip from 'primevue/tooltip';
import { createApp } from 'vue';
import config from '../formkit.config.js';
import App from './App.vue';
import './assets/main.css';
import './assets/tailwind.css';
import router from './router';




createApp(App).use(router).use(PrimeVue, { ripple: true, unstyled: true, pt: Wind }).use(plugin, defaultConfig(config)).directive('tooltip', Tooltip).mount('#app')


