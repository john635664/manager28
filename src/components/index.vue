<template>
    <el-container class="index-container">
        <el-header class="index-header">
            <el-row>
                <el-col :span="4">
                    <div class="grid-content bg-purple">
                        <img src="../assets/logo.png" alt="">
                    </div>
                </el-col>
                <el-col :span="16" class="header-center"><div class="grid-content bg-purple-light">电商后台管理系统</div></el-col>
                <el-col :span="4" class="header-right">
                    <div class="grid-content bg-purple">
                        <el-button type="danger" plain @click="logout">退出</el-button>
                    </div>
                </el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px" class="index-aside">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main class="index-main">Main</el-main>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        beforeCreate(){
            if (window.sessionStorage.getItem("token")){

            }else {
                this.$message.warning("哥们，不能访问哦");
                setTimeout(() => {
                    // 回到登录页 编程式导航
                    this.$router.push("/login");
                }, 500);
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            logout(){
                this.$confirm('你确定要退出吗?', '提示', {
                    confirmButtonText: '残忍退出',
                    cancelButtonText: '好心留下',
                    type: 'warning'
                }).then(() => {
                    window.sessionStorage.removeItem("token");
                    this.$router.push("/login");
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '你真好'
                    });
                });
            }
        }
    }
</script>

<style>
    .index-container{
        height: 100%;
    }
    .index-header{
        height: 60px;
        background-color: #b3c0d1;
        line-height: 60px;
    }
    .header-center{
        text-align: center;
        font-size: 30px;
        color: white;
        font-weight: bold;
    }
    .header-right{
        text-align: right;
    }
    .index-main{
        background-color: #e9eef3;
    }
</style>