import './assets/style/global.css'
import './assets/style/style.css'
// import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
