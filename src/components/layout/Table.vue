<template>
    <div>
        <!-- <div>{{ this.number }}</div> -->
        <el-table
            :data="tableList"
            style="width: 100%"
            height="500"
            stripe
        >
            <el-table-column
                prop="name"
                label="姓名"
                width="180"
            >
            </el-table-column>
            <el-table-column
                prop="age"
                label="年龄"
                sortable
                width="180"
            >
            </el-table-column>
            <el-table-column
                prop="phoneNumber"
                label="电话"
                width="180"
            >
            </el-table-column>
            <el-table-column
                prop="nickName"
                label="昵称"
                width="180"
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="180"
            >
            </el-table-column>
        </el-table>
        <el-pagination
            layout="prev, pager, next"
            :total="50">
        </el-pagination>
    </div>
</template>

<script>
    // 在单独构建的版本中辅助函数为 Vuex.mapState
    // import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
    import { mapState, mapActions } from 'vuex';
    import { getTableData } from '../../service/getData';

    export default {
        data () {
            return {
                tableList: [],
                data: {
                    // number: 20
                }
            };
        },
        methods: {
            formatter (row, column) {
                return row.address;
            },
            filterTag (value, row) {
                return row.tag === value;
            },
            ...mapActions([
                'increment' // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
                // `mapActions` 也支持载荷：将 `this.increment(amount)` 映射为 `this.$store.dispatch('increment', amount)`
            ])
            // ...mapMutations([
            //     'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
            //     // `mapMutations` 也支持载荷：将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
            // ])
        },
        computed: {
            ...mapState([
                // 映射 this.number 为 store.state.number
                'number'
            ])
            // mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
            // ...mapGetters([
            //     'newCount'
            // ])
        },
        mounted () {
            this.increment(this.data); // 请求number数据的action
            // 获取table列表数据
            getTableData().then(res => {
                this.tableList = res.list;
            });
        }
        // beforeCreate () {
        //     console.log('beforeCreate 钩子执行...');
        // },
        // cteated () {
        //     console.log('cteated 钩子执行...');
        // },
        // beforeMount () {
        //     console.log('beforeMount 钩子执行...');
        // },
        // mounted () {
        //     console.log('mounted 钩子执行...');
        // },
        // beforeUpdate () {
        //     console.log('beforeUpdate 钩子执行...');
        // },
        // updated () {
        //     console.log('updated 钩子执行...');
        // },
        // beforeDestroy () {
        //     console.log('beforeDestroy 钩子执行...');
        // },
        // destroyed () {
        //     console.log('destroyed 钩子执行...');
        // }
    };
</script>