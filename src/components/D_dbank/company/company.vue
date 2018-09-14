<template>
    <div>
        <div class="main-body-center">
            <div class="module-wrapper">
                <div class="module-header">
                    <div class="title">
                        <a href="javascript:;">
                            <font-awesome-icon icon="folder" style='color:#22d7bb;font-size:20px !important'/>
                            企业网盘
                            <font-awesome-icon icon="angle-down" />
                        </a>
                    </div>
                    <div class="panel">
                        <button class="new" @click='ishow()'>
                            <font-awesome-icon icon="plus" style='color:#22d7bb;font-size:16px !important'/>
                            新建
                        </button>
                        <div class="pop-menu" v-show='show'>
                            <ul>
                                <li>
                                    <a href="javascript:;" @click="shows()">新建文件夹</a>
                                </li>
                                <li>
                                    <a href="javascript:;">新建在线文档</a>
                                </li>
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-s">
                                <font-awesome-icon icon="upload" style='color:#fff;font-size:16px !important'/>
                                上传文件
                            </button>
                            <button class="btn btn-x">
                                <font-awesome-icon icon="caret-down" style='color:#fff;font-size:16px !important'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style='position:relative;width:100%;height:100%;left:-240px' v-show='so'>
            <div class="mask" @click='shows()'></div>
            <div style='position:absolute;width:660px;height:350px;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#fff;z-index:999'>
                <div class="heta">
                    <h3>新建文件夹</h3>
                    <span style="color:#aaa;font-size:20px;display:inline-block;margin-left:500px;cursor: pointer;" @click="shows()">x</span>
                </div>
                <input type="text" placeholder="请输入文件夹的名字" style="width:600px;height:40px;border:1px solid #eee;border-radius: 5px;color:#aaa;padding:15px;margin-left: 35px;" v-model="new1">
                <ul class="quanquan">
                    <li v-for="item of data" :class="item.color"></li>
                </ul>
                <select style="width:600px;height:50px;border-radius: 5px;margin-top:10px;margin-left: 35px;text-indent:10px">
                    <option>公开：企业所有成员都可以看见此文件夹</option>
                    <option>私有:只有加入的成员才能看见此文件夹</option>
                </select>
                <select style="width:600px;height:50px;border-radius: 5px;margin-top:10px;margin-left: 35px;text-indent:10px" >
                    <option>私人网盘</option>
                    <option>Runoob</option>
                    <option>Google</option>
                </select>
                <button style="width:110px;height:40px;color: #fff;background-color: #22d7bb;outline:none;border:none;border-radius: 30px;position:absolute;left:140px;top:300px;" @click='add()'>确定</button>
                <button style="width:110px;height:40px;color: #22d7bb;background-color:#fff;outline:none;border:none;position:absolute;left:250px;top:300px;" @click='cancel()'>取消</button>
            </div>
        </div>
       
            
        <div class="drive-list">
            <div class="file-list-header">
                <div class="file-name">
                    <span class="scope">文件名</span>
                </div>
                <div class="file-size">
                    <span class="scope">大小</span>
                </div>
                <div class="file-updated-by">
                    <span class="scope">更新人</span>
                </div>
                 <div class="file-updated">
                    <span class="scope">更新时间</span>
                    <font-awesome-icon icon="arrow-down" style='color:#22d7bb;font-size:16px !important'/>
                </div>
            </div>
            <div class="com">
                <div class="file-item" v-for='(item,index) of obj'>
                    <div class="file-name">
                        <font-awesome-icon icon="folder" :style='{color:item.fold}' style="font-size:30px !important;margin-right:10px"/>
                        <router-link :to='item.url' class="slide-trigger">{{item.title}}</router-link>
                    </div>
                    <div class="file-size">
                        <span class="scope">-</span>
                    </div>
                    <div class="file-updated-by">
                        <div class="role">
                            <span class="member">
                                <div class="binding">M</div>
                            </span>
                            <div class="name">M</div>
                        </div>
                    </div>
                    <div class="file-updated">
                       {{item.shi}}
                    </div>
                    <div class="file-action">
                        <font-awesome-icon icon="arrow-down" style='color:#22d7bb;font-size:12px !important'/>
                        <div @click="removeTask(index)"><font-awesome-icon icon="ellipsis-h" style='color:#22d7bb;font-size:12px !important'/></div>
                    </div>
                </div>
            </div>
        </div>
        <router-view class="main-body-content1"></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return{
            obj:[
                {
                    fold:'rgb(112,118,250)',
                    title:'公司制度',
                    url:'/D_dbank/company/system',
                    shi:'9月11日 10:21'
                },
                {
                    fold:'rgb(255, 210, 52)',
                    title:'资料共享',
                    url:'/D_dbank/company/ziliao',
                    shi:'9月11日 17:21'
                },
                {
                    fold:'rgb(34, 215, 187)',
                    title:'缺陷管理',
                    url:'/D_dbank/company/manage',
                    shi:'9月11日 10:21'
                }
            ],
            show:false,
            so:false,
            new1:'',
            data:[
                {
                    color:"green1"
                },
                {
                    color:"green2"
                },
                {
                    color:"green3"
                },
                {
                    color:"green4"
                },
                {
                    color:"green5"
                },
                {
                    color:"green6"
                },
                {
                    color:"green7"
                },
                {
                    color:"green8"
                },
                {
                    color:"green9"
                },
                {
                    color:"green10"
                },
                {
                    color:"green11"
                },
                {
                    color:"green12"
                },
                {
                    color:"green13"
                },
                {
                    color:"green14"
                },
                {
                    color:"green15"
                }
            ],
            M:[],
            obj1:[]
        }
    },
    methods:{
        ishow(){
            this.show = !this.show;
        },
        shows(){
            this.show = !this.show;
            this.so = !this.so;
        },
        add(){
            var month = new Date().getMonth()+1;
            // console.log(month);
            var date = new Date().getDate();
            // console.log(date);
            var hour = new Date().getHours();
            // console.log(hour);
            var minutes = new Date().getMinutes();
            // console.log(minutes);
            this.obj.push({
                title:this.new1,
                fold:'rgb(255, 210, 52)',
                url:'/D_dbank/company/',
                shi:month+'月'+date+'日 '+hour+':'+minutes
            })
            console.log(localStorage.setItem('new1',JSON.stringify(this.new1)));
            this.new1 = ''
            
            this.so = !this.so;
        },
        removeTask(index){
             this.obj.splice(index, 1)    
        },
        cancel(){
            this.so = !this.so;
        }
    }
}
</script>
<style lang='scss' scoped>
    .mask{
        width: 100%;
        height: 100%;   
        position: fixed;
        top:0;
        left:0;
        background-color: black;
        opacity: .4;
        z-index: 99; 
    }
    .main-body-center{
       position: absolute;
       top: 0;
       width: 100%;
       height: 100%;
       background-color: #ddd;
        .module-header{
            height: 50px;
            width: 100%;
            padding: 0 15px;
            position: relative;
            background: rgba(253,253,253,.95);
                .title{
                    font-size: 14px;
                    text-overflow:ellipsis;
                    overflow: hidden;
                    line-height: 50px;
                    color: #333;
                    width: 1100px;
                    display: inline-block;
                    float:left;
                }
        }
        .module-wrapper{
            width: 100%;
        }
    }
    .drive-list{
        position: absolute;
        top: 50px;
        width: 100%;
        height: 100%;
        background-color: #fff;
        margin: 15px;
    }
    .file-list-header{
        line-height: 27px;
        color: #666;
        position: relative;
        padding: 14px 35px;
            div{
                display: inline-block;
            }
    }
    .file-list-header:before,.file-item:before{
        content: "";
        position: absolute;
        left: 20px; 
        right: 20px;
        top: 55px;
        border-bottom: 1px solid #eee;
    }
    .file-name{
        width: 1030px;
    }
    .file-size{
        width: 120px;
    }
    .file-updated-by{
        width: 130px;
    }
    .file-updated{
        width: 170px;
    }
    .file-item{
        position: relative;
        padding: 14px 35px;
            .file-name{
                padding-right: 20px;
                line-height: 30px;
            }
            div{
                display: inline-block;
            }
            .file-size{
                line-height: 30px;
                color: #888;
            }
            .file-updated-by{
                color: #333;
                line-height: 30px;
                    .member{
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        line-height: 24px;
                        font-size: 12px;
                        border-radius: 24px;
                        background-color: rgb(239,126,222);
                        text-align: center;
                        color: #fff;
                    }
                    .name{
                        margin-left: 5px;
                    }
            }
            .file-updated{
                color: #888;
                line-height: 30px;
            }
            .file-action{
                width: 60px;
                text-align: center;
                visibility: hidden;
            }
    }
    .file-item:hover{
        box-shadow: 0 0 8px 2px #eee;
    }
    .file-item:hover .file-action{
        visibility: visible;
    }
    .panel{
        line-height: 50px;
        display: inline-block;
        position: relative;
            .new{
                padding: 3px 20px;
                font-size: 14px;
                background-color: #fff;
                border: none;
                border: 1px solid rgb(34, 215, 187);
                border-radius: 5px;
                color: rgb(34, 215, 187);
                cursor: pointer;
                outline: none;
            }
    }
    .btn-group{
        display: inline-block;
        margin-left: 10px;
    }
    .pop-menu{
        width: 230px;
        position: absolute;
        top: 40px;
        left: -70px;
        z-index: 99;
        background-color: #fff;
            ul li{
                list-style:none;
            }
    }
    .pop-menu ul li:hover{
        box-shadow: 0 0 8px 2px #eee;
    }
    .pop-menu ul li a{
        display: block;
        line-height: 30px;
        color: #666;
        transition: padding-left .2s;
        padding: 5px 18px;
    }
    .btn{
        padding: 3px 10px;
        height: 30px;
        background-color: rgb(34,215,187);
        border: none;
        color: #fff;
        border-radius: 20px;
        cursor: pointer;
        outline: none;
    }
    .btn:hover{
        box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
    }
    .btn-s{
        border-bottom-right-radius: 0;
        border-top-right-radius: 0;
    }
    .btn-x{
        border-bottom-left-radius: 0;
        border-top-left-radius: 0;
        margin-left: -4px;
    }
    .main-body-content1{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }
    .green1{
        background: #22d7bb;
    }
    .green2{
        background: #18bfa4;
    }
    .green3{
        background: #2cccda;
    }
    .green4{
        background: #2dbcff;
    }
    .green5{
        background: #4e8af9;
    }
    .green6{
        background: #7076fa;
    }
    .green7{
        background: #9473fd;
    }
    .green8{
        background: #c472ee;
    }
    .green9{
        background: #ef7ede;
    }
    .green10{
        background: #f969aa;
    }
    .green11{
        background: #fc587b;
    }
    .green12{
        background: #fa5a55;
    }
    .green13{
        background: #ff7747;
    }
    .green14{
        background: #ffa415;
    }
    .green15{
        background: #ffd234;
    }
    .quanquan{
        width: 610px;
        height: 50px;
        margin-bottom: 15px;
        padding-left: 45px;
        margin:auto;
    }
    .quanquan li{
        width: 25px;
        height: 25px;
        float: left;
        list-style-type: none;
        margin:10px 5px;
        border-radius: 50%;
    }
    .heta{
        height: 50px;
        border-bottom: 1px solid #eee;
        text-align: left;
        margin-bottom:15px;
    }
    .heta h3{
        line-height: 50px;
        color: rgb(110, 103, 103)!important;
        display:inline-block;
        margin-left: 30px;
     }
</style>