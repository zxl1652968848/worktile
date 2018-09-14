<template>
    <div>
        <div class="header">
            <span><i class="iconfont icon-shezhi"></i> 工作</span>           
            <ul>
               <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur :$route.path.indexOf(item.url) != -1}">{{item.title}}</li>
            </ul>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabNav:[
                {
                url:'/B_items/gongzuo/wode',
                title:"我的"
                },{
                url:'/B_items/gongzuo/subordinate',
                title:"个人"
                }
            ]
        }
    },
    methods:{
        routerGo(url){
            // 路由跳转
            this.$router.push({path:url});
            // console.log(this.$route)
        }
    }
}
</script>
<style lang="scss" scoped >
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        span{
            float: left;
        }
    }
    .icon-shezhi{
        color: #22d7bb;
    }
    ul{
        overflow: hidden;
        float: right;
        width: 60%;
    }
    ul li{
        float: left;
        padding:0 20px;
        cursor: pointer;
        margin-right: 20px;
        list-style: none;
    }
    ul li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
</style>
<template>
    <div>
        <div @click='zhuan()' class="lis">
       		<i class="iconfont icon-right" :class="{'rotate-caret':select}"></i>
       		<!-- <a href="javascript:;">工作</a> -->
       	</div>
        <div class="header">
            <span><i class="iconfont icon-shezhi"></i> 工作</span>
            <ul>
               <!-- <li @click="routerGo(item.url)" v-for="item of tabNav" :class="{cur :$route.path.indexOf(item.url) != -1}">{{item.title}}</li> -->
            </ul>
        </div>
        <div class="body">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabNav:[
                {
                url:'/B_items/gongzuo/my',
                title:"我的任务"
                },{
                url:'/B_items/gongzuo/subordinate',
                title:"下属任务"
                }
            ]
        }
    },
    methods:{
        routerGo(url){
            // 路由跳转
            this.$router.push({path:url});
            // console.log(this.$route)
        },
        	zhuan:function(){
            	this.select = !this.select;
            	if(this.robotH==0){
                	console.log(1)
                    this.robotH=this.work.length*42+'px'
                }else{
                	console.log(2)
                    this.robotH=0;
                }
        	},
        	zhuan1:function(){
            	this.select1 = !this.select1
        	},
        	ac(index){
        		this.num = index;
        	}
    }
}
</script>
<style lang="scss" scoped >
    .header{
        background: rgba(253,253,253,.97);
        padding: 0 15px;
        height: 50px;
        line-height: 50px;
        box-sizing: border-box;
        span{
            float: left;
        }
    }
    .icon-shezhi{
        color: #22d7bb;
    }
    ul{
        overflow: hidden;
        float: right;
        width: 60%;
    }
    ul li{
        float: left;
        padding:0 20px;
        cursor: pointer;
        margin-right: 20px;
        list-style: none;
    }
    ul li.cur{
        color: #22d7bb;
        border-bottom: 2px solid #22d7bb;
    }
</style>
