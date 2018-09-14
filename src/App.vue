<template>
  <div style="height: 100%;">
    <header>
      <div class="name" >
          <img src="../assets/name.png" alt="" @click="di">
      </div>
      <ul>
        <!-- 样式要在点击的标题与路由中的标题匹配时展示 -->
        <li v-for="item of tabNav">
          <!-- 跳转 -->
          <router-link :to='item.url' >
          	<i class="iconfont" :class="item.icon" style="font-size: 24px;"></i>
          	<p class="x">{{item.title}}</p>
          </router-link>
          
        </li>
      </ul>
      <div class="ft"  v-for="item of tabNav1">
        <router-link :to='item.url' class="ft1">
        	<i class="iconfont" :class="item.icon" style="font-size: 24px;"></i>
        	<p  class="x">{{item.title}}</p>
        </router-link>
        
        <div class="m">M</div>
      </div>
    </header>
    <div class="dian" v-show="sh">
    	<ul>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-yibiao">&nbsp;进入企业后台</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-userset">&nbsp;管理企业成员</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-guanli1">&nbsp;应用管理</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-peizhi">&nbsp;配置服务集成</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-guanli">&nbsp;企业设置</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-convert">&nbsp;登录两一个企业</i>
    			</a>
    		</li>
    		<li>
    			<a href="javascript:;">
    				<i class="iconfont icon-tuichu">&nbsp;退出当前企业</i>
    			</a>
    		</li>
    	</ul>
    </div>
    <!-- 用于展示路由连接的组件 -->
    <router-view class="nav"></router-view>
  </div>
</template>
<script>
    export default {
        name: 'app',
        
        data () {
            return {
            	sh:false,
                tabNav:[
                    {
                        title:'消息',
                        url:'./news',
                        icon:'icon-icon--'
                    },
                    {
                        title:'项目',
                        url:'./items',
                        icon:'icon-iconset0338'
                    },
                    {
                        title:'日历',
                        url:'./calendar',
                        icon:'icon-rili'
                    },
                    {
                        title:'网盘',
                        url:'./dbank',
                        icon:'icon-zuoce-shoucangjia'
                    },
                ],
                tabNav1:[
                    {
                        title:'通讯录',
                        url:'./address',
                        icon:'icon-tongxunlu'
                    }
                ],
                
            }
        },
        methods:{
    			 di(){
            	this.sh = !this.sh;
        }
        }
    }
</script>

<style lang="scss" scoped>
			.x{
				opacity: 0;
				
			}
			.dian{
				width: 240px;
				background-color: #fff;
				padding: 5px 0;
				position: absolute;
				top:25px;
				left:70px;
				z-index: 99999999;
				box-shadow: 0 0 24px rgba(0,0,0,.18);
				ul li{
					width: 100%;
					height: 40px;
					line-height: 40px;
          list-style: none;
					a{
						i{
							font-size: 14px;
							margin-left: 10%;
							opacity: .6;
							transition: all .5s;
						}
					}
				}
				li:hover{
					background-color: #f3f3f3;;
				}
				li:hover i{
					margin-left: 40px;
				}
			}
			#app{
				height: 100%;
			}
      header{
        flex-shrink: 0;
        position: relative;
        width: 70px;
        height: 100%;
        background: #22d7bb;
        overflow-y: hidden;
        .name{
          width: 70px;
          height: 88px;
          line-height: 123px;
          text-align: center;
          img{
            width: 50px;
            height: 50px;
            border-radius: 12px;
          }
        }
        .name img:hover{
          opacity: .7;
        }
				.ft{
					position: absolute;
			    bottom: 0;
			    width: 100%;
					text-align: center;
					a{
						color:#fff;
						display:block;
						width: 100%;
						height: 70px;
						line-height: 35px;
					}
					p{
						transition: all .5s;
					}
				}
				.ft1:hover a{
					background: #18bfa4;
				}
				.ft1:hover .x{
					opacity: 1;
					margin-top: -10px;
				}
				.ft1:hover .iconfont{
					position: relative;
      	 top:-5px;
				}
				.m{
					position: relative;
			    margin-left: auto;
			    margin-right: auto;
			    margin-bottom: 16px;
			    width: 48px;
			    height: 48px;
			    border-radius: 50%;
			    line-height: 48px;
			    font-size: 12px;
			    vertical-align: middle;
			    background-color: rgb(45, 188, 255);
			    color: #fff;
				}
				.m:hover{
					opacity: .7;
				}
      }
      header ul li{
        list-style: none;
        display: inline-block;
        width: 70px;
        height: 70px;
        line-height: 40px;
        text-align: center;
        a{
        		color:#fff;
						display: inline-block;
						width: 100%;
						height: 70px;
						line-height: 40px;
						p{
							transition: all .5s;
						}
        }
        
      }
      header{
      	li:hover{
      		background: #18bfa4;
	      }
	      li:hover .x{
	        	opacity: 1;
	        	margin-top: -10px;
	      }
	      li:hover .iconfont{
	      		position: relative;
	      	  top:-5px;
	      }
	      .iconfont{
	      	 transition: all .5s;
	      	 position: relative;
	      	 top:15px;
	      }
      }
      
      .nav{
      	position: absolute;
		    top: 0;
    		left: 70px;
        height: 100%;
        width: 100%;
      }
</style>
