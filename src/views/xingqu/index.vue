<template>
  <div class="big">
    <div class="header">
      <div class="header-content">
        <div class="first">
          <i class="iconfont icon-yunketangjianying"></i>
          <p>网易云课堂</p>
          <p>
            <span>课程分类</span>
            <i class="iconfont icon-hanhan-01-01"></i>
          </p>
          <p>微专业</p>
          <p>
            <i class="iconfont icon-lipinhe"></i>
            <span>关注领福利</span>
          </p>
        </div>

        <p class="two">
          <span>课程</span>
          <i class="iconfont icon-hanhan-01-01"></i>
          <span>学ipad手绘</span>
          <i class="iconfont icon-sousuo"></i>
        </p>

        <div class="three">
          <span>我的学习</span>
          <i class="iconfont icon-lingdang"></i>
          <i class="iconfont icon-gouwuche"></i>
          <span>我的学习</span>
        </div>
      </div>
    </div>

    <div class="main">
      <div class="mian-content">
        <div class="ones">
          <p>首页</p>
          <i class="iconfont icon-hanhan-01-01"></i>
          <p>兴趣技能</p>
        </div>
        <img
          src="http://edu-image.nosdn.127.net/19055192bca54c5ea9622d8f672fd8e1.png?imageView&quality=100"
          alt=""
        />

        <ul class="twos">
          <li>
            <div id="publicClass">
              <p>名师公开课</p>
              <dl>
                <dt>
                  <img
                    src="https://oimagec2.ydstatic.com/image?id=-366712984304159267&product=xue"
                    alt=""
                  />
                </dt>
                <dd>
                  <li>
                    <span>明天</span>
                    <span>20:00</span>
                  </li>
                  <li>零基础轻松学python</li>
                  <li>
                    <p>必赢</p>
                    <p>清华马神</p>
                  </li>
                  <li>编程小白的python入门课</li>
                </dd>
              </dl>
            </div>

            <div id="freeClass">
              <p></p>
            </div>
          </li>
          <li>更多</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.big {
  width: 100%;
  overflow: hidden;
  & > .header {
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
      background-color: #303541;

    & > .header-content {
    height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1460px;
      margin: 0 auto;
      & > .first {
        display: flex;
        align-items: center;
        width: 580px;
        & > i:nth-child(1) {
          font-size: 41px;
          color: green;
        }
        & > p:nth-of-type(1) {
          font-size: 31px;
          margin-left: 8px;
          color: honeydew;
        }
        & > p:nth-of-type(2) {
          font-size: 20px;
          margin-left: 28px;
          display: flex;
          color: honeydew;
          align-items: center;
          & > i {
            margin-left: 5px;
          }
        }

        & > p:nth-of-type(3) {
          color: honeydew;
          margin-left: 28px;
          font-size: 20px;
        }
        & > p:nth-of-type(4) {
          font-size: 20px;
          margin-left: 28px;
          display: flex;
          color: honeydew;
          align-items: center;
          & > i {
            margin-right: 5px;
          }
        }
      }
      & > .two {
        display: flex;
        align-items: center;
        width: 440px;
        height: 60px;
        background-color: #444444;
        border-radius: 40px;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
        & > span:nth-of-type(1) {
          font-size: 22px;
          color: #fff;
        }
        & > i:nth-of-type(1) {
          font-size: 16px;
          color: #fff;
          margin-left: 5px;
        }
        & > span:nth-of-type(2) {
          font-size: 22px;
          margin-left: 25px;
          color: #a7a7a7;
        }
        & > i:nth-of-type(2) {
          font-size: 16px;
          color: #fff;
          margin-left: 165px;
        }
      }
      & > .three {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > span:nth-of-type(1) {
          color: honeydew;
          font-size: 22px;
        }
        & > i:nth-of-type(1) {
          color: honeydew;
          font-size: 26px;
          margin-left: 18px;
        }
        & > i:nth-of-type(2) {
          color: honeydew;
          font-size: 26px;
          margin-left: 18px;
        }
        & > span:nth-of-type(2) {
          color: honeydew;
          margin-left: 18px;
          font-size: 22px;
        }
      }
    }
  }
  & > .main {
    margin-top: 120px;
    width: 100%;

    & > .mian-content {
      margin: 0 auto;
      width: 1460px;
      & > .ones {
        display: flex;
        align-items: center;

        & > i {
          margin-left: 15px;
          margin-right: 15px;
          font-size: 20px;
        }
      }
      & > img {
        width: 1460px;
        height: 440px;
        margin: 0 auto;
        margin-top: 20px;
      }

      & > .twos {
        margin-top: 20px;
        border-top: 2px solid #f3f3f3;
        display: flex;
        //   align-items: center;
        justify-content: space-between;
        & > li:nth-of-type(1) {
          margin-top: 10px;
          & > #publicClass {
            & > p {
              font-size: 28px;
              font-weight: 700;
            }
            & > dl {
              width: 612px;
              height: 230px;
              border: gray 2px solid;
              margin-top: 16px;
              display: flex;
              align-items: center;
              padding-left: 20px;
              box-sizing: border-box;
              & > dt {
                & > img {
                  width: 122px;
                  height: 160px;
                }
              }
              & > dd {
                margin-left: 23px;
                & > li:nth-of-type(1) {
                  font-size: 21px;
                  & > span {
                    margin-right: 8px;
                  }
                }
                & > li:nth-of-type(2) {
                  font-size: 21px;
                  margin-top: 22px;
                }
                & > li:nth-of-type(3) {
                  margin-top: 22px;
                  display: flex;
                  //   align-items: center;
                  & > p:nth-of-type(1) {
                    font-size: 21px;
                  }
                  & > p:nth-of-type(2) {
                    height: 25px;
                    width: 120px;
                    border: 2px solid #fbe4b0;
                    border-radius: 8px;
                    margin-left: 20px;
                    text-align: center;
                    line-height: 25px;
                    background-color: #fefaf1;
                  }
                }
                & > li:nth-of-type(4) {
                  font-size: 16px;
                  margin-top: 22px;
                  color: #93928e;
                }
              }
            }
          }
        }
        & > li:nth-of-type(2) {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>