<template>
  <div>
      
  </div>
</template>

<script>

export default {
  mounted(){
    this.$bus.$on('child2',(data)=>{
      console.log(data.msg)
    })
  },
  methods(){},
}
</script>

<style>

</style>