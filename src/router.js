import Vue from 'vue';
import Router from 'vue-router';

import login from './pages/login.vue';
import startPage from './pages/startPage.vue';
import main from './pages/main.vue';
import register from './pages/register.vue';
import retrieve from './pages/retrievePwd.vue';

Vue.use(Router);

const defRoutes = {
  path: '/',
  redirect: '/login',
}

const routes = [ {
  path: '/start-page',
  name: 'start-page',
  component: startPage,
  meta: {
    name: '启动页',
    id: '01',
    pageId : ''
  }
}, {
  path: '/login',
  name: 'login',
  component: login,
  meta: {
    name: '登录页',
    id: '02',
    pageId : '5fbfcdc4cc2e24483ec3356e'
  }
}, 
{
  path: '/main',
  name: 'main',
  component: main,
  meta: {
    name: '主页面',
    id: '03',
    pageId : '5fbfcdc4cc2e24483ec3356e'
  }
}, 
{
  path: '/register',
  name: 'register',
  component: register,
  meta: {
    name: '注册',
    id: '04',
    pageId : ''
  }
},
{
  path: '/retrieve',
  name: 'retrieve',
  component: retrieve,
  meta: {
    name: '忘记密码',
    id: '05',
    pageId : ''
  }
}
]
sessionStorage.setItem('beautify-page-list', JSON.stringify(routes));
routes.unshift(defRoutes)
const router = new Router({
  routes
})


export default router;