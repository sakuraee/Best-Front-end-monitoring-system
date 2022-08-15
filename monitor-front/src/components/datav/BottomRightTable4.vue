<template>
  <div class="bottom-right-table-4">
    <dv-border-box-6>
      <div class="table-name"><img src="./img/icon4.png" />系统版本用户量</div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: "BottomRightTable4",
  data() {
    return {
      config: {
        data: [
          ["web", "7566"],
          ["Android 6.0.1", "5646"],
          ["ios 9.1", "4334"],
          ["ios 10.1", "3454"],
          ["ios 13.2.3", "2786"],
          ["Android 9.0", "123"],
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
.bottom-right-table-4 {
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
