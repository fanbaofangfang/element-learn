import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import element from "./element";
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import './packages/theme-chalk/src/index.scss';
Vue.config.productionTip = false;

element.install(Vue);

Vue.use(iView);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
