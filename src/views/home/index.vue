<template>
  <div id="home">
    <header>
      <div class="header_c">
        <li class="logo">网易云课堂</li>
        <li class="search">
          <input type="text" />
          <button><i class="iconfont icon-fangdajing"></i> 搜索</button>
        </li>
        <li><i class="iconfont iconxiazai"></i> 下载app</li>
        <li>关注领福利</li>
        <li>会员中心</li>
        <li>管理后台</li>
        <li>|</li>
        <li>我的学习</li>
        <i class="iconfont icongouwuche"></i>
        <i class="iconfont iconlingdang"> </i>
        <li>|</li>
        <li>登录/注册</li>
        <i class="iconfont iconyonghuming"></i>
      </div>
    </header>
    <nav>
      <ul
        v-for="item in getnav"
        @mouseover="mouseOver(item.id)"
        @mouseleave="mouseLeave(item.id)"
        @click.stop="randers(item.id)"
        :key="item.name"
        :class="{ active: showid == item.id }"
      >
        {{
          item.name
        }}
        <div v-show="item.id == showid" class="heaver_show">
          <li
            @click.stop="randers(it.id)"
            v-for="it in item.chlidren"
            :key="it.name"
          >
            {{ it.name }}
          </li>
        </div>
      </ul>
    </nav>
    
  </div>
</template>

<script>
import getnav from '@/public/data.js'
import Swiper from "swiper"


export default {
  data () {
    return {
      getnav,
      showid: 1,
    }
  },
  methods: {
    mouseOver (e) {
      this.showid = e
    },
    mouseLeave () {
      this.showid = 1
    },
    randers (e) {
      this.showid = e
      console.log(e);
    }
  }

}
</script>

<style lang='scss'>
#home {
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    input,
    button {
      border: none;
      outline: none;
    }
  }
  width: 100%;
  header {
    width: 100%;
    height: 56px;
    background: #303440;
    .logo {
      font-size: 27px;
    }
    .header_c {
      justify-content: space-between;
      display: flex;
      align-items: center;
      color: white;

      font-weight: 700;
      margin: 0 auto;
      width: 1220px;
      height: 56px;
      .search {
        margin: 42px;
        margin-left: 20px;
        width: 351px;
        height: 37px;
        border-radius: 50px;
        overflow: hidden;
        display: flex;
        input {
          width: 271px;
          background: white;
        }
        button {
          flex: 1;
          background: #49af4f;

          color: white;
        }
      }
    }
  }
  nav {
    margin: 0 auto;
    width: 1220px;
    height: 59px;
    background: #ffff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .active {
      position: relative;

      border-bottom: 1px solid green;
      color: green;
    }
    ul {
      position: relative;
      .heaver_show {
        position: absolute;
        bottom: -160px;
        left: 0;
        width: 100%;
        text-align: center;
        li {
          color: black;
          height: 40px;
          &:hover {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>