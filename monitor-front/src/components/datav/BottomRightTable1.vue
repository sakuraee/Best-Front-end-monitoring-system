<template>
  <div class="bottom-right-table-1">
    <dv-border-box-6>
      <div class="table-name"><img src="./img/icon1.png" />网站访问量</div>

      <dv-scroll-board :config="config" />
    </dv-border-box-6>
  </div>
</template>

<script>
export default {
  name: "BottomRightTable1",
  data() {
    return {
      config: {
        data: [
          ["今日头条", "6563"],
          ["抖音", "6253"],
          ["掘金", "4358"],
          ["西瓜视频", "1235"],
          ["悟空问答", "1035"],
          ["多闪", "685"],
          ["IEEE", "6563"],
          ["Brower", "6253"],
          ["Spring", "4358"],
          ["kaggle", "1235"],
          ["GitHub", "1035"],
          ["Leetcode", "685"],
        ],
        index: true,
        columnWidth: [30, 70],
        align: ["center"],
        oddRowBGC: "rgba(9, 37, 50, 0.4)",
        evenRowBGC: "rgba(10, 32, 50, 0.3)",
      },
    };
  },
};
</script>

<style lang="less">
.bottom-right-table-1 {
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
