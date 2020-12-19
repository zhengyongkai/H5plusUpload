import Vue from "vue";
import rightClickModel from "./rightClickModel";

function create(Component, props) {
  const vm = new Vue({
    // h是createElement, 返回VNode，是虚拟dom
    // 需要挂载才能变成真实dom
    render: h => h(Component, { props })
  }).$mount(); // 不指定宿主元素，则会创建真实dom，但是不会追加操作
  document.body.appendChild(vm.$el);
  const comp = vm.$children[0];
  comp.remove = function() {
    document.body.removeChild(vm.$el);
    vm.$destroy();
  };
  return comp;
}
export default {
  install(Vue) {
    Vue.prototype.$rightClick = function(options) {
      return create(rightClickModel, options);
    };
    Vue.directive("oncontextmenu", (el, binding) => {
      el.oncontextmenu = function(e) {
       
        const textArray = binding.value.text;
        const handlerObj = binding.value.handler;
        // 事件处理数组
        const handlerArray = [];
        // 处理好的右键菜单
        const menuList = [];
        // 将事件处理函数放入数组中
        for (const key in handlerObj) {
          handlerArray.push(handlerObj[key]);
        }
        // 追加右键菜单数据
        for (let i = 0; i < textArray.length; i++) {
          // 右键菜单对象, 添加名称
          const menuObj = {
            text: textArray[i],
            handler: handlerArray[i],
            id: i + 1
          };
          menuList.push(menuObj);
        }
        // 鼠标点的坐标
        const oX = e.clientX;
        const oY = e.clientY;
        Vue.prototype
          .$rightClick({
            left: oX + "px",
            top: oY + "px",
            list: menuList
          })
          .show();
          console.log(e)
        //  console.log(Vue.prototype.$rightClick().$el.childNodes)
        // document.body.removeChild(Vue.prototype.$rightClick().$el.childNode[0].$el);
        return false;
      };
    });
  }
};
