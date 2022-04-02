import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVue3 from "bootstrap-vue-3";

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'
//Bootstrap install
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

//Axios install
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(VueAxios, axios)
  .mount("#app");
