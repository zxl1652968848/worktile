<template>
    <div class="module">
        <div class="left">
             <i class="iconfont icon-sousuo1"></i>
            <input type="text" placeholder="搜索项目模板" >
             <span class="tianjia" @click='show()'>添加项目</span>
        </div>
        <div class="pad">
            <table>
                <thead>
                    <tr>
                        <th style="width:20%">项目模板</th>
                        <th>备注</th>
                        <th>类型</th>
                        <th>状态</th>
                        <th>操作</th>
                       
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="item of arr">
                        <td style="text-align:left">
                            <img :src="item.i" alt="">
                            {{item.xiangmu}}
                        </td>
                        <td style="text-align:left">
                            {{item.beizhu}}
                        </td>
                        <td style="text-align:left">
                            {{item.leixing}}
                        </td>
                        <td style="">
                            <span style="background: #22d7bb;padding: 5px 10px;font-size: 12px;border-radius: 3px;color: #fff;box-sizing: border-box;">
                                {{item.zhuangtai}}
                            </span>
                        </td>
                        <td class="kuan">
                            <span style="color:#22d7bb"><i class="iconfont icon-shezhi1" ></i>配置</span>
                            <span><i class="iconfont icon-xiugai"></i></span>
                            <span><i class="iconfont icon-buoumaotubiao25"></i></span>
                            <span><i class="iconfont icon-huishourecycling11"></i></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div style='width:100%;height:100%;position:relative;left:0;top:0' v-show='ishow'>
            <div class="mask" @click='show()'></div>
            <div style="position:relative;left:-240px;top:100px">
                <div class="set">
                    <div class="set-header">
                        <a href="javascript:;" class="set-close" @click="show()">X</a>
                        <h3 class="set-title">新建项目模板</h3>
                    </div>
                    <div class="set-body">
                        <div class="set-members" style="position:relative">
                            <div class="member-panel">
                                <div class="member-body">
                                    <div class="search">
                                        模板名称
                                        <input type="text" placeholder="模板名称" class="form-search" form-search>
                                    </div>
                                    <div class="search">
                                        模板类型
                                        <input type="text" placeholder="请选接模板类型" class="form-search" form-search>
                                    </div>
                                    <div class="search">
                                        类型
                                        <textarea name="" id="" cols="50" rows="4" style='margin-left:20px;border-radius:3px'></textarea>
                                    </div>
                                    <div class="search">
                                        图标
                                        <span style="margin-left:20px;font-size:18px">
                                            <i class="iconfont icon-shezhi1"></i>
                                            <i class="iconfont icon-jiqiren"></i>
                                            <i class="iconfont icon-xiashudanweiguanli"></i>
                                            <i class="iconfont icon-pingguo"></i>
                                            <i class="iconfont icon-renxiang"></i>
                                            <i class="iconfont icon-wenhao"></i>
                                            
                                        </span>
                                    </div>
                                    <div class="member-action">
                                        <button class="confirm" @click='show()'>确定</button>
                                        <button class="cancel" @click='show()'>取消</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ishow:false,
            arr:[
                {
                    i:'imgs/1.png',
                    xiangmu:'事物处理',
                    beizhu:'适用于最简单的事务管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/2.png',
                    xiangmu:'项目管理',
                    beizhu:'适用于通用的项目管理',
                    leixing:'通用',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/3.png',
                    xiangmu:'敏捷开发',
                    beizhu:'适用于敏捷研发管理，包括迭代、需求和缺陷',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/4.png',
                    xiangmu:'缺陷管理',
                    beizhu:'适用于缺陷管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
                {
                    i:'imgs/5.png',
                    xiangmu:'测试管理',
                    beizhu:'适用于测试用例管理',
                    leixing:'软件',
                    zhuangtai:'已启用'
                },
            ],
            show(){
                this.ishow = !this.ishow;
            }
        }
    },
}
</script>
<style lang="scss" scoped >
    .mask{
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: .4;
        position: fixed;
        z-index: 999;
        top: 0;
        left: 0;
    }
     .set{
        position: absolute;
        width: 660px;
        height: 562px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-30%);
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
        position: absolute;
        top: 60px;
        width: 100%;
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
        top:80px;
    }
    .set .member-panel{
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
    .set .member-body{
        height: 360px;
        border-radius: 5px;
        margin: 40px 0 0 30px
    }
    .set .member-body .search{
        position: relative;
        margin-left: 20px;
        margin-top: 20px;
    }
    .set .member-body .form-search{
        width: 400px;
        text-indent: 10px;
        border-radius: 3px;
        height: 32px;
        line-height: 32px;
        margin-left: 20px;
        border: none;
        outline: none;
        border: 1px solid #eee;
    }
    .set .member-body .form-search:hover{
        border-color: #22d7bb;
    }
    .set .member-action{
        position: absolute;
       top: 300px;
        left: 50px;
    }
    .set .member-action .confirm{
        background-color: #22d7bb;
        color: #fff;
        border: none;
        border: 1px solid #22d7bb;
        width: 106px;
        height: 38px;
        font-size: 14px;
        outline: none;
        display: inline-block;
        border-radius: 20px;
        cursor: pointer;
    }
    .set .member-action .cancel{
        border: none;
        background-color: #fff;
        color: #aaa;
        cursor: pointer;
        margin-left: 20px;
        outline: none;
    }

    .module{
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        width: 100%;
        background-color: #fff;
        .left{
            position: relative;
            float: left;
            width: 300px;
            .icon-sousuo1{
                position: absolute;
                top: 10px;
                left: 10px;
            }
            input{
                padding: 8px 0;
                padding-left: 34px;
                padding-right: 14px;
                display: block;
                width: 100%;
                line-height: 1.5;
                color: #333;
                background-color: #fff;
                background-clip: padding-box;
                border: 1px solid #eee;
                border-radius: .25rem;
                transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                box-sizing: border-box;
                outline: none;
            }
            input:hover{
                border-color: #22d7bb;
            }
        }
        .pad{
            width: 100%;
            box-sizing: border-box;
            padding-top: 20px;
            background-color: #fff;
            float: left;
            table{
                width: 100%;
                box-sizing: border-box;
                border-collapse: collapse;
                thead th{
                    background-color: #f3f3f3;
                    vertical-align: bottom;
                    font-weight: 400;
                    border-bottom: 1px solid #eee;
                }
            }
            table,th,td,tr{
                border: 1px solid #eee;
            }
            th,td{
                font-size: 14px;
                padding: 12px 15px;
                display: table-cell;
                text-align: center;
                color: #666;
            }
            img{
                vertical-align: -5px;
            }
        }
    }
    .kuan{
        margin-right: 10px;
    }
    .tianjia{
        display: block;
        width: 200px;
        height: 45px;
        position: absolute;
        top:-5px;
        right:-1150px;
        text-align: center;
        line-height: 45px;
        background-color:#22d7bb;
        color:#fff;
        font-size: 18px;
        border-radius: 12px;
    }
</style>
