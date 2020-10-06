import Vue from "vue";

import Step1 from "./components/Step1.vue";
import Step2 from "./components/Step2.vue";
import Step3 from "./components/Step3.vue";
import Step5 from "./components/Step5.vue";
import Step6 from "./components/Step6.vue";
import Step7 from "./components/Step7.vue";
import NotFound from "./components/NotFound.vue";

import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", name: "Step1", component: Step1 },
    { path: "/step2", name: "Step2", component: Step2 },
    { path: "/step3", name: "Step3", component: Step3 },
    { path: "/step5", name: "Step5", component: Step5 },
    { path: "/step6", name: "Step6", component: Step6 },
    { path: "/step7", name: "Step7", component: Step7 },
    { path: "*", name: "NotFound", component: NotFound },
  ],
});
