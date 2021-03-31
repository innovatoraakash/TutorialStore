import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/tutorials",
      description: "tutorials",
      component: () => import("./components/TutorialsList")
    },
    {
      path: "/tutorials/:id",
      description: "tutorial-details",
      component: () => import("./components/Tutorial")
    },
    {
      path: "/add",
      description: "add",
      component: () => import("./components/AddTutorial")
    }
  ]
});
