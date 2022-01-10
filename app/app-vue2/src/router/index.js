import vueRouter from "vue-router";
import Vue from "vue";

Vue.use(vueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../components/HelloWorld.vue"),
  },
];

const router = new vueRouter({
  mode: "hash",
  routes,
});

export default router;
