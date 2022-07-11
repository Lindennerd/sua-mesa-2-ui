import { getAuth } from "@firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/MenuView.vue"),
      meta: {
        requiresAuth: true,
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const auth = getAuth();

  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = auth.currentUser;

  if (requiresAuth && !currentUser) next({ path: '/login', query: { redirect: to.fullPath } })
  else if (!requiresAuth && currentUser) next('/')
  else if (!requiresAuth && !currentUser) next()
  else next()
})

export default router;
