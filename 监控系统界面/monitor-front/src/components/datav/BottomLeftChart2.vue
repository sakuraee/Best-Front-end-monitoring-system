<template>
  <div class="bottom-left-chart-2">
    <div class="header-name">页面加载平均耗时</div>
    <div class="details-value"><span>1.83</span>s</div>
    <dv-charts style="width: 250px" :option="option" />
  </div>
</template>

<script>
export default {
  name: "BottomLeftChart2",
  data() {
    return {
      option: {
        series: [
          {
            type: "gauge",
            startAngle: -Math.PI / 2,
            endAngle: Math.PI * 1.5,
            arcLineWidth: 7,
            data: [
              {
                name: "<1秒",
                value: 25,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
              },
              {
                name: "1-5秒",
                value: 45,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius: "52%",
              },
              {
                name: "5-10秒",
                value: 65,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius: "44%",
              },
              {
                name: "10-30秒",
                value: 35,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius: "36%",
              },
              {
                name: ">30秒",
                value: 25,
                gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
                radius: "28%",
              },
            ],
            axisLabel: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            pointer: {
              show: false,
            },
            dataItemStyle: {
              lineCap: "round",
            },
            backgroundArc: {
              show: false,
            },
            details: {
              show: true,
              formatter: "{name}",
              position: "start",
              offset: [-10, 0],
              style: {
                fill: "#fff",
                fontSize: 12,
                textAlign: "right",
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
.bottom-left-chart-2 {
  .header-name {
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
  }

  .details-value {
    height: 40px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;

    span {
      color: #00c0ff;
      font-size: 35px;
    }
  }

  .dv-charts-container {
    height: calc(~"100% - 150px");
    width: calc(~"100% - 150px");
    // margin-right: 1000px;
  }
}
</style>
