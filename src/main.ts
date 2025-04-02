import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Draggable from 'vuedraggable'
const app = createApp(App)

app.component('Draggable',Draggable)

app.mount('#app')