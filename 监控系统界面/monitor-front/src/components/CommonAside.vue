<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    background-color="#2B2F3A"
    text-color="#fff"
    active-text-color="#00ccff"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    :router="true"
  >
    <h3>{{ isCollapse ? "后台" : "前端性能监控系统" }}</h3>
    <el-menu-item
      v-for="item in noChildren"
      :index="index.path + ''"
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- <el-menu-item @click="clickMenu(item)" index="1">
      <i class="el-icon-menu"></i>
      <span slot="title">数据</span>
    </el-menu-item> -->
    <el-menu-item index="/bigscreen">
      <i class="el-icon-setting"></i>
      <span slot="title">数据概览</span>
    </el-menu-item>

    <el-submenu
      v-for="item in hasChildren"
      :index="item.path + ''"
      :key="item.path"
    >
      <template slot="title">
        <!-- <i class="el-icon-location"></i>
      <span slot="title">异常数据</span> -->
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="(subItem, subIndex) in item.children"
        :key="subItem.path + ''"
      >
        <!-- <i :class="'el-icon-' + subItem.icon"></i> -->
        <el-menu-item :index="subIndex + ''" @click="clickMenu(subItem)">{{
          subItem.label
        }}</el-menu-item>
        <!-- <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
      <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item>
      <el-menu-item :index="subIndex">{{subItem.label}}</el-menu-item> -->
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="/performance">
      <i class="el-icon-setting"></i>
      <span slot="title">性能数据</span>
    </el-menu-item>

    <el-menu-item index="/http">
      <i class="el-icon-setting"></i>
      <span slot="title">HTTP请求数据</span>
    </el-menu-item>

    <el-menu-item @click="clickMenu2('userData')" index="/userData">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">用户行为数据</span>
      </template>
    </el-menu-item>

    <el-menu-item index="6"> </el-menu-item>
    <el-menu-item index="6"> </el-menu-item>
    <!-- <el-menu-item index="6"> </el-menu-item>
    <el-menu-item index="6"> </el-menu-item>
    <el-menu-item index="6"> </el-menu-item>
    <el-menu-item index="6"> </el-menu-item> -->
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  border: none;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      index: 0,
      label: "默认",
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/home",
        },
        // {
        //   path: "/bigscreen",
        //   name: "bigscreen",
        //   label: "数据概览",
        //   icon: "location",
        //   url: "Bigscreen/bigscreen",
        // },
        {
          label: "异常数据",
          icon: "location",
          children: [
            {
              path: "/jsError",
              name: "jsError",
              label: "JS异常",
              icon: "setting",
              url: "errorData/jsError",
            },
            {
              path: "/apiError",
              name: "apiError",
              label: "接口异常",
              icon: "setting",
              url: "errorData/apiError",
            },

            {
              path: "/srcError",
              name: "srcError",
              label: "资源异常",
              icon: "setting",
              url: "errorData/Error",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      this.$router.push({
        name: item.name,
      });
    },
  },
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>