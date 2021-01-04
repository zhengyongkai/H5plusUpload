<template>
  <div>
    <!-- <child-one :dataOne="dataOne" @recevice="onRecevice"></child-one>
    <child-two></child-two>
    <child-three></child-three>
    <child-four></child-four>
    <div @click="msgToChildThree">点击我传值给ChildThree</div> -->
    <!-- <child-five :msg="'attr属性1'" :data="'attr属性2'"  @click='callFather'></child-five> -->
    <child-six></child-six>
  </div>
</template>

<script>
import ChildOne from "../Child/ChildOne";
import ChildTwo from "../Child/ChildTwo";
import ChildThree from "../Child/ChildThree";
import ChildFour from "../Child/ChildFour";
import ChildFive from "../Child/ChildFive";
import ChildSix from "../Child/ChildSix";
export default {
  provide() {
    return {
      msg: "我是通过provide传的，用的是provide/inject 适用于祖先和后代传值"
    };
  },
  components: {
    ChildOne,
    ChildTwo,
    ChildThree,
    ChildFour,
    ChildFive,
    ChildSix
  },
  data() {
    return {
      dataOne: "我是通过props传给父亲的值"
    };
  },
  methods: {
    onRecevice(res) {
      console.log();
    },
    msgToChildThree() {
      this.$children[2].message = "我直接修改你的msg属性";
    },
    destroyedMessage() {
      console.log("销毁eventbus");
    },
    callFather(){
      console.log('来自我的回调')
    }
  },
  mounted() {
    console.log("bus", this.$bus);
    this.$bus.$emit("child2", {
      msg: "我是父亲给第二个儿子的消息用的eventbus"
    });
  },
  destroyed() {
    this.$bus.$off("child2", this.destroyedMessage);
  }
};
</script>

<style></style>
