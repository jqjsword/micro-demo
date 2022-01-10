import { createRouter, createWebHistory } from "vue-router";
import MyPage from "@/micro/MyPage.vue";
import MainHome from "@/components/MainHome.vue";
import AppFocus from "@/micro/AppFocus.vue";

const routes: any = [
  {
    path: "/",
    name: "home",
    component: MainHome,
  },

  {
    path: "/my-page/:page*",
    name: "my-page",
    component: MyPage,
  },

  {
    path: "/my-focus/:focus*",
    name: "focus",
    component: AppFocus,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
