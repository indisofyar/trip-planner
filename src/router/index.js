import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/get-started",
    name: "get-started",
    component: () =>
      import("../views/GettingStarted.vue"),
  },
  {
    path: "/plan-trip",
    name: "plan-trip",
    component: () =>
      import("../views/PlanTrip.vue"),
  },
  {
    path: "/plan-trip/1",
    name: "plan-trip-1",
    component: () =>
      import("../views/TripQuiz.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/Login.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () =>
      import("../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
