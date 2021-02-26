import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "@/routes";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
