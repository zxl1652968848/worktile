<template>
    <div>
        <div class="mabody">
            <div class="ncopl">
                <div class="header">
                    <span class="htitl">
                        消息
                        <i class="iconfont icon-lingdang-xianxing"></i>
                    </span>
                    <div class="tjnr" @click="clo">
                        <i class="iconfont icon-new"></i>
                    </div>
                </div>
                <div class="bolit">
                    <div class="sear">
                        <i class="iconfont icon-icon-test"></i>
                        <input type="text" placeholder="搜索成员、消息">
                    </div>
                    <ul class="chatl">
                        <li  v-for="(item,index) of vList" :key="index" :class="{active : $route.name.indexOf(item.title) != -1}">
                            <router-link :to="item.url">
                                <img :src="item.img" alt="">
                                <div class="cylb">{{item.title}}</div>
                                <span class="cx">×</span>
                            </router-link>
                        </li>
                        <li v-for='(item,index) of L' :key="index">
                            <a href="#">
                                <img src='https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png'>
                                <div class="cylb">{{item.title}}</div>
                                <span class="cx" @click="close(item.nm)">×</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <router-view></router-view>
        </div>
        <div class="tan" v-show='isShow == false'>
            <div class="tan_up">
                <h3>创建群组</h3>
                <span @click="clo()">X</span>
            </div>
            <div class="tan_down">
                 <div class="tan_d_up">
                     <div class="input">
                          <input type="text" placeholder="群组名称" class="form" ref='title'>
                     </div>
                 </div>
                 <div class="tan_d_down">
                      <div class="color">
                          <ul>
                              <li v-for="(item,index) of item" :key="index">
                                  <span :class="item.color"></span>
                              </li>
                          </ul>
                      </div>
                 </div>
            </div>
            <div class="qun">
                <label class="label">群组主题</label>
                <textarea name="" id="" cols="30" rows="10" class="text"></textarea>
            </div>
            <div class="ke">
                <label class="labels">可见范围</label>
                <select name="" id="" class="text">
                    <option value="">公开：企业所有成员都能看到此群组</option>
                    <option value="">私有：只有加入的成员才能看到此群组</option>
                </select>
            </div>
            <div class="cheng">
                <label for="">群组成员</label>
                <ul>
                    <li>
                        <span class="c_s">M</span>
                    </li>
                    <li></li>
                </ul>
            </div>
            <div class="sure">
                <button class="btn" @click="add">确定</button>
                <a href="javascript:;" @click="clo()">取消</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                vList:[
                    {
                        title:'项目助手',
                        url:'/A_news/ower',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png'
                    },
                    {
                        title:'小特机器人',
                        url:'/A_news/xtjq',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png'
                    },
                    {
                        title:'企业公告',
                        url:'/A_news/qygg',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png'
                    },
                    {
                        title:'日程助手',
                        url:'/A_news/rczs',
                        img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_40x40.png'
                    }
                ],
                item:[
                    {
                        color:"one"
                    },
                    {
                        color:"two"
                    },
                    {
                        color:"three"
                    },
                    {
                        color:"red"
                    },
                    {
                        color:"orange"
                    },
                    {
                        color:"yellow"
                    },
                    {
                        color:"green"
                    },
                    {
                        color:"teal"
                    },
                    {
                        color:"cyan"
                    },
                    {
                        color:"secondary"
                    },
                    {
                        color:"success"
                    },
                    {
                        color:"danger"
                    },
                    {
                        color:"a"
                    },
                    {
                        color:"b"
                    },
                    {
                        color:"c"
                    },
                    {
                        color:"d"
                    },   
                    {
                        color:"e"
                    }, 
                        
                ],
                isShow:true,
                M:[],
                L:[]
            }
        },
        methods:{
            clo(){
                this.isShow = !this.isShow;
            },
            add(){
                var id = "";
                var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
                for (var i = 0; i < 8; i++) {
                    id += str[~~(Math.random() * str.length)];
                }
                var title=this.$refs.title.value;
                this.M.push({
                    title:title,
                    nm:id
                })
                localStorage.setItem('M',JSON.stringify(this.M));
                this.isShow=!this.isShow;
            },
            close:function(index){
                this.L.splice(index,1);
                // console.log(index);
                // console.log(this.L);
                // localStorage.removeItem(index);
            }
        },
        created(){
            var local = JSON.parse(localStorage.getItem('M'));
            // console.log(local)
            for(var i = 0;i <local.length;i++){
                this.L.push(local[i]);
            } 
        }
    }
</script>

<style lang='scss' scoped>
    .mabody{
        background: url("https://cdn.worktile.com/pro/image/app/desktop.background/desktop-1.jpg?v=7.0.3+20180830") no-repeat;
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
                        outline:20%;
                        outline: none;
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
                            .cx{
                                float: right;
                                font-weight:bolder;
                                margin-right: 10px;
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
    .qun{
        margin-right: 0;
        margin-left: 0;
        margin:0 auto;
        height: 80px;
    }
    .qun .label{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        display:block;
        padding-top: -5px;
        margin-top: 16px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 80%;
        height: 90px;
        margin-top: -90px;
        float:right;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .ke{
        width: 500px;
        height: 38px;
        margin:0 auto;
    }
    .ke .labels{
        width: 105px;
        height: 38px;
        margin-top: 27px;
        display:block;
    }
    .ke .text{
        height: 30px;
        margin-top: 20px;
        width:93%;
        float:right;
        margin-right: -40px;
        margin-top: -40px;
    }
    .ke option{
        color: #666;
    }
    .cheng{
        margin: 10px auto;
        width: 500px;
        height: 43px;
        color: #666;
    }
    .cheng ul li{
        margin-right: 6px;
        margin-bottom: 8px;
        float: left;
        list-style: none;
        position: relative;
    }
    .cheng ul li .c_s{
        display:block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 30px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        text-align: center;
        float:right;
        margin-left: 70px;
        margin-top: -20px;
    }
    .sure{
        width: 364px;
        height: 38px;
        margin:0 auto;
        color: #666;
    }
    .sure .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .sure a{
        margin-left: 27px;
    }
.qun{
        margin-right: 0;
        margin-left: 0;
        margin:0 auto;
        height: 80px;
    }
    .qun .label{
        color: #888;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        margin-bottom: 0;
        display:block;
        padding-top: -5px;
        margin-top: 16px;
        width: 100px;
        height: 80px;
    }
    .qun .text,.ke .text{
        display: block;
        width: 80%;
        height: 90px;
        margin-top: -90px;
        float:right;
        line-height: 1.5;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .ke{
        width: 500px;
        height: 38px;
        margin:0 auto;
    }
    .ke .labels{
        width: 105px;
        height: 38px;
        margin-top: 27px;
        display:block;
    }
    .ke .text{
        height: 30px;
        margin-top: 20px;
        width:93%;
        float:right;
        margin-right: -40px;
        margin-top: -40px;
    }
    .ke option{
        color: #666;
    }
    .cheng{
        margin: 10px auto;
        width: 500px;
        height: 43px;
        color: #666;
    }
    .cheng ul li{
        margin-right: 6px;
        margin-bottom: 8px;
        float: left;
        list-style: none;
        position: relative;
    }
    .cheng ul li .c_s{
        display:block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        font-size: 12px;
        border-radius: 30px;
        background-color: rgb(239, 126, 222);
        color: #fff!important;
        text-shadow: transparent 0 0 0;
        text-align: center;
        float:right;
        margin-left: 70px;
        margin-top: -20px;
    }
    .sure{
        width: 364px;
        height: 38px;
        margin:0 auto;
        color: #666;
    }
    .sure .btn{
        color: #fff;
        background-color: #22d7bb;
        border-color: #22d7bb;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;
        border: 1px solid transparent;
        padding: .469rem 26px;
        font-size: .875rem;
        line-height: 1.5;
        min-width: 106px;
        border-radius: 1.25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .sure a{
        margin-left: 27px;
    }
     .one{
        background-color: #007bff;
    }
    .two{
        background-color: #6610f2;
    }
    .three{
        background-color: #6f42c1;
    }
    .four{
        background-color: #e83e8c;
    }
    .red{
       background-color: #dc3545;  
    }
    .orange{
       background-color: orange;  
    }
    .yellow{
       background-color: yellow;  
    }
    .green{
       background-color: green;  
    }
    .teal{
       background-color: teal;  
    }
    .cyan{
       background-color: cyan;  
    }
    .secondary{
       background-color:#666;  
    }
    .success{
       background-color: #22d7bb;  
    }
    .danger{
          background-color: #ff5b57;  
    }
    .a{
         background-color:#f61f80;
    }
    .b{
         background-color:#a72ee6;
    }
    .c{
         background-color:#f61f80;
    }
    .d{
         background-color:#0098e0;
    }
    .e{
         background-color:#0f7b6a;
    }
    .tan_d_up{
        margin-right: -15px;
        height: 60px;
    }
    .tan_d_up .input{
       width:590px;
    }
    .tan_d_up .input .form{
        display: block;
        width: 100%;
        line-height: 2.8;
        color: #333;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #eee;
        border-radius: .25rem;
        padding-left: 20px;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    }
    .tan_d_down{
        margin-right: -15px;
        height: 35px;
        width:100%;
    }
    .tan_d_down .color{
        position: absolute;
        width: 110%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }
    .tan_d_down ul{
        width: 100%;
    }
    .tan_d_down ul li{
        list-style: none;
        cursor: pointer;
        margin-bottom: 8px;
        float: left;
        padding-left:8px;
    }
    .tan_d_down ul li span{
        display: inline-block;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        text-align: center;
        padding: 0 4px 6px;
    }

    .tan{
        width: 660px;
        height: 461px;
        top: 50px;
        left:410px;
        position: absolute;;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
        border: 0 solid rgba(0,0,0,.2);
        border-radius: .3rem;
    }
    .tan_up{
        padding: 0 1.875rem;
        min-height: 1.5;
        align-items: center;
        height: 50px;
        border-bottom: 1px solid #eee;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        box-sizing: border-box;
        width:100%;
    }
    .tan_up span{
        float: right;
        margin-top:-22px;
    }
    .tan_up h3{
        padding-top:13px;
    }
    .tan_down{
        padding: 1.25rem 1.875rem 1.875rem;
        position: relative;
        height: 130px;
    }
</style>