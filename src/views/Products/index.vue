<template>
  <div id="Products">
    <header>
      <div>
        <div class="hea_l">
          <img
            src="//edu-image.nosdn.127.net/33e5b2cd9ba14ca0879daf7b036ed70c.png?imageView&quality=100"
            alt=""
            style="width: 163px; height: 27px"
          />
          <ul>
            <li>
              <el-dropdown>
                <span
                  class="el-dropdown-link"
                  style="color: #eee; font-size: 16px"
                >
                  下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="(item, index) in heaList"
                    :key="index"
                    >{{ item }}</el-dropdown-item
                  >
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li>微专业</li>
            <li><i class="iconfont iconliwu"></i> 关注领福利</li>
          </ul>
        </div>
        <div class="hea_c">
          <el-dropdown>
            <span class="el-dropdown-link" style="color: #eee; font-size: 15px">
              课程<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                v-for="(item, index) in heaList2"
                :key="index"
                >{{ item }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
          <input type="text" placeholder="学ipad手绘" />
          <i class="iconfont iconfangdajing"></i>
        </div>
        <div class="hea_r">
          <p>我的学校</p>
          <i class="iconfont iconlingdang"></i>
          <i class="iconfont icongouwuche"></i>
          <p class="r_inp">
            <span>zhangfanfan119</span>
            <img
              src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2622933625,920552892&fm=26&gp=0.jpg"
              alt=""
            />
          </p>
        </div>
      </div>
    </header>
    <main>
      <div class="nav">
        <div>
          <span style="color: #4e495a">首页</span>
          <i
            class="iconfont iconxia-copy"
            style="font-size: 12px; color: #4e495a; margin: 0px 10px 0px 10px"
          ></i>
          <span style="color: #909091">产品与运营</span>
        </div>
        <div>
          产品与运营课程体系
          <i
            class="iconfont iconxia-copy"
            style="font-size: 12px; color: #12a055"
          ></i>
        </div>
      </div>
      <div class="nav2">
        <p>产品经理</p>
        <p>新媒体运营</p>
        <p>产品运营</p>
      </div>
      <div class="introduction" id="main">
        <h2>产品入门</h2>
      </div>
    </main>
  </div>
</template>

<script>
import {Products} from "../../public/httpApi";
export default {
  name: "Products",
  data() {
    return {
      list: {},
      heaList: [
        "职场提升",
        "编程与开发",
        "AI/数据科学",
        "生活兴趣",
        "设计创意",
        "产品与运营",
        "电商运营",
        "职业考试",
        "语言学习",
      ],
      heaList2: ["课程", "网校"],
    };
  },
  methods: {
    async getlist() {
      let ana = await Products();
      this.list = ana.data; //请求到的数据
      console.log(this.list.result);
    },
  },
  mounted() {
    this.getlist();
    // console.log(Products());
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: "Arial", "Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica",
    "sans-serif";
}
#Products {
  width: 100%;
  height: 100%;

  & > header {
    width: 100%;
    height: 60px;
    background: #2f3541;
    & > div {
      height: 100%;
      width: 1205px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > .hea_l {
        width: 480px;
        height: 100%;
        // background: #ccc;
        display: flex;
        align-items: center;
        & > img {
          margin-right: 20px;
        }
        & > ul {
          width: 285px;
          color: #eee;
          display: flex;
          justify-content: space-between;
        }
      }
      & > .hea_c {
        width: 280px;
        height: 38px;
        background: #444444;
        border-radius: 20px;
        display: flex;
        align-items: center;
        padding: 0px 15px;
        & > input {
          background: #444444;
          border: none;
          flex: 1;
          padding-left: 5px;
        }
        & > i {
          color: #a4a4a4;
          font-size: 20px;
        }
      }
      & > .hea_r {
        width: 330px;
        padding-left: 40px;
        display: flex;
        justify-content: space-between;
        color: #eee;
        font-size: 16px;
        align-items: center;
        & > .r_inp {
          display: flex;
          align-items: center;
          & > span {
            display: inline-block;
            width: 100px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          & > img {
            width: 33px;
            height: 33px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  & > main {
    width: 1205px;
    margin: 0 auto;
    & > .nav {
      width: 100%;
      height: 40px;
      margin-top: 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & > div {
        font-size: 14px;
        &:nth-child(1) {
          display: flex;
          align-items: center;
        }
        &:nth-child(2) {
          width: 170px;
          height: 100%;
          background: #ecf7ed;
          display: flex;
          align-items: center;
          color: #49b688;
          justify-content: center;
          border-radius: 3px;
          & > i {
            margin-left: 2px;
          }
        }
      }
    }
    & > .nav2 {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 10px;
      color: #4e495a;
      & > p {
        font-size: 14px;
        margin-right: 34px;
      }
    }
    & > .introduction,#main {
      margin-top: 30px;
    }
  }
}
</style>