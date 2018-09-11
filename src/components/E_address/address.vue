<template>
    <div class="address">
    	<div class="address_left">
    		<div class="address_left_top">
    			<span>通讯录</span>
    			<div class="address_left_user">
	    			<a href="#">
	    				<font-awesome-icon icon="user-plus" class="hov"/>
	    			</a>
    		    </div>
    		</div>
    		<div class="address_left_b">
    			<div class="address_left_b_inp">
    				<font-awesome-icon icon="search" class="gray1" />
    				<input type="text" placeholder="搜索"/>
    			</div>
    		</div>
    		<div class="address_left_button">
    			<ul class="tabs-group">
    				<li @click="tab()"><font-awesome-icon icon="users" class="gre" /></li>
    				<li @click="tab1()"><font-awesome-icon icon="sitemap"/></li>
    			</ul>
    			<div v-show="isshow">
    				<div class="toc-section">
    					<div class="section-header" @click="xia()">
    						<a href="#" class="expand-icon">
    							<font-awesome-icon icon="caret-right"/>
    						</a>
    						<a href="#" class="title">群组</a>
    						<a href="#" class="action">...</a>
    					</div>
    					<div class="icfont" :style="{height : h}">
    						<ul v-for="a of tabNav">
    							<router-link :to='a.url'>
    								<li>
	    								<a href="#">
	    									<span class="icon1" :style="{backgroundColor : a.color}"><font-awesome-icon icon="user-friends"/></span>
	    									<span class="name">{{a.title}}</span>
	    								</a>
    								</li>
    							</router-link>
    						</ul>
    					</div>
    					<router-view class="nav1"></router-view>
    					<div class="section-header" @click="xia1()">
    						<a href="#" class="expand-icon">
    							<font-awesome-icon icon="caret-right"/>
    						</a>
    						<a href="#" class="title">机器人</a>
    						<a href="#" class="action">...</a>
    					</div>
    					<div class="icfont icf" :style="{height : h1}">
    						<ul v-for="s of tabNav1">
    							<router-link :to='s.url'>
    							<li>
    								<a href="#">
    									<img :src="s.src" />
    									<span class="name" style="top: -5px;">{{s.title}}</span>
    								</a>
    							</li>
    							</router-link>
    						</ul>
    					</div>
    					<router-view class="nav1"></router-view>
    					<div>
    						<ul>
    							<li>M</li>
    							<li>
    								<a href="#">
    									<div></div>
    									<span></span>
    								</a>
    							</li>
    						</ul>
    					</div>
    				</div>
    			</div>
    			<div v-show="isshow1">1709B(2人)</div>
    		</div>
    	</div>
    	
    </div>
</template>

<script>
    export default {
        name: "address",
        data(){
        	return {
        		isshow:true,
        		isshow1:false,
        		h:0,
        		h1:0,
        		tabNav:[
        			{
        				title:'12',
        				color:'#18bfa4',
        				url:'/address/add_1'
        			},
        			{
        				title:'一组',
        				color:'#9473fd',
        				url:'/address/add_2'
        			},
        			{
        				title:'二组',
        				color:'#ffd234',
        				url:'/address/add_3'
        			},
        			{
        				title:'三组',
        				color:'#39ba5d',
        				url:'/address/add_4'
        			},
        			{
        				title:'四组',
        				color:'#22D7BB',
        				url:'/address/add_5'
        			},
        			{
        				title:'五组',
        				color:'#EF7EDE',
        				url:'/address/add_6'
        			}
        		],
        		tabNav1:[
        			{
        				title:'日程助手',
        				src:'../../../assets/1.png',
        				url:'/address/rc'
        			},
        			{
        				title:'网盘助手',
        				src:'../../../assets/2.png',
        				url:'/address/wp'
        			},
        			{
        				title:'项目助手',
        				src:'../../../assets/3.png',
        				url:'/address/xm'
        			},
        			{
        				title:'小特机器人',
        				src:'../../../assets/4.png',
        				url:'/address/xt'
        			}
        		]
        	}
        },
        methods:{
        	tab(){
        		this.isshow = true;
        		this.isshow1 = false;
        	},
        	tab1(){
        		this.isshow = false;
        		this.isshow1 = true;
        	},
        	xia(){
        		if(this.h == 0){
        			this.h = this.tabNav.length * 50+'px';
        		} else {
        			this.h =  0;
        		}
        	},
        	xia1(){
        		if(this.h1 == 0){
        			this.h1 =  this.tabNav1.length * 50 +'px';
        		} else {
        			this.h1 =  0;
        		}
        	}
        }
    }
</script>

<style lang="scss" scoped>
	li{
	   list-style: none;
	 }
	 .nav1{
	 	position: absolute;
	 	top:0;
	 	left:310px;
	 }
	.address{
	    width: calc(100% - 70px);
	    height: 100%;
	    background-color: #EEEEEE;
	    .address_left{
	    	position: relative;
	    	width: 240px;
	        height: 100%;
    		background-color: #fff;
	    }
	    .address_left_top{
	    	height: 50px;
	    	span{
	    		float: left;
			    margin: 0 20px;
			    color: #333;
			    line-height: 50px;
			    font-size: 16px;
	    	}
	    }
	    .address_left_user{
	    	float: right;
		    margin: 0 20px;
		    line-height: 50px;
		    
		    a{
		    	color: #ddd;
		    	i{
		    		font-size: 1.25rem;
		    		display: inline-block;
				    line-height: 1;
				    margin: 0;
		    	}
		    }
		    a svg:hover{
		    	color: #22D7BB;
		    }
	    }
	    .address_left_b{
	    	-webkit-box-flex: 1;
		    -ms-flex: 1 1 0px;
		    flex: 1 1 0;
		    -webkit-flex: 1 1 0;
		    overflow: hidden;
		    margin-bottom: 3px;
		    .address_left_b_inp{
		    	padding: 0 20px 10px;
    		    position: relative;
    		    i{
    		    	position: absolute;
				    top: 6px;
				    left: 30px;
				    color: #8f8f8f;
    		    }
    		    input{
    		    	background: #f3f3f3;
				    -webkit-box-shadow: none;
				    box-shadow: none;
				    color: #666;
				    height: 36px;
				    font-size: 14px;
				    padding-left: 28px;
				    border-radius: 20px;
				    border: 1px solid transparent;
				    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    		    }
    		    input:hover{
    		    	background: #fdfdfd;
    				border: 1px solid #ddd;
    		    }
    		    .gray1{
    		    	position: absolute;
				    top: 10px;
				    left: 30px;
				    color:gray;
    		    }
		    }
	    }
	    .address_left_button{
	    	.tabs-group{
	    		flex-direction: row;
			    padding: 0 20px;
			    line-height: 18px;
			    border-bottom: solid 1px #f3f3f3;
			    height: 29px;
			    li{
			    	display: inline-block;
			    	width: 50%;
			    	text-align: center;
			    	height: 29px;
			    	float:left;
			    	.gre{
			    		color: #22D7BB;
			    	}
			    }
	    	}
	    	
	    }
	    .toc-section{
	    	width: 240px;
	    	margin-bottom: 2px;
	    	.section-header{
	    		margin-bottom: 2px;
			    padding: 8px 20px;
			    position: relative;
			    cursor: pointer;
			    .expand-icon{
			    	color: #aaa;
				    display: inline-block;
				    width: 14px;
				    vertical-align: middle;
				    svg{
				    	margin-left: -5px;
				    }
			    }
	    	}
	    	.section-header:hover{
	    		text-decoration: none;
   				box-shadow: 0 0 8px 2px #eee;
	    	}
	    	.section-header:hover .action {
			    visibility: visible;
			}
	    	.title{
	    		color: #333;
	    	}
	    	.action{
	    		color: #626262;
			    font-size: 18px;
			    font-weight: 500;
			    position: absolute;
			    visibility: hidden;
			    right: 14px;
			    top: 2px;
			    width: 24px;
			    text-align: center;
	    	}
	    	.icfont{
	    		overflow: hidden;
	    		transition: .5s all;
	    		ul li{
	    			display: block;
				    margin-bottom: 2px;
				    padding: 0 20px;
				    border-right: 3px solid transparent;
				    a{
				    	display: block;
					    line-height: 48px;
					    color: #666;
					    font-size: 14px;
					    text-decoration: none;
					    .icon1{
					    	display: inline-block;
					    	line-height: 24px;
						    border-radius: 50%;
						    color: white;
						    text-align: center;
						    vertical-align: middle;
						    width: 24px;
    						height: 24px;
					    }
					    .name{
					    	overflow: hidden;
						    white-space: nowrap;
						    text-overflow: ellipsis;
						    max-width: 150px;
						    display: inline-block;
						    vertical-align: middle;
						    position: relative;
						    left:4px;
					    }
				    }
	    		}
	    	}
	    	.icf{
	  
	    		img{
	    			width: 24px;
				    height: 24px;
				    line-height: 24px;
				    font-size: 12px;
				    border-radius: 24px;
	    		}
	    	}
	    }
	}
</style>