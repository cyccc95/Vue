import ListComponent from "@/components/ListComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/list",
    component: ListComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
