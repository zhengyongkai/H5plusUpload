<template>
  <div class="hello">
    <van-button @click="to('h5upload')">h5plus上传</van-button>
    <van-button @click="to('GoodLIst')">简单的购物车页面</van-button>
    <van-button @click="to('dataTrans')">组件传值</van-button>
    <van-button @click="to('mqttText')">mqtt实例</van-button>
    <van-button @click="to('mqttCharts')">echarts实例</van-button>
    <van-button @click="to('message')">vue.extend构造函数组件</van-button>
  </div>
</template>

<script>
import { Button } from "vant";

export default {
  name: "HelloWorld",
  components: {
    "van-button": Button
  },
  data() {
    return {};
  },
  methods: {
    to(url){
      this.$router.push(url)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
