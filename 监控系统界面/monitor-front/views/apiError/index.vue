<template>
  <!-- <div>接口异常数据页面</div> -->

  <el-row class="jserror" :gutter="0" justify="space-between">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-card style="margin-top: 0px; height: 460px">
          <template #header>
            <div class="card-header">
              <i :class="'el-icon-data-line'"></i>
              <span>接口请求报错</span>
              <span>(点击柱状图查看其他日期)</span>
            </div>
          </template>
          <div class="graph">
            <el-card style="height: 408px; margin-top: -20px">
              <div style="height: 408px" ref="barEcharts"></div>
            </el-card>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card style="margin-top: 20px; height: 460px">
          <template #header>
            <i :class="'el-icon-tickets'"></i>
            <div class="card-header">
              <span>今日概况</span>
            </div>
          </template>
          <div
            v-for="item in tableData2"
            :key="item.status"
            style="display: flex; align-items: center; margin-bottom: 30px"
          >
            <span style="font-size: 30px; margin-right: 20px">{{
              item.status
            }}</span>
            <span>发生次数: {{ item.count }}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-card style="margin-top: 20px; height: 460px">
          <template #header>
            <div class="card-header">
              <i :class="'el-icon-document'"></i>
              <span> 接口请求失败列表(TOP20) </span>
              <span> 2022-07-30 </span>
            </div>
          </template>
          <el-table :data="tableData2" stripe :show-header="false">
            <el-table-column>
              <template #default="scope">
                <div
                  style="
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                  "
                >
                  <div style="display: flex; align-items: center">
                    <el-icon><timer /></el-icon>
                    <div
                      style="
                        margin: auto 10px;
                        background: #eee;
                        padding: 5px 10px;
                      "
                    >
                      <span style="font-weight: 600">{{
                        scope.row.status
                      }}</span>
                      <span>({{ scope.row.count }})</span>
                    </div>
                    <span>
                      {{ scope.row.url }}
                    </span>
                    <i :class="'el-icon-price-tag'"></i>
                    <!-- <el-icon><PriceTag /></el-icon> -->
                    <span> ({{ scope.row.count }}) </span>
                    <span> ({{ scope.row.users }}) </span>
                  </div>
                  <div>
                    <span>
                      {{ scope.row.date }}
                    </span>
                  </div>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </el-row>
</template>

<style>
:root {
  --theme-color: #6060b6;
}
.value {
  font-size: 26px;
  font-family: 微软雅黑;
}
.txt {
  font-size: 17px;
  font-family: 微软雅黑;
  color: #000;
}
.card-header {
  box-sizing: border-box;
  display: inline-block;
  font-size: 20px;
  padding: 18px;
  padding-bottom: 14px;
  margin: -18px;
  color: var(--theme-color);
  border-bottom: 4px solid var(--theme-color);
}
</style>

<script>
import { getApiData, getPerf } from "../../api/data.js";
import * as echarts from "echarts";
// import { it } from 'node:test'
const themeColor = "#6060B6";

export default {
  name: "apiError",
  data() {
    return {
      themeColor: themeColor,
      userImg: require("@/assets/logo.png"),
      tableData2: [
        {
          status: "404",
          count: 38,
          url: "https://www.test.com",
          users: 9,
          date: "2020-02-01",
        },
        {
          status: "500",
          count: 4,
          url: "https://www.test.com",
          users: 2,
          date: "2020-01-27",
        },
        {
          status: "400",
          count: 2,
          url: "https://www.test.com",
          users: 1,
          date: "2020-02-02",
        },
      ],
      tableData: [
        {
          filename: "text1.css",
          totalCount: 9,
          pageCount: 3,
          time: "2022-08-06 23:11:24",
        },
        {
          filename: "text2.css",
          totalCount: 4,
          pageCount: 1,
          time: "2022-08-06 15:12:11",
        },
        {
          filename: "text3.css",
          totalCount: 5,
          pageCount: 2,
          time: "2022-08-09 17:16:21",
        },
      ],
      tableLabel: {
        filename: "页面列表",
        totalCount: "发生次数",
        pageCount: "发生页面数",
        time: "发生时间",
      },

      // totalCount:'总发生次数',
      // pageCount:'影响页面次数',
      // userCount:'影响用户数'
      countData: [
        {
          name: "DNS解析时间",
          value: 0,
          //   icon: "el-icon-success",
          //   color: "#2ec7c9",
        },
        {
          name: "TCP连接时间",
          value: 0,
          //   icon: "el-icon-star-on",
          //   color: "#ffb980",
        },
        {
          name: "TTFB平均时间",
          value: 158.91,
          //   icon: "el-icon-user",
          //   color: "#ffb980",
        },
        {
          name: "Dom解析时间",
          value: 2.58,
          //   icon: "el-icon-star-on",
          //   color: "#ffb980",
        },
        {
          name: "页面平均加载时间",
          value: 2.74,
          //   icon: "el-icon-user",
          //   color: "#ffb980",
        },
      ],
    };
  },
  mounted() {
    getApiData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        //表格数据
        this.tableData = data.tableData;

        // const keyArray = ['数量']
        // const series = [
        //     {
        //         name:'数量',
        //         type:'bar',
        //         data:[12,9,11,8,7]
        //     }
        // ]

        // const E = echarts.init(this.$refs.Linecharts);
        // E.setOption(option);

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
          color: ["#7093DB", "#b6a2de"],
          series: [
            {
              //图注
              name: "接口异常报错数量",
              data: data.barData && data.barData.map((item) => item.count),
              type: "bar",
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