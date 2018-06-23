import Vue from 'vue'
import Router from 'vue-router'
import TreePosts from "../pages/TreePosts"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: TreePosts
    }
  ]
})
