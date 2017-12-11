<template>
  	<div class="carousel-wrap">
        <el-carousel trigger="click" height="200px" indicator-position="outside" :interval="5000">
            <el-carousel-item v-for="(item, index) in srcs" :key="index">
                <div class="img-wrap">
                    <a :href="item.href">
                        <img :src="item.src" title="百度搜索"/>
                    </a>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                srcs: [
                    {href: 'https://www.baidu.com/?tn=95846469_hao_pg', src: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png'},
                    {href: 'https://www.jd.com/', src: 'https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d7924a4e8013632715edc535a9b4c7d1/838ba61ea8d3fd1f877974a83a4e251f95ca5f34.jpg'},
                    {href: 'http://www.qq.com/', src: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ce79769a30f33a879e6d071cfe677705/34fae6cd7b899e5114f3cfbe48a7d933c8950d1e.jpg'},
                    {href: 'https://baike.baidu.com/item/%E4%B9%9D%E5%B7%9E%C2%B7%E6%B5%B7%E4%B8%8A%E7%89%A7%E4%BA%91%E8%AE%B0/18558448?fr=aladdin&fromid=16742894&fromtitle=%E6%B5%B7%E4%B8%8A%E7%89%A7%E4%BA%91%E8%AE%B0', src: 'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/h%3D250/sign=63f3c5378fd6277ff612353d183a1f63/500fd9f9d72a6059c1dfb0962034349b023bba6b.jpg'}
                ]
            };
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .carousel-wrap{
        .el-carousel{
            .el-carousel__item{
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .img-wrap{
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    height: 100px;
                    display: block;
                }
            }
        }
    }
</style>
