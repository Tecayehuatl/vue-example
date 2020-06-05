import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.prototype.$http = Axios;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
