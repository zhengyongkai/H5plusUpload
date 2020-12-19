// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import mqtt from "mqtt";
import "vant/lib/index.css";
import store from "./store/index.js";
import create from "./components/toast/index";
import initmqtt from './utils/initMqtt'
Vue.use(create);
Vue.prototype.$mqtt = mqtt;
Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();
Vue.directive("focus", {
  inserted(el) {
    // Focus the element
    console.log(el);
    el.focus();
  }
});
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
