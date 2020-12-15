<template>
  <div id="development">
    <div class="developmentTop"></div>
    <div class="developmentM">
      <div id="development_header">
        <div id="development_header_in">
          <ul class="development_header_l">
            <li>
              <img src="@/assets/33e5b2cd9ba14ca0879daf7b036ed70c.png" alt="" />
            </li>
            <li>课堂分类<i class="iconfont icon-arrow-down"></i></li>
            <li>微专业</li>
            <li><i class="iconfont icon-liwu">关注领福利</i></li>
            <li>
              <input type="text" name="" id="" placeholder="学ipad手绘" />
            </li>
          </ul>
          <ul class="development_header_r">
            <li>我的学习</li>
            <li><i class="iconfont icon-lingdang"></i></li>
            <li><i class="iconfont icon-gouwuche"></i></li>
            <li>登陆/注册 <i class="iconfont icon-rendaiwaiquan"></i></li>
          </ul>
        </div>
      </div>
      <div id="development_top">
        <ul class="development_top_l">
          <li>首页</li>
          <li><i class="iconfont icon-jiantou"></i></li>
          <li>编程与开发</li>
        </ul>
        <ul class="development_top_r">
          <li>编程与开发体系 <i class="iconfont icon-jiantou"></i></li>
        </ul>
      </div>
       <div id="development_menu" @click="Menus">
          <p :data-id=0 :class="isId==0?'active':''">编程语言</p>
          <p :data-id=1 :class="isId==1?'active':''">前端开发</p>
          <p :data-id=2 :class="isId==2?'active':''">后端开发</p>
          <p :data-id=3 :class="isId==3?'active':''">移动开发</p>
          <p :data-id=4 :class="isId==4?'active':''">网络安全</p>
      </div>
      <div id="development_wzy">
          微专业
      </div>
      <div id="development_wzy_list">
          <dl>
              <dt><img src="@/assets/logo.png" alt=""></dt>
              <dd>
                  <p>数据分析-高薪全能班</p>
                  <p>21周高效掌握数据精英必备技能</p>
              </dd>
              </dl>
          
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "development",
  data(){
      return{
          isId:0
      }
  },
  methods:{
      // 点击顶部菜单切换
      Menus(e){
         this.isId = e.target.dataset.id
      },
   
  },
  mounted(){
      this.fetchPersonalData()
  }
};
</script>

<style lang='scss'>
input {
  outline: none;
  border: none;
}
#development {
  width: 100%;
  height: 100%;
  position: relative;
  .developmentTop {
    width: 100%;
    width: 100%;
    height: 62px;
    background-color: #2d323d;
  }
  .developmentM {
    width: 1215px;
    margin: 0 auto;
    position: absolute;
    left: 21%;
    top: 0;
    #development_header {
      #development_header_in {
        width: 100%;
        height: 62px;
        display: flex;
        justify-content: space-between;
        .development_header_l {
          height: 62px;
          display: flex;
          align-items: center;
          li {
            color: #fff;
            margin-right: 22px;
            &:nth-child(1) {
              & > img {
                width: 172px;
                height: 30px;
              }
            }
            &:nth-child(2) {
              & > i {
                vertical-align: top;
              }
            }
            &:nth-last-child(1) {
              margin-left: 84px;
              & > input {
                width: 280px;
                height: 36px;
                background-color: #444444;
                border-radius: 16px;
              }
            }
          }
        }
        .development_header_r {
          height: 62px;
          display: flex;
          align-items: center;
          & > li {
            color: #fff;
            margin-left: 20px;
          }
        }
      }
    }
    #development_top {
      width: 100%;
      height: 64px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .development_top_l {
        height: 64px;
        display: flex;
        align-items: center;
        & > li {
          margin-right: 11px;
        }
      }
      .development_top_r {
        width: 169px;
        height: 42px;
        background-color: #ecf7ed;
        color: #43ab75;
        line-height: 42px;
        text-align: center;
      }
    }
    #development_menu{
        width: 100%;
        height: 59px;
        display: flex;
        &>p{
            margin-right: 33px;
        }
        .active{
            color: #43ab75;
        }
    }
    #development_wzy{
        height: 42px;
        font-size: 24px;
    }
    #development_wzy_list{
        height: 271px;
        display: flex;
        justify-content: space-between;
        &>dl{
            width: 289px;
            height: 227px;
            border: 2px solid #f0f0f0;
            dt{
                img{
                    width: 289px;
                    height: 184px;
                }
            }
            dd{
                font-size: 16px;
            }
        }
    }
  }
}
</style>