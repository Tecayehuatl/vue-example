import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import Axios from "axios";
import "./shared/material/material";
import router from "./router/app.routing";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.prototype.$http = Axios;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
