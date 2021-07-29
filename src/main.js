import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from "@meforma/vue-toaster";

const vue = createApp(App)
vue
.use(Toaster)
.use(router);
// add more functionality to myV3App

// now we're ready to mount
vue.mount('#app')

// createApp(App).use(router).mount('#app')
