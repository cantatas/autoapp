import Login from './login/index.vue'

const install = function(Vue) {
  Vue.component(Login.name, Button);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export {
    Login
};