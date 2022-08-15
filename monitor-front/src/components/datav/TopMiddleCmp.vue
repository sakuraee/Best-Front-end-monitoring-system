<template>
  <div class="top-middle-cmp">
    <div class="chart-name">
      用户量统计
      <dv-decoration-3 style="width: 200px; height: 20px" />
    </div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "TopMiddleCmp",
  data() {
    return {
      option: {
        legend: {
          data: ["用户量"],
          textStyle: {
            fill: "#fff",
          },
        },
        xAxis: {
          data: ["10/01", "10/02", "10/03", "10/04", "10/05", "10/06", "10/07"],
          boundaryGap: true,
          axisLine: {
            style: {
              stroke: "#999",
            },
          },
          axisLabel: {
            style: {
              fill: "#999",
            },
          },
          axisTick: {
            show: false,
          },
        },
        yAxis: {
          data: "value",
          splitLine: {
            show: false,
          },
          axisLine: {
            style: {
              stroke: "#999",
            },
          },
          axisLabel: {
            style: {
              fill: "#999",
            },
            formatter({ value }) {
              return value.toFixed(0);
            },
          },
          axisTick: {
            show: false,
          },
          min: 0,
          max: 100,
          interval: 20,
        },
        series: [
          {
            data: [56, 66, 84, 22, 11, 45, 44],
            type: "line",
            name: "用户量",
            smooth: true,
            lineArea: {
              show: true,
              gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"],
            },
            linePoint: {
              radius: 4,
              style: {
                fill: "#00db95",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="less">
.top-middle-cmp {
  position: relative;
  padding: 0px;
  box-sizing: border-box;

  .chart-name {
    position: absolute;
    right: 170px;
    text-align: right;
    font-size: 20px;
    top: 10px;
  }
}
</style>
