import { createRouter, createWebHistory } from 'vue-router'
import ViewPageNotFound from "../view/ViewPageNotFound.vue"
import ViewHomePage from "../view/ViewHomePage.vue"
import ViewDimondPage from "../view/ViewDimondPage.vue"
import ViewRecordPage from "../view/ViewRecordPage.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: "/",
        name: "Home",
        component: ViewHomePage
    },
    {
      path: "/dimond",
      name: "Diamond",
      component: ViewDimondPage
    },
    {
      path: "/record",
      name: "Record",
      component:ViewRecordPage
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: ViewPageNotFound
    }
  ]
})

export default router
