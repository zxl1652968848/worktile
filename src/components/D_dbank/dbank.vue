<template>
    <div>
        <div class="main-body-slide">
            <div class="header">
                <span class="title">网盘</span>
            </div>
            <div class="body-list">
                <div class="search-area">
                    <i class="lcfont lc-search"></i>
                    <input type="text" class="form-control" placeholder="搜索文件、文件夹">
                </div>
                <!-- 文件夹 -->
                <div class="section">
                    <ul class="lc-tree folder">
                        <li class="disk" v-for="items of list">
                            <router-link :to='items.url' class="company">
                                <span>
                                    <i></i>
                                </span>
                                <i class="wtf"></i>
                                <span class="qtitle">
                                    {{items.title}}
                                </span>
                            </router-link>
                            <!-- <ul class="ncompany">
                                <li class="system">
                                    <a href="javascript:;">
                                        <span class="qtitle">
                                            公司制度
                                        </span>
                                    </a>
                                </li>
                                 <li class="system">
                                    <a href="javascript:;">
                                        <span class="qtitle">
                                           缺陷管理
                                        </span>
                                    </a>
                                </li>
                                 <li class="system">
                                    <a href="javascript:;">
                                        <span class="qtitle">
                                            资料共享
                                        </span>
                                    </a>
                                </li>
                            </ul> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main-body-center">
            <div class="module-wrapper">
                <div class="module-header">
                    <div class="title">
                        <a href="javascript:;">
                            企业网盘
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </div>
                </div>
                <div class="module-body">
                    <router-view class="module-body-content"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dbank",
        data(){
            return {
                list:[
                    {
                        title:'企业网盘',
                        url:'/D_dbank/company'
                    },
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
                        url:''
                    },
                    {
                        title:'回收站',
                        url:''
                    }
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
    .body-list .search-area i.lc-search{
        position: absolute;
        top: 6px;
        left: 30px;
        color: #8f8f8f;
    }
    .lc-search:before{
        content: "\e619"
    }
    lcfont{
        font-family: lcfont !important;
        display: inline-block;
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
    .main-body-center{
       position: absolute;
       top: 0;
       left: 240px;
       width: 100%;
       height: 100%;
    }
    .main-body-center .module-header{
        height: 50px;
        width: 100%;
        padding: 0 15px;
        position: relative;
        background: rgba(253,253,253,.95);
    }
    .main-body-center .module-header .title{
        font-size: 14px;
        text-overflow:ellipsis;
        overflow: hidden;
        line-height: 50px;
        color: #333;
        float: left;
    }
    .module-body{
        margin: 15px;
        padding-right: 15px;
    }
    .module-body .module-body-content{
        width: 100%;
        height: 100%;
    }
    .main-body-center{
        background-color: #ddd;
    }
    .main-body-center .module-wrapper{
        width: 100%;
        height: 100%;
    }
    .main-body-center .module-wrapper .module-body{
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
</style>