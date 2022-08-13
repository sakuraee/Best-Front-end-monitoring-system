<template>
<header>
    <div class="l-content">
        <h5 style="color:#fff">异常数据 / 资源异常</h5>
    </div>
    <div class="r-content">
        <el-dropdown trigger="click" size="mini">
            <span>     
                <i class="iconfont el-icon-s-custom" ></i>
            </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
        </el-dropdown>

    </div>
</header>


</template>

<style lang="less" scoped>
header{
    display: flex;
    height: 100%;
    justify-content: space-between;
    align-items: center;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    
    }
    
}
.r-content{
    .iconfont{
        display: flex;
        align-items: center;
        width: 30px;
        height: 30px;
        // size:50×50;
        border-radius: 50%;
        color: #fff;
    }
}

</style>