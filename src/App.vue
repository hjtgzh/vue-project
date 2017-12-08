<template>
    <div id="app">
        <div class="nav-wrap">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router>
                <el-menu-item index="home">首页</el-menu-item>
                <el-menu-item index="layout">布局</el-menu-item>
                <el-menu-item index="1">处理中心</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3">订单管理</el-menu-item>
            </el-menu>
        </div>
        <div class="content-wrap">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                activeIndex: 'home'
            }
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped lang="less">
    #app {
        position: relative;
        height: 100%;
        .nav-wrap{
            position: fixed;
            width: 100%;
            z-index: 1;
            .el-menu--horizontal{
                .el-menu-item{
                    box-sizing: border-box;
                }
            }
        }
        .content-wrap{
            position: relative;
            top: 60px;
            height: calc(~'100% - 60px');
            overflow: hidden;
        }
    }
</style>
