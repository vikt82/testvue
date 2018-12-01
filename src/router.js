import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

// Page
import Main from './views/AppMain'
import AboutUs from './views/AppAboutUs'
import ContactUs from './views/AppContactUs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/about-us',
      name: 'about',
      component: AboutUs
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: ContactUs
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ],
  mode: 'history'
})
