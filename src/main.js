import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import axios from 'axios'
import router from "./router"
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'


// axios.defaults.baseURL = 'http://127.0.0.1:8000'

axios.defaults.baseURL = 'https://recipeappdjangobackend-production.up.railway.app'

createApp(App).use(store).use(router, axios).mount("#app");
