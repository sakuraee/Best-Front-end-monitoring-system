<template>
  <!-- <div>性能数据页面</div> -->

  <el-row class="performance" :gutter="0" justify="space-between">
    <el-col :span="24" style="margin-top: 20px">
      <div class="graph">
        <el-card style="height: 608px">
          <el-col
            v-for="item in countData"
            :key="item.name"
            :offset="1"
            :body-style="{ display: 'flex', padding: 0, border: 0 }"
            style="margin-top: 0px"
            :span="3.8"
            justify="space-between"
          >
            <div class="num">
              <el-card>
                <div class="detail">
                  <p class="txt">
                    {{ item.name }}
                  </p>
                  <p class="value">
                    {{ item.value + "s" }}
                  </p>
                </div>
              </el-card>
            </div>
          </el-col>
          <div style="height: 408px; margin-top: 200px" ref="Linecharts"></div>
        </el-card>
      </div>
      <!-- </el-card> -->
    </el-col>
    <el-col :span="24" style="margin-top: 20px">
      <div class="table">
        <el-card style="height: 500px">
          <el-tabs :tab-position="'left'" style="height: 500px">
            <el-tab-pane :lazy="true">
              <span slot="label">
                http://localhost:8080/performance<i
                  class="el-icon-caret-right"
                ></i
              ></span>
              <el-row>
                <el-col :span="24" style="margin-top: 10px">
                  <div>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: 0px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">平均网络耗时</p>
                            <p class="valuec">
                              {{ 6.83 + "s" }}
                            </p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: 0px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">影响用户数</p>
                            <p class="valuec">39</p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <div
                style="height: 358px; margin-top: 20px"
                ref="barEcharts"
              ></div>
            </el-tab-pane>
            <el-tab-pane
              ><span slot="label">
                http://localhost:8080/bigscreen<i
                  class="el-icon-caret-right"
                ></i
              ></span>
              <el-row>
                <el-col :span="24" style="margin-top: 10px">
                  <div>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">平均网络耗时</p>
                            <p class="valuec">
                              {{ 5.34 + "s" }}
                            </p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">影响用户数</p>
                            <p class="valuec">23</p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <div
                ref="echart-right"
                style="height: 358px; width: 720px; margin-top: 25px"
              ></div>
            </el-tab-pane>
            <!-- <el-tab-pane label="http://localhost:8080/home"
              ><span slot="label">
                http://localhost:8080/home<i
                  class="el-icon-caret-right"
                ></i></span
              ><el-row>
                <el-col :span="24" style="margin-top: 10px">
                  <div>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">平均网络耗时</p>
                            <p class="valuec">
                              {{ 6.83 + "s" }}
                            </p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">影响用户数</p>
                            <p class="valuec">39</p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row>
              <div
                ref="echart-right1"
                style="height: 358px; width: 720px; margin-top: 5px"
              ></div
            ></el-tab-pane>
            <el-tab-pane label="http://localhost:8080/user"
              ><span slot="label">
                http://localhost:8080/user<i
                  class="el-icon-caret-right"
                ></i></span
              ><el-row>
                <el-col :span="24" style="margin-top: 10px">
                  <div>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">平均网络耗时</p>
                            <p class="valuec">
                              {{ 6.83 + "s" }}
                            </p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                    <el-col
                      :offset="1"
                      :body-style="{
                        display: 'flex',
                        padding: 0,
                        border: 0,
                      }"
                      style="margin-top: -10px"
                      :span="3.8"
                      justify="space-between"
                    >
                      <div class="metric">
                        <el-card>
                          <div class="card">
                            <p class="txtc">影响用户数</p>
                            <p class="valuec">39</p>
                          </div>
                        </el-card>
                      </div>
                    </el-col>
                  </div>
                </el-col>
              </el-row></el-tab-pane
            > -->
          </el-tabs>
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
.item {
  margin: 4px;
}
.card {
  height: 40px;
  width: 110px;
  /* vertical-align: middle; */
  align-items: center;
  justify-content: center;
}

.detail {
  width: 110px;
  height: 80px;
}
.value {
  font-size: 26px;
  font-family: 微软雅黑;
}

.txt {
  font-size: 13px;
  font-family: 微软雅黑;
  color: #000;
}
.valuec {
  font-size: 10px;
  font-family: 微软雅黑;
}
.txtc {
  font-size: 15px;
  font-family: 微软雅黑;
  color: #000;
}
</style>

<script>
import { getPerf } from "../../api/data.js";
// import { getMenuPerf } from "../../api/getDataFromNode.js";
import * as echarts from "echarts";
// import { it } from 'node:test'

export default {
  name: "Performance",
  data() {
    return {
      userImg: require("../../src/assets/logo.png"),
      activeName: "first",
      tableData: [],
      tableLabel: {
        filename: "接口列表",
        totalCount: "平均网络耗时(s)",
        pageCount: "影响用户数",
        time: "发生页面",
      },
      // barData: [],
      // totalCount:'总发生次数',
      // pageCount:'影响页面次数',
      // userCount:'影响用户数'
      // barData: [],
    };
  },
  methods: {
    barGraph() {
      var myChart = echarts.init(this.$refs["echart-right"]);
      var category = [
        "loadTime",
        "timeToInteractive",
        "domContentLoadedTime",
        "parseDOMTime",
        "ttfbTime",
        "responseTime",
        "connectTime",
        "FP",
        "FCP",
      ];
      var barData = [730, 801, 924, 1090, 1259, 1600, 411, 125, 355];
      var option = {
        title: {
          text: "                                              性能指标（ms）",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "value",
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          type: "category",
          data: category,
          splitLine: { show: false },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          offset: 10,
          nameTextStyle: {
            fontSize: 10,
          },
        },
        series: [
          {
            name: "数量",
            type: "bar",

            data: barData,
            barWidth: 14,
            barGap: 5,
            smooth: true,
            label: {
              normal: {
                show: true,
                position: "right",
                offset: [5, -2],
                textStyle: {
                  color: "#333",
                  fontSize: 13,
                },
              },
            },
            itemStyle: {
              emphasis: {
                barBorderRadius: 7,
              },
              normal: {
                barBorderRadius: 7,
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  { offset: 0, color: "#3977E6" },
                  { offset: 1, color: "#37BBF8" },
                ]),
              },
            },
          },
        ],
      };
      myChart.setOption(option);
      window.addEventListener("resize", function () {
        myChart.resize();
      });
    },
  },
  mounted() {
    this.$http
      .get("http://ygsfhjdym.xyz:5000/api/monitor/getAverage")
      .then((res) => {
        // const data = res.data;

        const da = res.data[0];
        console.log("---------", typeof parseFloat(da.parseDOMTime));
        this.barData = [
          {
            date: "FCP",
            new: parseFloat(da.FCP),
          },
          {
            date: "FP",
            new: parseFloat(da.FP),
          },
          {
            date: "连接时间",
            new: parseFloat(da.connectTime),
          },
          {
            date: "响应时间",
            new: parseFloat(da.responseTime),
          },
          {
            date: "Dom解析",
            new: parseFloat(da.parseDOMTime),
          },
          {
            date: "ttfb",
            new: parseFloat(da.ttfbTime),
          },
          {
            date: "内容加载",
            new: parseFloat(da.domContentLoadedTime),
          },
          {
            date: "首次可交互",
            new: parseFloat(da.timeToInteractive),
          },
          {
            date: "页面加载",
            new: parseFloat(da.loadTime),
          },
        ];
        //表格数据
        console.log("=========", this.barData);
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
            data: this.barData && this.barData.map((item) => item.date),
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
              name: "加载计时(ms)",
              data: this.barData && this.barData.map((item) => item.new),
              type: "bar",
              itemStyle: {
                normal: {
                  label: {
                    show: true, //开启显示
                    position: "top", //在上方显示
                    textStyle: {
                      //数值样式
                      color: "black",
                      fontSize: 12,
                    },
                  },
                  color: function (params) {
                    // 给出颜色组
                    var colorList = [
                      "#cca272",
                      "#74608f",
                      "#d7a02b",
                      "#c8ba23",
                      "#a12358",
                      "#b12358",
                      "#d12358",
                      "#c10258",
                    ];
                    //循环调用
                    return colorList[params.dataIndex % colorList.length];
                  },
                },
              },
            },
          ],
        };
        const U = echarts.init(this.$refs.barEcharts);
        U.setOption(barOption);
        console.log(res);
      });

    getPerf().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        //表格数据
        this.tableData = data.tableData;
        this.countData = data.countData;
        const order = data.orderData;
        const xData = order.date;
        const keyArray = Object.keys(order.data[0]);
        const series = [];
        // console.log(data);
        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });

        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };

        const E = echarts.init(this.$refs.Linecharts);
        E.setOption(option);
      }
      // console.log(res);
    });
    this.barGraph();
  },
};
</script>