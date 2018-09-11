<template>
    <div class="ncopr">
        <div class="headm">
            <div class="ngicm">
                <img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png" alt="">
                <h1 class="acnti">小特机器人</h1>
                <div class="ngspn">@xiaote</div>
                <i class="iconfont icon-shezhi"></i>
            </div>
            <ul class="sfun">
                <li v-for="(item,index) of vList" :key="index" :class="{sun: item.title==$route.name}">
                    <router-link :to="item.url">{{item.title}}</router-link>
                </li>
            </ul>
        </div>
        <div class="sbon">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            vList:[
                {
                    title:'消息',
                    url:'/A_news/xtjq/xai/'
                },
                {
                    title:'文件',
                    url:'/A_news/xtjq/wj'
                },
                {
                    title:'固定消息',
                    url:'/A_news/xtjq/gdx'
                }
            ]
        }
    }
}
</script>

<style  lang='scss' scoped>
    .ncopr{
        position: absolute;
        top: 0;
        left: 240px;
        width: 100%;
        height: 100%;
        overflow: hidden;
        .headm{
            height: 86px;
            display: block;
            padding: 0 15px;
            position: relative;
            background: rgba(253,253,253,.95);
            .ngicm{
                height: 50px;
                line-height: 50px;
                width: 940px;
                overflow: hidden;
                img{
                    width: 24px;
                    height: 24px;
                    display: block;
                    margin: 14px 6px 4px 0;
                    border-radius: 24px;
                    float: left;
                }
                .acnti{
                    color: #333;
                    font-size: 16px;
                    line-height: 50px;
                    float: left;
                }
                .ngspn{
                    float: left;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    display: block;
                    line-height: 50px;
                    padding: 0 10px;
                    color: #aaa;
                }
                i{
                    margin-right: 20px;
                    line-height: 50px;
                    float: right;
                    padding: 0 10px;
                    vertical-align: middle;
                    color: #ddd;
                }
            }
            .sfun{
                padding: 0 20px;
                display: block;
                li{
                    float: left;
                    display: block;
                    position: relative;
                    font-size: 14px;
                    a{
                        min-width: 80px;
                        text-align: center;
                        margin-right: 22px;
                        padding: 5px 9px 9px;
                    }
                }
                li.sun a{
                    border-bottom: solid 2px #22d7bb;
                    color: #22d7bb;
                }
            }
        }
        .sbon{
            position: absolute;
            top: 86px;
            left: 0;
            right: 0;
            bottom: 0;
            width: 940px;
            background: #fdfdfd;
            margin: 15px;
            box-sizing: border-box;
        }
    }
</style>
