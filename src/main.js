import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js")
import "./assets/css/portal.css";
import "./assets/js/app.js";
createApp(App).use(store).use(router).mount('#app')
