<!--  -->
<template>
  <div>
    <van-button @click="showMessage" type="primary">点击我出现弹窗</van-button>
  </div>
</template>
<script>
import {Button} from 'vant'
export default {
  data() {
    return {};
  },
  props: [],
  components: {
      'van-button':Button
  },
  created() {},
  mounted() {},
  methods: {
    showMessage() {
      this.$message({
        message: "普通的提示信息",
        duration:3000  //3秒延时
      }).show();
    }
  }
};
</script>
<style lang="scss" scoped></style>
