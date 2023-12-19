import './assets/style/global.css'
import './assets/style/style.css'
// import './index.css'
import { registerGlobalComponents } from './utils/importLayout.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)
registerGlobalComponents(app)

app.use(router)

app.mount('#app')
