import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    redirect: { name: "lobby" },
  },
  {
    path: "/auth",
    component: () => import("../layout/AuthPage.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../view/login.vue"),
      },
    ],
  },
  {
    path: "/main",
    name: "main",
    component: () => import("../layout/MainPage.vue"),
    meta: {},
    children: [
      {
        path: "lobby",
        name: "lobby",
        component: () => import("../view/Home.vue"),
      },
      {
        path: "join",
        name: "join",
        component: () => import("../view/join.vue"),
      },
    ],
  },
];
export default createRouter({
  history: createWebHashHistory(),
  routes,
});
