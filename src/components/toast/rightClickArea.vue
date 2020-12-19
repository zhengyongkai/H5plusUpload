<!--  -->
<template>
  <!-- <div v-right-Click="rightMenuObj()"></div> -->
  <div>
      <div
    v-oncontextmenu="rightMenuObj()"
   
    type="text"
    style="width:300px;height:300px;background:red;text-align:center;"
  >
    点击我出现弹窗
  </div>
 <div> <input type="text"  v-focus></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {};
  },
  props: [],
  components: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    rightMenuObj() {
      // 右键菜单对象，菜单内容和处理事件
      const obj = {
        this: this,
        text: [
          "查看资料",
          "复制用户id",
          "移除该会话",
          "在联系人中查看",
          "在单聊窗口中打开",
          "会话置顶"
        ],
        handler: {
          checkingData() {
            console.log("查看资料点击事件");
          },
          copyId() {
            console.log("复制用户id点击事件");
          },
          removeItem() {
            console.log("移除会话点击事件");
          },
          showContact() {
            console.log("在联系人中查看");
          },
          showSingleChat() {
            console.log("在单聊窗口中打开");
          },
          topConversation() {
            console.log("会话置顶");
          }
        }
      };
      return obj;
    }
  }
};
</script>
<style lang="scss"></style>
