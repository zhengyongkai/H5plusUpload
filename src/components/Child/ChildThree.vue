<template>
  <div>
      <div @click="msg">我是ChildTree点击我传值给ChildFour</div>
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          message:'我是ChildThree的msg属性'
      }
  },
  methods:{
      msg(){
          this.$parent.$emit('toChildFour','我是你的兄弟CHildThree发给ChildFour的数据')
      }
  },
  mounted(){
    
  }
};
</script>

<style></style>
