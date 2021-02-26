import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    // {
    //   path: "/login",
    //   redirect: "/"
    // },
    {
      path: "/login",
      component: () => import("@/views/LoginPage")
    },
    {
      path: "/signup",
      component: () => import("@/views/SignupPage")
    },
    {
      path: "/main",
      component: () => import("@/views/MainPage")
    },
    {
      path: "*",
      component: () => import("@/views/PageNotFound")
    }
  ]
});

export default router;
