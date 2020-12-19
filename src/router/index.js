import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import GoodLIst from "@/components/GoodList";
import BetterGoodLIst from '@/components/BetterGoodLIst'
import dataTrans from "@/components/dataTrans";
import rightClickArea from '@/components/toast/rightClickArea.vue'
import mqttConnect from '@/components/mqttText/mqttConnect.vue'
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
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
    }
  ]
});
