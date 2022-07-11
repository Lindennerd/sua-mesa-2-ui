import { getAuth, onAuthStateChanged } from "@firebase/auth";
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(getAuth(), user => {
      removeListener();
      resolve(user);
    })
  });
}

router.beforeEach(async (to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(await getCurrentUser()) {
      next();
    } else {
      next("/login");
    }
  } 
  else {
    next();
  }
})

export default router;
