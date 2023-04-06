import { createWebHistory, createRouter } from "vue-router";
import ListComponent from "@/components/ListComponent.vue";
import HomeComponent from "../components/HomeComponent.vue";
import DetailComponent from "../components/DetailComponent.vue";
import AuthorComponent from "../components/AuthorComponent.vue";
import CommentComponent from "../components/CommentComponent.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
  },
  {
    path: "/list",
    component: ListComponent,
  },
  {
    path: "/detail/:id",
    component: DetailComponent,
    children: [
      {
        path: "author",
        component: AuthorComponent,
      },
      {
        path: "comment",
        component: CommentComponent,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
