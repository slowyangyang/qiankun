import './public-path';
import Vue from 'vue';
import App from './App';
import router from './router';
import '@/permission';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//vue-jsonp跨域
import { VueJsonp } from 'vue-jsonp';

Vue.use(ElementUI);
Vue.use(VueJsonp);

Vue.config.productionTip = false;

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

let instance = null;

function render(props = {}) {
  const { container } = props;
  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
}
