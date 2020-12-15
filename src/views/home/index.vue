<template>
  <div id="home">
<p @click="jump">跳</p>
  </div>
</template>

<script>
export default {
  methods:{
    jump(){
      this.$router.push({
        name:"xingqu"
      })
    }
  }

}
</script>

<style lang='scss'>

</style>