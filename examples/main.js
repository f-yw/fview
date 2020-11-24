import Vue from "vue";
import App from "./App.vue";

import router from "./router";

import FView from "../src/index.js";
import "../packages/FThemeChalk/src/index.scss";

import "normalize.css";

Vue.use(FView);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
