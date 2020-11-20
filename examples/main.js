import Vue from "vue";
import App from "./App.vue";

import FView from "../src/index.js";

Vue.use(FView);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
