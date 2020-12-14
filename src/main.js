import Vue from 'vue'
import App from './App.vue'
import router from './router';

import './assets/css/reset.css';
import './assets/less/base.less';
import './assets/fonts/iconfont.css';
import rootMixins from '@/commons/mixins/root.js';

Vue.config.productionTip = false

new Vue({
  mixins: [rootMixins],
  render: h => h(App),
  router,
}).$mount('#app')
