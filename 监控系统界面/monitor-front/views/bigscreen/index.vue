<template>
  <div id="data-view">
    <dv-full-screen-container>
      <div class="main-header">
        <div class="mh-middle">前端监控系统</div>
        <div class="mh-right" style="float: right">
          <el-link type="info" @click="back" :underline="false">退出</el-link>
        </div>
        <dv-border-box-2
          style="
            width: 110px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            margin-left: 0px;
          "
        >
          按F11全屏
        </dv-border-box-2>
      </div>

      <dv-border-box-1 class="main-container">
        <div class="mc-top">
          <Top-Left-Cmp />
          <Top-Middle-Cmp />
          <Top-right-Cmp />
        </div>
        <div class="mc-bottom">
          <dv-border-box-6 class="bottom-left-container">
            <dv-decoration-4
              class="mcb-decoration-1"
              style="width: 5px; height: 45%"
            />
            <dv-decoration-4
              class="mcb-decoration-2"
              style="width: 5px; height: 45%"
            />
            <Bottom-Left-Chart-1 />
            <Bottom-Left-Chart-2 />
          </dv-border-box-6>

          <div class="bottom-right-container">
            <Bottom-Right-Table-1 />
            <Bottom-Right-Table-2 />
            <Bottom-Right-Table-3 />
            <Bottom-Right-Table-4 />
          </div>
        </div>
      </dv-border-box-1>
    </dv-full-screen-container>
  </div>
</template>

<script>
import TopLeftCmp from "../../src/components/datav/TopLeftCmp";
import TopMiddleCmp from "../../src/components/datav/TopMiddleCmp";
import TopRightCmp from "../../src/components/datav/TopRightCmp";

import BottomLeftChart1 from "../../src/components/datav/BottomLeftChart1";
import BottomLeftChart2 from "../../src/components/datav/BottomLeftChart2";

import BottomRightTable1 from "../../src/components/datav/BottomRightTable1";
import BottomRightTable2 from "../../src/components/datav/BottomRightTable2";
import BottomRightTable3 from "../../src/components/datav/BottomRightTable3";
import BottomRightTable4 from "../../src/components/datav/BottomRightTable4";

export default {
  name: "DataView",
  components: {
    TopLeftCmp,
    TopMiddleCmp,
    TopRightCmp,
    BottomLeftChart1,
    BottomLeftChart2,
    BottomRightTable1,
    BottomRightTable2,
    BottomRightTable3,
    BottomRightTable4,
  },
  data() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
#data-view {
  width: 100%;
  height: 100%;
  background-color: #030409;
  color: #fff;

  #dv-full-screen-container {
    background-image: url("../../src/components/datav/img/bg.png");
    background-size: 100% 100%;
    box-shadow: 0 0 3px blue;
    display: flex;
    flex-direction: column;
  }

  .main-header {
    height: 80px;
    width: 100%;
    display: flex;
    // justify-content: space-between;
    align-items: center;

    .mh-left {
      font-size: 20px;
      color: rgb(1, 134, 187);

      a:visited {
        color: rgb(1, 134, 187);
      }
    }

    .mh-middle {
      font-size: 30px;
      justify-content: center;
      align-items: center;
      margin-left: 480px;
    }

    .mh-right {
      width: 500px;
      float: right;
    }
  }

  .main-container {
    height: calc(~"100% - 10px");

    .mc-top,
    .mc-bottom {
      box-sizing: border-box;
      padding: 0px;
      display: flex;
    }

    .mc-top {
      height: 34%;
    }

    .mc-bottom {
      height: 60%;
    }

    .top-left-cmp,
    .bottom-left-container {
      width: 32%;
    }

    .top-middle-cmp,
    .top-right-cmp {
      width: 200%;
    }

    .bottom-left-container {
      position: relative;

      .border-box-content {
        display: flex;
      }

      .mcb-decoration-1,
      .mcb-decoration-2 {
        position: absolute;
        left: 50%;
        margin-left: -2px;
      }

      .mcb-decoration-1 {
        top: 5%;
        transform: rotate(180deg);
      }

      .mcb-decoration-2 {
        top: 50%;
      }

      .bottom-left-chart-1,
      .bottom-left-chart-2 {
        width: 50%;
        height: 100%;
      }
    }

    .bottom-right-container {
      width: 68%;
      padding-left: 30px;
      box-sizing: border-box;
      display: flex;
    }
  }
}
</style>
