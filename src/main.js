import Vue from "vue";
import VueHead from "vue-head";
import App from "./App.vue";
import router from "./router/index";

import "./assets/main.css";

Vue.config.productionTip = false;
Vue.use(VueHead);

new Vue({ el: "#app", router, render: h => h(App) });
