import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "../layout";

export const constantRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/installation",
    children: [
      {
        path: "installation",
        name: "Installation",
        component: () => import("../pages/Installation/index"),
        meta: { title: "安装" }
      },
      {
        path: "button",
        name: "Button",
        component: () => import("../pages/Button/index"),
        meta: { title: "按钮" }
      }
    ]
  }
];

const createRouter = () =>
  new Router({
    // mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}
export default router;
