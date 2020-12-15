<template>
  <div id="praEnglish">
    <header>
      <div class="header">
        <div class="header_l">
          <img
            src="//edu-image.nosdn.127.net/33e5b2cd9ba14ca0879daf7b036ed70c.png?imageView&quality=100"
            alt=""
          />
          <div>课程分类 <i class="iconfont iconxia"></i></div>
          <div>微专业</div>
          <div><i class="iconfont iconliwu"></i> 关注领取福利</div>
        </div>
        <div class="seacher">
          <p>课程<i class="iconfont iconxia"></i></p>
          <input type="text" name="" placeholder="学ipad手绘" />
        </div>
        <div class="header_r">
          <div>我的学习</div>
          <div><i class="iconfont iconlingdang"></i></div>
          <div><i class="iconfont icongouwuche"></i></div>
          <div>
            登陆/注册 &nbsp;&nbsp;&nbsp;<i class="iconfont iconyonghuming"></i>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div class="main">
        <div class="title">
          <span>首页</span>
          <span><i class="iconfont iconxia-copy"></i></span>
          <span>实用英语</span>
        </div>
        <div class="swiper">
          <div
            class="swipers"
            :style="swipers == 0 ? 'margin-left:0px' : 'margin-left:-1464px'"
          >
            <div
              :class="'swiper-item' + index"
              v-for="(item, index) in swiper"
              :key="index"
            >
              <img :src="item" />
            </div>
          </div>
          <div class="cut">
            <p
              :class="cuts == 0 ? 'cuts' : ''"
              @mouseenter="enter(0)"
              @mouseover="outs(0)"
            ></p>
            <p
              :class="cuts == 1 ? 'cuts' : ''"
              @mouseenter="enter(1)"
              @mouseover="outs(1)"
            ></p>
          </div>
        </div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import func from "../../../vue-temp/vue-editor-bridge";
export default {
  data() {
    return {
      swiper: [
        "http://edu-image.nosdn.127.net/c9a37e73a0d64b819df4256c6f082e69.png?imageView&quality=100",
        "http://edu-image.nosdn.127.net/ea31b92ae4a14c589ca21481d8ce754f.png?imageView&quality=100",
      ],
      swipers: 0,
      timer: null,
      cuts: 0,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.swipers = this.swipers == 0 ? 1 : 0;
      console.log(this.swipers);
    }, 6000);
  },
  methods: {
    enter(a) {
      clearInterval(this.timer);
      this.cuts = a;
      this.swipers = a;
    },
    outs(a) {
      this.timer = setInterval(() => {
        this.swipers = this.swipers == 0 ? 1 : 0;
        console.log(this.swipers);
      }, 6000);
    },
  },
};
</script>

<style lang="scss">
#praEnglish {
  overflow: hidden;
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #2e333f;
    .header {
      width: 1464px;
      height: 70px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      color: #efefef;
      justify-content: space-between;
      .header_l {
        display: flex;
        align-items: center;
        & > div {
          margin-left: 26px;
        }
        & > img {
          width: 210px;
          height: 38px;
        }
      }
      .seacher {
        position: relative;
        & > p {
          position: absolute;
          left: 16px;
          top: -5px;
        }
        & > input {
          width: 334px;
          height: 44px;
          outline: none;
          border: none;
          border-radius: 44px;
          background: #444444;
          box-sizing: border-box;
          padding-left: 80px;
        }
      }
      .header_r {
        display: flex;
        align-items: center;
        & > div {
          margin-left: 24px;
          &:nth-child(4) {
            i {
              text-align: center;
              line-height: 44px;
              display: inline-block;
              border-radius: 44px;
              color: #fafafa;
              height: 44px;
              width: 44px;
              font-size: 28px;
              background: #dcdcdc;
            }
          }
        }
      }
    }
  }
  main {
    margin-top: 70px;
    width: 100%;
    .main {
      width: 1464px;
      margin: 0 auto;
      .title {
        width: 100%;
        height: 76px;
        line-height: 76px;
        & > span {
          margin-right: 14px;
          &:nth-child(1),
          &:nth-child(2) {
            color: #7c7f7f;
          }
          &:nth-child(3) {
            color: #a7a7a7;
          }
        }
      }
      .swiper {
        width: 100%;
        height: 436px;
        background: brown;
        overflow: hidden;
        display: flex;
        position: relative;
        .swipers {
          width: 200%;
          height: 436px;
          display: flex;
          margin-left: 0;
          transition: 2s;
          .swiper-item0,
          .swiper-item1 {
            width: 1464px;
            height: 100%;

            & > img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .cut {
          width: 90px;
          height: 2px;
          position: absolute;
          bottom: 20px;
          left: 687px;
          display: flex;
          justify-content: space-between;
          & > p {
            width: 36px;
            height: 2px;
            margin: 0;
            background: #acc2f7;
          }
          .cuts {
            background: #ffffff;
          }
        }
      }
    }
  }
}
</style>px