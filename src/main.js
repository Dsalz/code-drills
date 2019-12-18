import Vue from "vue";
import VueHead from "vue-head";
import App from "./App.vue";
import router from "./router/index";

import "./assets/main.css";

Vue.use(VueHead);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
