import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import GoodLIst from "@/components/GoodList";
import BetterGoodLIst from '@/components/BetterGoodLIst.vue'
import dataTrans from "@/components/dataTrans";
import rightClickArea from '@/components/toast/rightClickArea.vue'
import mqttConnect from '@/components/mqttText/mqttConnect.vue'
import panel1 from '@/components/echartsText/panel1.vue'
import vueRtmp from '@/components/vue-rtmp/vue-rtmp.vue'
import mqttCharts from '@/components/mqttCharts/mqttCharts.vue'
import chartsScroll from '@/components/mqttCharts/chartsScroll.vue'
import messageText from '@/components/message/messageText.vue'
import h5upload from '@/components/h5upload/h5upload.vue'
Vue.use(Router);



export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/h5upload",
      name: "h5upload",
      component: h5upload
    },
    {
      path: "/GoodLIst",
      name: "GoodLIst",
      component: GoodLIst
    },
    {
      path: "/dataTrans",
      name: "dataTrans",
      component: dataTrans
    },
    {
      path: '/goodLIst',
      name: 'GoodLIst',
      component: GoodLIst
    },
    {
      path: '/betterGoodLIst',
      name: 'BetterGoodLIst',
      component: BetterGoodLIst
    },
    {
      path: '/rightClickArea',
      name: 'rightClickArea',
      component: rightClickArea
    },
    {
      path: '/mqttText',
      name: 'mqttText',
      component: mqttConnect
    },
    {
      path: '/panel1',
      name: 'panel1',
      component: panel1
    },
    {
      path: '/vue-rtmp',
      name: 'vue-rtmp',
      component: vueRtmp
    },
    {
      path: '/mqttCharts',
      name: 'mqttCharts',
      component: mqttCharts
    },
    {
      path: '/chartsScroll',
      name: 'chartsScroll',
      component: chartsScroll
    },
    {
      path: '/message',
      name: 'message',
      component: messageText
    }
  ]
});
