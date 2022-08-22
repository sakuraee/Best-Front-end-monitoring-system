<template>
  <div class="bottom-right-table-3">
    <dv-border-box-6>
      <div class="table-name"><img src="./img/icon3.png" />设备型号用户量</div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: "BottomRightTable3",
  data() {
    return {
      config: {
        data: [
          ["Huawei", "13354"],
          ["iphone 6/7/8 Plus", "9656"],
          ["iphone X/S/Max", "9623"],
          ["Honor", "5265"],
          ["OPPO", "4321"],
          ["VIVO", "3512"],
        ],
        index: true,
        columnWidth: [30, 100],
        align: ["center"],
        oddRowBGC: "rgba(9, 37, 50, 0.4)",
        evenRowBGC: "rgba(10, 32, 50, 0.3)",
      },
    };
  },
};
</script>

<style lang="less">
.bottom-right-table-3 {
  width: calc(~"25% + 10px");
  height: 100%;
  margin: 0 -5px;

  .border-box-content {
    padding: 10px;
    box-sizing: border-box;
  }

  .table-name {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }

  .dv-scroll-board {
    height: calc(~"100% - 60px");
  }
}
</style>
