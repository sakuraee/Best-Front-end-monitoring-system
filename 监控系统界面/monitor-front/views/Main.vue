<template>
<el-container style="height:100">

  <el-aside width="auto">
    <common-aside></common-aside>
  </el-aside>

  <el-container>
    <el-header height="40px">
      <common-header></common-header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</el-container>
</template>

<script>
import CommonAside from '../src/components/CommonAside.vue'
import CommonHeader from '../src/components/CommonHeader.vue'
export default{
    name:'Home',
    components:{
        CommonAside,
        CommonHeader
    },
    data(){
        return {}

    }

}
</script>

<style lang="less" scoped>
.el-header{
    background-color: #2B2F3A;
}
.el-main{
    padding-top:0;
    background-color: #EAEAEA;
}


</style>