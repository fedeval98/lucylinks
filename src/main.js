import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'particlesjs'

import './assets/style.css'

window.onload = function () {
  Particles.init({
    selector:'.background',
    color:['#F7FBED','#F6DF93','#43D2E3'],
    sizeVariations:'10',
    connectParticles:'',
  });
};

createApp(App).mount('#app')

