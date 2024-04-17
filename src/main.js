import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'particlesjs'

import './assets/style.css'

window.onload = function () {
  Particles.init({
    selector:'.background',
    color:['#D08F5A','#2C2E32','#3E556D'],
    sizeVariations:'5',
    connectParticles:'',
  });
};

createApp(App).mount('#app')

