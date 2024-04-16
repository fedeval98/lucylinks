import { createApp } from 'vue'
import App from './App.vue'
import Particles from 'particlesjs'

import './assets/style.css'

window.onload = function () {
  Particles.init({
    selector:'.background',
    color:['#D03958','#623C57','#1A2C48'],
    sizeVariations:'10',
    connectParticles:'',
  });
};

createApp(App).mount('#app')

