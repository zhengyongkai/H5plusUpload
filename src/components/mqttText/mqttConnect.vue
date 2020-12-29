<!--  -->
<template>
  <div>
    <button @click="publish">主题推送</button>
    <button @click="unconnect">断开连接</button>
  </div>
</template>
<script>
import initMqtt from "../../utils/initMqtt";
export default {
  data() {
    return {};
  },
  props: [],
  components: {},
  created() {},
  mounted() {
    // console.log($mqtt)
    this.initmqtt = new initMqtt();
    this.client = this.initmqtt.connect(
      () => {
        console.log("链接成功,开始订阅主题");
        this.client.subscribe("home/garden/fountainss");
      },
      this.onConnectionLost,
      this.onMessageArrived
    );
  },
  methods: {
    onMessageArrived(a, b) {
      console.log("收到的数据", b);
    },
    onConnectionLost() {
      console.log("链接丢失");
    },
    publish() {
      this.client.publish("home/garden/fountainss", "我爱你");
    },
    unconnect() {
      this.client.unsubscribe("home/garden/fountainss"); //取消订阅
      this.client = null;
      //断开连接
    }
  },
  beforeDestroy() {}
};
</script>
<style lang="scss" scoped></style>
