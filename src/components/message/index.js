import Vue from "vue";
import vueMessage from "./vueMessage.vue";
function createComponents(component, props) {
  // 函数式创建一个Component
  const componet = Vue.extend({
    //render函数
    //Vue 选项中的 render 函数若存在，则 Vue 构造函数不会从 template 选项或通过 el 选项指定的挂载元素中提取出的 HTML 模板编译渲染函数。
    //render出现后不会去通过template选项
    //props 传参
    //h是createElement, 返回VNode，是虚拟dom
    render: h => h(component, { props }),
    data: function() {
      return {
        props
      };
    }
  });
  //挂载后成为真正的dom
  const dom = new componet().$mount();
  document.body.appendChild(dom.$el);
  const comp = dom.$children[0];
  //销毁dom
  comp.remove = function() {
    document.body.removeChild(dom.$el);
    dom.$destroy();
  };
  return comp;
}
export default {
  //Vue.use会去找这个方法  插件形式
  install(Vue) {
    Vue.prototype.$message = function(options){
        console.log(options)
        return createComponents(vueMessage,options)
    }
  }
};
