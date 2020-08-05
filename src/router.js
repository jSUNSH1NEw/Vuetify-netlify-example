import Vue from "vue";
import Router from "vue-router";
import Home from "./Layout/Pages/Home.vue";
import Blog from "./Layout/Pages/Blog.vue";
import Giveme from "./Layout/Pages/Giveme.vue";
import CodingMenu from "./Layout/Pages/Children/Coding.vue";
import NetlifyWork from "./Layout/Pages/Children/Netlify.vue";
 
Vue.use(Router);
 
export default new Router({
  // get rid of the hash (#) in Url
  // the hash (#) helps the page not to be reloaded when the URL changes
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/coding-menu',
      name: 'Coding',
      component: CodingMenu,
      chidllinks:[
            {
              id:0,
              path: '/coding-menu-netlify',
              name: 'Netlify',
              component: NetlifyWork
            },
            {
              id:1,
              path: '/coding-menu-codepen',
              name: 'Codepen',
              component: NetlifyWork
            }
          ]

    },

    {
      path: '/giveme',
      name: 'giveme',
      component: Giveme
    }
  ]
});