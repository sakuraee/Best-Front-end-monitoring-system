<template>
  <!-- <div>资源加载异常页面</div> -->

  <el-row class="srcError" :gutter="10">
    <el-col>
      <el-card style="margin-top: 20px; height: 90px">
        <div class="block">
          <span class="demonstration">查询</span>
          <el-select
            style="margin-right: 20px; margin-left: 20px"
            v-model="value"
            placeholder="请选择时间"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
          <el-date-picker
            v-model="value1"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          >
          </el-date-picker>
          <el-input
            style="width: 300px; margin-left: 20px"
            v-model="input"
            placeholder="请求路径查询"
          ></el-input>
        </div>
      </el-card>
    </el-col>
    <el-col>
      <el-card style="margin-top: 10px; height: 460px">
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
      input: "",
      userImg: require("../../src/assets/logo.png"),
      tableData: [],
      options: [
        {
          value: "选项1",
          label: "过去1小时",
        },
        {
          value: "选项2",
          label: "过去5小时",
        },
        {
          value: "选项3",
          label: "过去1天",
        },
        {
          value: "选项4",
          label: "过去1周",
        },
        {
          value: "选项5",
          label: "过去1个月",
        },
      ],
      value: "",
      tableLabel: {
        filename: "请求时间",
        totalCount: "请求路径",
        pageCount: "响应时间",
        time: "状态码",
        method: "请求方法",
        back: "返回信息",
      },
      tableData: [
        {
          filename: "2022/8/20 12:17:02",
          totalCount:
            "http://localhost:9000/6a2fad598751f62610.hot-update.json",
          pageCount: 20,
          time: 200,
          method: "GET",
          back: "{'h':'37ba4ad22758a8448ef4','c':{ 'main':true}}",
        },
        //     totalCount:9,
        // pageCount:3,
        // time
        {
          filename: "2022/8/20 12:16:53",
          totalCount:
            "http://localhost:9000/6a2fad598751f62610.hot-update.json",
          pageCount: 10,
          time: 200,
          method: "GET",
          back: "{'h':'37ba4ad22758a8448ef4','c':{ 'main':true}}",
        },
        {
          filename: "2022/8/20 12:17:02",
          totalCount:
            "http://localhost:9000/6a2fad598751f62610.hot-update.json",
          pageCount: 20,
          time: 200,
          method: "GET",
          back: "{'h':'37ba4ad22758a8448ef4','c':{ 'main':true}}",
        },
        {
          filename: "2022/8/20 12:14:51",
          totalCount:
            "http://localhost:9000/6a2fad598751f62610.hot-update.json",
          pageCount: 6,
          time: 200,
          method: "GET",
          back: "{'h':'37ba4ad22758a8448ef4','c':{ 'main':true}}",
        },
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",

      // totalCount:'总发生次数',
      // pageCount:'影响页面次数',
      // userCount:'影响用户数'
    };
  },
  // mounted() {
  //   getData().then((res) => {
  //     const { code, data } = res.data;
  //     if (code === 20000) {
  //       //表格数据
  //       this.tableData = data.tableData;

  //       //柱状图
  //       const barOption = {
  //         legend: {
  //           //图例文字颜色
  //           textStyle: {
  //             color: "#333",
  //           },
  //         },
  //         grid: {
  //           left: "10%",
  //         },
  //         //提示框
  //         tooltip: {
  //           trigger: "axis",
  //         },

  //         xAxis: {
  //           type: "category", //类目轴
  //           data: data && data.barData && data.barData.map((item) => item.date),
  //           axisLine: {
  //             lineStyle: {
  //               color: "#17b3a3",
  //             },
  //           },
  //           axisLabel: {
  //             interval: 0,
  //             color: "#333",
  //           },
  //         },
  //         yAxis: [
  //           {
  //             type: "value",
  //             axisLine: {
  //               linestyle: {
  //                 color: "#17b3a3",
  //               },
  //             },
  //           },
  //         ],
  //         color: ["#2ec7c9", "#b6a2de"],
  //         series: [
  //           {
  //             //图注
  //             name: "资源异常报错数量",
  //             data: data.barData && data.barData.map((item) => item.count),
  //             type: "bar",
  //           },
  //           {
  //             //图注
  //             name: "资源异常报错数量",
  //             data: data.barData && data.barData.map((item) => item.count),
  //             type: "line",
  //           },
  //         ],
  //       };
  //       const U = echarts.init(this.$refs.barEcharts);
  //       U.setOption(barOption);
  //     }
  //     console.log(res);
  //   });
  // },
};
</script>