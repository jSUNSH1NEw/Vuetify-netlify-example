import Vue from "vue";
import Router from "vue-router";
import CustomersList from "./components/CustomersList.vue";
import AddCustomer from "./components/AddCustomer.vue";
import SearchCustomers from "./components/SearchCustomers.vue";
 
Vue.use(Router);
 
export default new Router({
  // get rid of the hash (#) in Url
  // the hash (#) helps the page not to be reloaded when the URL changes
  mode: "history",
  routes: [
    {
      path: "/",
      name: "customers",
      alias: "/customer", // go '/', the URL remains '/', but it wcill be matched if visiting '/customer'
      component: CustomersList
    },
    {
      path: "/add",
      name: "add",
      component: AddCustomer
    },
    {
      path: "/search",
      name: "search",
      component: SearchCustomers
    }
  ]
});