<template>
  <el-tab-pane label="页面一">
    <el-row class="page" :gutter="0" justify="space-between">
      <el-col :span="24" style="margin-top: 20px">
        <div class="metric">
          <el-card style="height: 608px">
            <el-col
              :offset="1"
              :body-style="{ display: 'flex', padding: 0, border: 0 }"
              style="margin-top: 0px"
              :span="3.8"
              justify="space-between"
            >
              <div class="card">
                <el-card>
                  <div class="detail">
                    <p class="txt">平均网络耗时</p>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col
              :offset="1"
              :body-style="{ display: 'flex', padding: 0, border: 0 }"
              style="margin-top: 0px"
              :span="3.8"
              justify="space-between"
            >
              <div class="card">
                <el-card>
                  <div class="detail">
                    <p class="txt">平均网络耗时</p>
                  </div>
                </el-card>
              </div>
            </el-col>
            <div
              style="height: 408px; margin-top: 200px"
              ref="Linecharts"
            ></div>
          </el-card>
        </div>
        <!-- </el-card> -->
      </el-col>
    </el-row>
  </el-tab-pane>
</template>

<script>
export default {
  name: "User",
  data() {
    return {};
  },
};
</script>