import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import step1 from "./pages/step1.vue";
import step2 from "./pages/step2.vue";
import "./assets/main.css";
import "./assets/tailwind.css";
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  { path: "/", component: step1 },
  { path: "/step2", component: step2 }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
});

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
