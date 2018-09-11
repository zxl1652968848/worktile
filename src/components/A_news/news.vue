<template>
    <div>
        <div class="mabody">
            <div class="ncopl">
                <div class="header">
                    <span class="htitl">
                        消息
                        <i class="iconfont icon-lingdang-xianxing"></i>
                    </span>
                    <div class="tjnr">
                        <i class="iconfont icon-new"></i>
                    </div>
                </div>
                <div class="bolit">
                    <div class="sear">
                        <i class="iconfont icon-icon-test"></i>
                        <input type="text" placeholder="搜索成员、消息">
                    </div>
                    <ul class="chatl">
                        <li  v-for="(item,index) of vList" :key="index" :class="{active: item.title==$route.name}">
                            <router-link :to="item.url">
                                <img :src="item.img" alt="">
                                <div class="cylb">{{item.title}}</div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
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
                        title:'小特机器人',
                        url:'/A_news/xtjq/',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png'
                    },
                    {
                        title:'企业公告',
                        url:'/A_news/qygg/',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png'
                    },
                    {
                        title:'项目助手',
                        url:'/A_news/ower/',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png'
                    },
                    {
                        title:'网盘助手',
                        url:'/A_news/wqzs/',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png'
                    },
                    {
                        title:'日程助手',
                        url:'/A_news/rczs/',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_40x40.png'
                    }
                ]
            }
        }
    }
</script>

<style lang='scss' scoped>
    .mabody{
        background-image: url("https://cdn.worktile.com/pro/image/app/desktop.background/desktop-1.jpg?v=7.0.3+20180830");
        position: relative;
        width:100%;
        height: 100%;
        overflow: hidden;
        .ncopl{
            position: relative;
            width: 240px;
            height: 100%;
            background: rgba(253,253,253,.95);
            border-right: 1px solid #ddd;
            transition: width .2s ease-in-out;
            float: left;
            .header{
                height: 50px;
                .htitl{
                    float: left;
                    margin: 0 20px;
                    color: #333;
                    line-height: 50px;
                    font-size: 16px;
                }
                .tjnr{
                    float: right;
                    margin: 0 20px;
                    line-height: 50px;
                    i:hover{
                        color: #22d7bb;
                    }
                }
            }
            .bolit{
                margin-bottom: 3px;
                height: 100%;
                .sear{
                    padding: 0 20px 10px;
                    position: relative;
                    i{
                        display: inline-block;
                        position: absolute;
                        top: 6px;
                        left: 30px;
                        color: #8f8f8f;
                    }
                    input{
                        background: #f3f3f3;
                        box-shadow: none;
                        color: #666;
                        height: 36px;
                        font-size: 14px;
                        padding-left: 28px;
                        border-radius: 20px;
                        border: 1px solid transparent;
                    }
                }
                .chatl{
                    margin-top: 10px;
                    width: 240px;
                    li{
                        position: relative;
                        display: block;
                        a{
                            border-radius: 0;
                            color: #666;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            position: relative;
                            padding: 11px 0 11px 30px;
                            line-height: 22px;
                            border-right: 4px solid transparent;
                            display: block;
                            img{
                                width: 24px;
                                height: 24px;
                                line-height: 24px;
                                border-radius: 24px;
                                float: left;
                            }
                            .cylb{
                                line-height: 24px;
                                margin-left: 5px;
                                max-width: 130px;
                                overflow: hidden;
                                float: left;
                            }
                        }
                    }
                    li.active a{
                        background: #e7f9f6;
                        color: #22d7bb;
                        border-right: 4px solid #22d7bb;
                    }
                }
            }
        }
    }
</style>