// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import "vant/lib/index.css";
import store from "./store/index.js";
import create from "./components/toast/index";

import initmqtt from "./utils/initMqtt";
import * as echarts from 'echarts';
import VideoPlayer from 'vue-video-player'
import moment from 'moment'//导入文件
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.prototype.$moment = moment;//赋值使用

moment.locale('zh-cn');//需要汉化
Vue.use(VideoPlayer)
Vue.prototype.$echarts = echarts;
Vue.use(create);
import message from "./components/message/index";
Vue.use(message);
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
