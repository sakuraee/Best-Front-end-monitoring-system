<template>
  <el-row :gutter="0">
    <el-row style="margin: 20px">
      <el-button type="primary">添加网站</el-button>
    </el-row>
    <el-row>
      <el-card style="height: 400px">
        <el-col
          :span="12"
          :gutter="20"
          :body-style="{ display: 'flex', padding: 0, border: 0 }"
          v-for="item in list"
          :key="item.id"
        >
          <el-card style="height: 358px; width: 358px; margin-left: 80px">
            <div class="card-header">
              <div class="card-header-info">
                <span class="card-header-name" @click="back">{{
                  item.name
                }}</span>
                <span class="card-header-id">ID:{{ item.id }}</span>
              </div>
              <div>
                <i :class="'el-icon-setting'"></i>
                <i :class="'el-icon-delete'"></i>
              </div>
            </div>
            <el-row class="user-info" style="text-align: center">
              <el-col :span="6">
                <div class="user-count-first">{{ item.activeUser }}</div>
                <div class="user-info-text">活跃用户</div>
              </el-col>
              <el-col :span="6">
                <div class="user-count">{{ item.userCount }}</div>
                <div class="user-info-text">用户总数</div>
              </el-col>
              <el-col :span="6">
                <div class="user-count">{{ item.oldUser }}</div>
                <div class="user-info-text">老用户</div>
              </el-col>
              <el-col :span="6">
                <div class="user-count">{{ item.newUser }}</div>
                <div class="user-info-text">新用户</div>
              </el-col>
            </el-row>
            <div class="score">
              <div class="score-title">健康总分</div>
              <div class="score-info">
                <el-col :span="24">
                  <div class="score">
                    <el-progress
                      type="circle"
                      :percentage="item.overall"
                      :format="format"
                      :color="colors"
                      :width="80"
                    >
                      <template #default="{ percentage }">
                        <span style="margin-top: 10px">{{ percentage }}</span>
                      </template>
                    </el-progress>
                  </div>
                </el-col>
                <el-col :span="24">
                  <el-row :gutter="20" style="margin-bottom: 5 px">
                    <el-col :span="12">
                      <span class="error-text">js报错率:</span>
                      <span class="error-rate">{{ item.jsErrorRate }}%</span>
                    </el-col>
                    <el-col :span="12">
                      <span class="error-text">静态资源报错率:</span>
                      <span class="error-rate"
                        >{{ item.staticErrorRate }}%</span
                      >
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="12">
                      <span class="error-text">接口报错率:</span>
                      <span class="error-rate"
                        >{{ item.interfactErrorRate }}%</span
                      >
                    </el-col>
                    <el-col :span="12">
                      <span class="error-text">白屏报错率:</span>
                      <span class="error-rate"
                        >{{ item.whiteScreenError }}%</span
                      >
                    </el-col>
                  </el-row>
                </el-col>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-card>
    </el-row>

    <el-row> </el-row>
  </el-row>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header-name {
  font-size: 28px;
  font-weight: 600;
  margin-right: 5px;
}

.card-header-id {
  color: grey;
}

.card-header i {
  font-size: 20px;
  padding: 5px;
}

.user-info {
  margin: 20px auto;
}

.user-info .user-info-text {
  font-size: 13px;
  color: #888;
}

.user-info .user-count {
  font-weight: 500;
  font-size: 18px;
}
.user-info .user-count-first {
  font-size: 18px;
  color: red;
}

.score-title {
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 600;
}

.error-text {
  color: #999;
  font-size: 17px;
}
.error-rate {
  font-size: 17px;
}
</style>

<script>
export default {
  name: "home",
  data() {
    return {
      colors: [
        { color: "#f56c6c", percentage: 50 },
        { color: "#e6a23c", percentage: 80 },
        { color: "#7cd88a", percentage: 100 },
      ],
      list: [
        {
          name: "SDK脚本测试网站",
          id: "1018",
          activeUser: 2845,
          userCount: 260000,
          oldUser: 174000,
          newUser: 86000,
          jsErrorRate: 5,
          staticErrorRate: 5,
          interfactErrorRate: 10,
          whiteScreenError: 3,
          overall: 94,
        },
        {
          name: "监控系统",
          id: "1032",
          activeUser: 2235,
          userCount: 2000,
          oldUser: 1700,
          newUser: 300,
          jsErrorRate: 5,
          staticErrorRate: 5,
          interfactErrorRate: 10,
          whiteScreenError: 3,
          overall: 94,
        },
      ],
    };
  },
  methods: {
    back() {
      this.$router.push("/bigscreen");
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}`;
    },
  },
};
</script>