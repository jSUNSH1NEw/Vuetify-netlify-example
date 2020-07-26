import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import Blog from "./components/Blog.vue";
import Giveme from "./components/Giveme.vue";

 
Vue.use(Router);
 
export default new Router({
  // get rid of the hash (#) in Url
  // the hash (#) helps the page not to be reloaded when the URL changes
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/giveme',
      name: 'giveme',
      component: Giveme
    }
  ]
});