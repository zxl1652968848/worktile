<template>
    <div>
        <div class="main-body-slide">
            <div class="header">
                <span class="title">网盘</span>
            </div>
            <div class="body-list">
                <div class="search-area">
                    <font-awesome-icon icon="search" class="search" />
                    <input type="text" class="form-control" placeholder="搜索文件、文件夹">
                </div>
                <!-- 文件夹 -->
                <div class="section">
                    <ul class="lc-tree folder">
                        <li class="disk" v-for="items of lis" @click='show=!show'>
                            <router-link :to='items.url' class="company">
                                <span>
                                    <font-awesome-icon icon="caret-right" color='#ccc' />
                                </span>
                                <font-awesome-icon icon="folder" color='#22d7bb' />
                                <span class="qtitle">
                                    {{items.title}}
                                </span>
                            </router-link>  
                        </li>
                        <ul class="ncompany" v-show='show'>
                            <li class="system" v-for='item of ncom'>
                                <router-link :to='item.url'>
                                    <font-awesome-icon icon="caret-right" style='color:#aaa;font-size:16px !important' />
                                    <font-awesome-icon icon="folder" :style='{color:item.class}' />
                                    <span class="qtitle">
                                        {{item.title}}
                                    </span>
                                </router-link>
                            </li>
                        </ul>
                        <li class="disk" v-for='item of list'>
                            <router-link :to='item.url' class="company">
                                <font-awesome-icon icon="caret-right" style='color:#ddd;font-size:16px !important' />
                                <font-awesome-icon icon="folder" style='color:rgb(249, 105, 170);font-size:16px !important' />
                                <span class="qtitle">
                                    {{item.title}}
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <router-view class="main-body-content"></router-view>
    </div>
</template>

<script>
    export default {
        name: "dbank",
        data(){
            return {
                show:false,
                lis:[
                    {
                        title:'企业网盘',
                        url:'/D_dbank/company'
                    }
                ],
                list:[
                    {
                        title:'个人网盘',
                        url:'/D_dbank/people'
                    },
                    {
                        title:'成员',
                        url:''
                    },
                    {
                        title:'标签',
                        url:''
                    },
                    {
                        title:'与我共享',
                        url:'/D_dbank/share'
                    },
                    {
                        title:'回收站',
                        url:'/D_dbank/trash'
                    }
                ],
                ncom:[
                    {
                        title:'公司制度',
                        class:'rgb(148, 115, 253)',
                        url:'/D_dbank/company/system'
                    },
                    {
                        title:'资料共享',
                        class:'rgb(34, 215, 187)',
                        url:'/D_dbank/company/ziliao'
                    },
                    {
                        title:'缺陷管理',
                        class:'rgb(148, 115, 253)',
                        url:'/D_dbank/company/manage'
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .main-body-slide{
        position: relative;
        width: 240px;
        height: 100%;
        background: rgba(253,253,253,.95);
        border-right: 1px solid #ddd;
    }
    .main-body-slide .header{
        height: 50px;
    }
    .main-body-slide .header .title{
        float: left;
        margin: 0 20px;
        color: #333;
        line-height: 50px;
        font-size: 16px;
    }
    .body-list{
        overflow: hidden;
        margin-bottom: 3px;
    }
    .body-list .search-area{
        padding: 0 20px 10px;
        position: relative;
    }
    .body-list .search-area .search{
        position: absolute;
        top: 10px;
        left: 30px;
        color: #8f8f8f;
    }
    .body-list .search-area input{
        background: #f3f3f3;
        box-shadow: none;
        color: #666;
        height: 36px;
        font-size: 14px;
        padding-left: 28px;
        border-radius: 20px;
        border: 1px solid transparent;
    }
    .body-list .search-area input:hover{
        background: #fdfdfd;
        border: 1px solid #ddd;
    }
    .section{
        margin-bottom: 2px;
    }
    .section .company{
        padding: 8px 10px 8px 18px;
        line-height: 24px;
        padding-left: 20px !important;
        color: #666;
        transition: all .2s;
        width: 100%;
        box-sizing: border-box;
    }
    .router-link-active{
        color: #22d7bb;
        background-color: #e7f9f6;
        border-right: 4px solid #22d7bb;
    }
    .section a{
        display: inline-block;
    }
    .lc-tree ul li{
        height: 41px;
        line-height: 40px;
    }
    .lc-tree ul li a{
        padding-left: 40px !important;
        width: 100%;
    }
    .lc-tree a:hover{
        background: 0 0 !important;
        box-shadow: 0 0 8px 2px #eee;
        color: #333;
    }
    .main-body-content{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 240px;
        top: 0;
    }
</style>