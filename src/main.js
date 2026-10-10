import '@/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')
