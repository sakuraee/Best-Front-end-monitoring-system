<template>
  <!-- <div>资源加载异常页面</div> -->

  <el-row class="srcError" :gutter="10">
    <el-col :span="18" style="margin-top: 20px">
      <div class="graph">
        <el-card style="height: 408px">
          <div style="height: 408px" ref="barEcharts"></div>
        </el-card>
      </div>
    </el-col>

    <el-col style="margin-top: 10px" :span="6">
      <div class="num">
        <el-card
          class="countCard"
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
          style="margin: 12px; height: 126px"
        >
          <!-- <i class="icon" :class="'el-icon-${item.icon}'" :style= "{ background: item.color }"></i> -->
          <div class="deta">
            <p class="values">{{ item.value }}</p>
            <p class="txts">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>

    <el-row>
      <el-col>
        <el-card style="margin-top: 20px; height: 460px">
          <el-table :data="tableData">
            <el-table-column
              v-for="(val, key) in tableLabel"
              :key="key"
              :prop="key"
              :label="val"
            >
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</template>

<style>
.values {
  font-size: 26px;
  font-family: 微软雅黑;
  margin-left: 20px;
}
.txts {
  font-size: 17px;
  font-family: 微软雅黑;
  color: #4c4e4e;
  margin-left: 20px;
}
/* .num{

    color: aquamarine;
} */
.deta {
  width: 200px;
}
.countCard {
  /* color:#4c4e4e; */
  color: #4c4e4e;
  /* background-color: #ffcc66; */
}
</style>

<script>
import { getData } from "../../api/data.js";
import * as echarts from "echarts";
// import { it } from 'node:test'

export default {
  name: "srcError",
  data() {
    return {
      userImg: require("../../src/assets/logo.png"),
      tableData: [],
      tableLabel: {
        filename: "资源文件名",
        totalCount: "发生次数",
        pageCount: "发生页面数",
        time: "发生时间",
      },

      // totalCount:'总发生次数',
      // pageCount:'影响页面次数',
      // userCount:'影响用户数'
      countData: [
        {
          name: "总发生次数",
          value: 23,
          icon: "el-icon-success",
          color: "#2ec7c9",
        },
        {
          name: "影响页面次数",
          value: 6,
          icon: "el-icon-star-on",
          color: "#ffb980",
        },
        {
          name: "影响用户数",
          value: 88,
          icon: "el-icon-user",
          color: "#ffb980",
        },
      ],
    };
  },
  mounted() {
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        //表格数据
        this.tableData = data.tableData;

        //柱状图
        const barOption = {
          legend: {
            //图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "10%",
          },
          //提示框
          tooltip: {
            trigger: "axis",
          },

          xAxis: {
            type: "category", //类目轴
            data: data && data.barData && data.barData.map((item) => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                linestyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              //图注
              name: "资源异常报错数量",
              data: data.barData && data.barData.map((item) => item.count),
              type: "bar",
            },
            {
              //图注
              name: "资源异常报错数量",
              data: data.barData && data.barData.map((item) => item.count),
              type: "line",
            },
          ],
        };
        const U = echarts.init(this.$refs.barEcharts);
        U.setOption(barOption);
      }
      console.log(res);
    });
  },
};
</script>