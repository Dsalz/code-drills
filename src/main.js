import Vue from "vue";
import store from "@/store";
import VueHead from "vue-head";
import App from "./App.vue";
import router from "./router/index";

import "./assets/css/main.css";

Vue.config.productionTip = false;
Vue.use(VueHead);

new Vue({ el: "#app", store, router, render: h => h(App) });
