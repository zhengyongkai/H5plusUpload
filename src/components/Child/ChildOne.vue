<template>
  <div @click="$emit('recevice','孩子1：你返回props我收到了')">{{dataOne}}</div>
</template>

<script>
export default {
  props: {
      dataOne:{
          type:String,
          default:''
      }
  },
  data() {
      return {

      }
  }
};
</script>

<style></style>
