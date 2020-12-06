import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/reset.css';
import './assets/less/base.less';
import './assets/fonts/iconfont.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
