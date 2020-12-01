<template>
  <div >
      <div v-bind="$attrs" v-on="$listeners">  porps传的值太多了 不想那么写... 用attrs写 {{ $attrs }} </div>
  </div>
</template>

<script>
export default {
//  inheritAttrs:false,
  data() {
    return {};
  },
  mounted() {
    console.log(this.$attrs);
  }
};
</script>

<style></style>
