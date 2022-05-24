import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyBlogs from '../views/MyBlogs.vue'
import MyLogin from '../views/MyLogin.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import MyRegister from '../views/MyRegister'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },

  {
    path: '/blogs',
    name: 'Blogs',
    component: MyBlogs,
    meta: {
      title: 'Blogs',
    }
  },
  {
    path: '/login',
    name: 'login',
    component: MyLogin,
    meta: {
      title: 'MyLogin',
    }
  },
  {
    path: '/register',
    name: 'register',
    component: MyRegister,
    meta: {
      title: 'MyRegister',
    }
  },

  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: {
      title: 'Forgot Password',
    }
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {

  document.title = `${to.meta.title}| FireBlog`;
  next();

});

export default router
