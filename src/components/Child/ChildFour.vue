<template>
  <div></div>
</template>

<script>
export default {
  data() {
      return {

      }
  },
  mounted(){
       this.$parent.$on('toChildFour',(msg)=>{
           console.log(msg)
       })
  }
};
</script>

<style></style>
