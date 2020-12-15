<template>
  <div id="development">
      <div id="development_header">
          <ul class="development_header_l">
              <li><img src="@/assets/33e5b2cd9ba14ca0879daf7b036ed70c.png" alt=""></li>
          </ul>
          <ul class="development_header_r">

          </ul>
      </div>
  </div>
</template>

<script>
export default {
name:'development',
}
</script>

<style lang='scss'>
#development{
    width: 100vw;
    height: 100vh;
    #development_header{
        width: 100%;
        height: 62px;
        background-color: #2d323d;
        #development_header_l{
            li{
                &:nth-child(1){
                    &>img{
                        width: 172px;
                        height: 30px;
                    }
                }
            }
        }
    }
}
</style>