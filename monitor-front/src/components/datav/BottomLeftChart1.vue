<template>
  <div class="bottom-left-chart-1">
    <div class="header-name">健康状况</div>
    <div class="details-value"><span>99.01</span>分</div>
    <dv-charts :option="option" />
  </div>
</template>

<script>
export default {
  name: "BottomLeftChart1",
  data() {
    return {
      option: {
        series: [
          {
            type: "pie",
            data: [
              { name: "JS异常", value: 93, radius: ["30%", "33%"] },
              { name: "接口异常", value: 65, radius: ["32%", "35%"] },
              { name: "资源异常", value: 32, radius: ["31%", "37%"] },
              { name: "自定义异常", value: 44, radius: ["31%", "32%"] },
              { name: "其它", value: 52, radius: ["32%", "35%"] },
            ],
            outsideLabel: {
              labelLineEndLength: 20,
              formatter: "{percent}%\n{name}",
              style: {
                fill: "#fff",
              },
            },
          },
          {
            name: "decoration ring",
            type: "pie",
            data: [{ value: 10, radius: ["50%", "53%"] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: "rgba(255, 255, 255, 0.2)",
            },
          },
          {
            name: "decoration ring",
            type: "pie",
            data: [{ value: 10, radius: ["45%", "46%"] }],
            outsideLabel: {
              show: false,
            },
            pieStyle: {
              fill: "rgba(255, 255, 255, 0.2)",
            },
          },
        ],
        color: ["#00c0ff", "#3de7c9", "#fff", "#00c0ff", "#3de7c9", "#fff"],
      },
    };
  },
};
</script>

<style lang="less">
.bottom-left-chart-1 {
  position: relative;

  .header-name {
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
  }

  .details-value {
    height: 40px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    span {
      color: #00c0ff;
      font-size: 35px;
    }
  }

  .dv-charts-container {
    height: calc(~"100% - 190px");
  }

  .decoration-ring {
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid fade(#fefefe, 30);
    top: 190px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
