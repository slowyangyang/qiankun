import Vue from 'vue';
import Router from 'vue-router';
import HomeView from '../views/homeView';

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: window.__POWERED_BY_QIANKUN__ ? '/micro-user/' : '/',
  routes: [
    {
      path: '/',
      redirect: { name: 'SubscriptionComponent' },
    },
    {
      path: '/SubscriptionComponent',
      name: 'SubscriptionComponent',
      component: HomeView,
      meta: { title: '首页' },
    },
  ],
});
