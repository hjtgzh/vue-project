<template>
    <div class="layout-wrap">
        <el-menu class="el-menu-vertical-demo" @select="handleSelect" :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <span slot="title">分组一</span>
                    <el-menu-item index="table">列表</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <span slot="title">选项4</span>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-setting"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
        <div class="collapse-wrap" :class="[ isCollapse ? 'collapsed' : '']" @click="handleCollapse">
            <i :class="[ isCollapse ? 'el-icon-d-arrow-left' : 'el-icon-d-arrow-right']"></i>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isCollapse: false
            }
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath)
                this.$router.push('/table')
            },
            handleCollapse () {
                this.isCollapse = !this.isCollapse
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .layout-wrap{
        position: absolute;
        text-align: left;
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
        }
        .collapse-wrap{
            display: flex;
            justify-content: flex-end;
            background: #f5f5f5;
            cursor: pointer;
            .el-icon-d-arrow-left, .el-icon-d-arrow-right{
                font-size: 20px;
            }
        }
        .collapsed{
            width: 64px;
        }
    }
</style>
