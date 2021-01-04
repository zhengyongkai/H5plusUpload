<!--  -->
<template>
  <div>
    <button @click="publish">主题推送</button>
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
  },
  beforeDestroy() {
    // console.log(this.client.unsubscribe)
    this.client.unsubscribe("home/garden/fountainss")
    this.client = null;
  }
};
</script>
<style lang="scss" scoped></style>
