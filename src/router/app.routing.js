import Vue from "vue";
import Router from "vue-router";
import CalculatorComponent from "../components/calculator/calculator.component";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/calculator",
      name: "Calculator",
      component: CalculatorComponent,
    },
  ],
});
