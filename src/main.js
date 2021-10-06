import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Vuelidate from "vuelidate"
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(Vuelidate)
app.mount("#app")
