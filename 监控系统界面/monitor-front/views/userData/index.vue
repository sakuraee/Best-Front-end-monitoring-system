<template>
  <!-- <div>计算用户行为数据页面</div> -->

  <el-row class="userData" :gutter="10">
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
          <div class="detail">
            <p class="values">{{ item.value }}</p>
            <p class="txts">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
    </el-col>

    <el-col :span="18" style="margin-top: 20px">
      <div class="graph">
        <el-card style="height: 408px">
          <div style="height: 408px" ref="lineEcharts"></div>
        </el-card>
      </div>
    </el-col>

    <el-row>
      <el-col>
        <el-card style="margin-top: 10px; height: 460px; margin-left: 15px">
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
    <!-- <el-col style="margin-top: 10px" :span="24">
      <div class="num">
        <el-card style="height: 408px">
            <China-Map />
        </el-card>
      </div>
    </el-col> -->
  </el-row>
</template>

<style>
/* .num{

    color: aquamarine;
} */
</style>

<script>
import { getuserData } from "../../api/data.js";
import * as echarts from "echarts";
// import ChinaMap from "../../src/components/ChinaMap";
// import { it } from 'node:test'

export default {
  name: "userData",

  data() {
    return {
      userImg: require("../../src/assets/logo.png"),
      tableData: [],
      tableLabel: {
        userIP: "访问ip",
        pageLoadTime: "页面加载时长",
        userAddress: "用户访问地址",
        sourceType: "访问来源类型",
        browserType: "浏览器类型",
        screenMsg: "电脑屏幕信息",
      },

      // totalCount:'总发生次数',
      // pageCount:'影响页面次数',
      // userCount:'影响用户数'
      countData: [
        {
          name: "今日PV",
          value: 33,
          icon: "el-icon-success",
          color: "#2ec7c9",
        },
        {
          name: "今日UV",
          value: 6,
          icon: "el-icon-star-on",
          color: "#ffb980",
        },
        {
          name: "访问ip数",
          value: 88,
          icon: "el-icon-user",
          color: "#ffb980",
        },
      ],
      // countData: [],
    };
  },
  mounted() {
    this.$http
      .get("http://ygsfhjdym.xyz:5000/api/monitor/getpvuvStatistics")
      .then((res) => {
        console.log("hh", res.data[0]);
        const da = res.data[0];
        this.countData = [
          {
            name: "今日PV",
            value: da.uv,
            icon: "el-icon-success",
            color: "#2ec7c9",
          },
          {
            name: "今日UV",
            value: da.pv,
            icon: "el-icon-star-on",
            color: "#ffb980",
          },
          {
            name: "访问ip数",
            value: 88,
            icon: "el-icon-user",
            color: "#ffb980",
          },
        ];
      });
    getuserData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        //表格数据
        this.tableData = data.tableData;

        //柱状图
        const lineOption = {
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
            data:
              data && data.lineData && data.lineData.map((item) => item.date),
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
              name: "PV",
              data: data.lineData && data.lineData.map((item) => item.pvCount),
              type: "line",
            },
            {
              //图注
              name: "UV",
              data: data.lineData && data.lineData.map((item) => item.uvCount),
              type: "line",
            },
          ],
        };
        const U = echarts.init(this.$refs.lineEcharts);
        U.setOption(lineOption);
      }
      console.log(res);
    });
  },
};
</script>