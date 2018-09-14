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
                        <li class="disk" v-for="items of lis">
                            <router-link :to='items.url' class="company">
                                <span>
                                    <font-awesome-icon icon="caret-right" color='#ccc' @click='show=!show' :class='{rotate:show}'/>
                                </span>
                                <font-awesome-icon icon="folder" color='#22d7bb' />
                                <span class="qtitle">
                                    {{items.title}}
                                </span>
                            </router-link>  
                        </li>
                        <ul class="ncompany" v-show='show'>
                            <li class="system" v-for='item of ncom1'>
                                <router-link :to='item.url'>
                                    <font-awesome-icon icon="caret-right" style='color:#aaa;font-size:16px !important' @click='shows=!shows' :class='{rotate:shows}'/>
                                    <font-awesome-icon icon="folder" :style='{color:item.class}' />
                                    <span class="qtitle">
                                        {{item.title}}
                                    </span>
                                </router-link>
                            </li>
                            <ul class="ncompany" v-show='shows'>
                                <li v-for='item of ncom3'>
                                    <router-link :to='item.url' style='padding-left:60px !important'>
                                        <font-awesome-icon icon="folder" :style='{color:item.class}' />
                                        <span class="qtitle">
                                            {{item.title}}
                                        </span>
                                </router-link>
                                </li>
                            </ul>
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
                        <li class="disk" v-for='item of liss'>
                            <router-link :to='item.url' class="company">
                                <font-awesome-icon icon="caret-right" style='color:#aaa;font-size:16px !important' @click='ishow=!ishow' :class='{rotate:ishow}'/>
                                <font-awesome-icon icon="folder" style='color:rgb(249, 105, 170);font-size:16px !important' />
                                <span class="qtitle">
                                    {{item.title}}
                                </span>
                            </router-link>
                        </li>
                        <ul class="ncompany" v-show='ishow'>
                            <li class="system" v-for='item of ncom2'>
                                <router-link :to='item.url'>
                                    <font-awesome-icon icon="folder" :style='{color:item.class}' />
                                    <span class="qtitle">
                                        {{item.title}}
                                    </span>
                                </router-link>
                            </li>
                        </ul>
                        <li class="disk" v-for='item of list'>
                            <div class="company">
                                <font-awesome-icon icon="caret-right" style='color:#ddd;font-size:16px !important' />
                                <span class="qtitle">
                                    {{item.title}}
                                </span>
                                <font-awesome-icon icon="plus-circle" style='color:#ddd;font-size:16px !important;margin-left:150px;' class="plus" @click="zz()" />
                            </div>
                        </li>
                        <li class="disk" v-for='item of share'>
                            <router-link :to='item.url' class="company">
                                <font-awesome-icon icon="users" style='color:#ddd' />
                                <span class="qtitle">
                                    {{item.title}}
                                </span>
                            </router-link>
                        </li>
                        <li class="disk" v-for='item of trash'>
                            <router-link :to='item.url' class="company">
                                <font-awesome-icon icon="trash-alt" style='color:#ddd' />
                                <span class="qtitle">
                                    {{item.title}}
                                </span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="main-img">
            <img src="https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830" alt="">
        </div>
        <div v-show="z">
            <div class="z" @click="zz()"></div>
            <div class="set">
                <div class="set-header">
                    <a href="javascript:;" class="set-close" @click="zz()">X</a>
                    <h3 class="set-title">设置关注的成员</h3>
                </div>
                <div class="set-body">
                    <div class="set-members" style="position:relative">
                        <div class="member-panel">
                            <ul>
                                <li class="active">
                                    <a href="javascript:;">团队</a>
                                </li>
                                <li class="driver"></li>
                                <li>
                                    <a href="javascript:;">部门</a>
                                </li>
                            </ul>
                            <div class="member-body">
                                <div class="search">
                                    <font-awesome-icon icon="search" style='position:absolute;left:10px;top:10px'/>
                                    <input type="search" placeholder="搜索成员..." class="form-search" form-search>
                                </div>
                                <ul>
                                    <li style="float:none;font-size:12px;margin-left:-80px;margin-top:10px">全部联系人</li>
                                </ul>
                            </div>
                        </div>
                        <div class="arrow">></div>
                        <div class="select-member">
                            <div class="panel-header">已选择成员</div>
                            <div class="select-body"></div>
                        </div>
                    </div>
                </div>
                <div class="member-action">
                    <button class="confirm">确定</button>
                    <button class="cancel">取消</button>
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
                ishow:false,
                shows:false,
                z:false,
                lis:[
                    {
                        title:'企业网盘',
                        url:'/D_dbank/company'
                    }
                ],
                liss:[
                    {
                        title:'个人网盘',
                        url:'/D_dbank/people'
                    }
                ],
                list:[
                    {
                        title:'成员',
                        url:''
                    },
                    {
                        title:'标签',
                        url:''
                    }
                ],
                share:[
                    {
                        title:'与我共享',
                        url:'/D_dbank/share'
                    }
                ],
                trash:[
                    {
                        title:'回收站',
                        url:'/D_dbank/trash'
                    }
                ],
                ncom:[
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
                ],
                ncom1:[
                     {
                        title:'公司制度',
                        class:'rgb(148, 115, 253)',
                        url:'/D_dbank/company/system'
                    }
                ],
                ncom2:[
                    {
                        title:'people',
                        class:'rgb(34, 215, 187)',
                        url:'/D_dbank/people/person'
                    }
                ],
                ncom3:[
                    {
                        class:'rgb(102, 192, 96)',
                        title:'公司照片',
                        url:'/D_dbank/company/system/photo',
                    }
                ],
                zz(){
                    this.z = !this.z;
                }
            }
        }
    }
</script>

<style scoped>
    .main-img{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 240px;
        top: 0; 
    }
    .z{
        width: 100%;
        height: 100%;   
        position: fixed;
        top:0;
        left:0;
        background-color: black;
        opacity: .4;
        z-index: 9999;  
    }
    li{
        list-style:none;
    }
    .rotate{
        transform: rotate(45deg);
    }
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
        outline: none;
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
    div.company:hover{
        cursor: pointer;
        box-shadow: 0 0 8px 2px #eee;
    }
    .set{
        position: absolute;
        width: 660px;
        height: 562px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 0 0 5px rgba(0,0,0,.5);
        background-color: #fff;
        border-radius: 3px;
        z-index: 99999;
    }
    .set .set-header{
        height: 50px;
        border-bottom: 1px solid #eee;
        line-height: 50px;
        padding: 0 25px;
    }
    .set .set-header .set-close{
        float: right;
        color: #ddd;
    }
    .set .set-header .set-title{
        font-weight: 500;
        font-size: 16px;
    }
    .set .set-body{
        position: relative;
    }
    .set .member-panel{
        width: 250px;
        height: 45px;
        color: #888;
        padding-top: 20px;
    }
    .set .member-panel ul{
        line-height: 23px;
        padding-left: 100px;
    }
    .set .member-panel ul li{
        padding-bottom: 20px;
        cursor: pointer;
        float: left;
    }
    .set .member-panel ul li.active a{
        color: #22d7bb;
    }
    .set .member-panel ul li a{
        font-size: 16px;
    }
    .set .member-panel ul li.driver{
        height: 14px;
        border: 1px solid #eee;
        width: 0;
        margin: 0 40px;
    }
    .set .member-body{
        height: 360px;
        border: 1px solid #f3f3f3;
        border-radius: 5px;
        margin: 40px 0 0 30px
    }
    .set .member-body .search{
        position: relative;
        margin-left: 20px;
        margin-top: 20px;
    }
    .set .member-body .form-search{
        width: 190px;
        text-indent: 34px;
        border-radius: 40px;
        height: 32px;
        line-height: 32px;
        border: none;
        outline: none;
        border: 1px solid #eee;
    }
    .set .member-body .form-search:hover{
        border-color: #22d7bb;
    }
    .set .arrow{
        width: 40px;
        text-align: center;
        margin-top: 180px;
        margin-left: 250px;
        font-family: '宋体';
        font-size: 26px;
        color: #ddd;
    }
    .set .set-members .select-member{
        position: absolute;
        top: 20px;
        left: 320px;
        width: 250px;
    }
    .set .select-body{
        border: 1px solid #f3f3f3;
        border-radius: 5px;
        height: 360px;
        padding: 20px 0;
        margin-top: 20px;
    }
    .set .member-action{
        position: absolute;
        bottom: 20px;
        left: 30px;
    }
    .set .member-action .confirm{
        background-color: #22d7bb;
        color: #fff;
        border: none;
        border: 1px solid #22d7bb;
        width: 106px;
        height: 38px;
        font-size: 14px;
        display: inline-block;
        border-radius: 20px;
        cursor: pointer;
    }
    .set .member-action .confirm:hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187);
    }
    .set .member-action .cancel{
        border: none;
        background-color: #fff;
        color: #aaa;
        cursor: pointer;
        margin-left: 20px;
    }
    .set .member-action .cancel:hover{
        color: #22d7bb;
    }
</style>