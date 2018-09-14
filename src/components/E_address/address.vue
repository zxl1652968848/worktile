<template>
    <div class="address">
    	<div class="address_left">
    		<div class="address_left_top">
    			<span>通讯录</span>
    			<div class="address_left_user">
	    			<a href="javascript:;">
	    				<font-awesome-icon icon="user-plus" class="hov" @click="z1()"/>
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
    						<a href="#" class="action" @click="c1">...</a>
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
    					
    					<div class="wap">
    						<ul v-for="d of grup">
    							<router-link :to='d.url'>
    							<li class="group-char">{{d.name}}</li>
    							<li class="act">
    								<a href="#">
    									<span class="a">{{d.name}}</span>
    									<span>{{d.name}}</span>
    								</a>
    							</li>
    							</router-link>
    						</ul>
    					</div>
    				</div>
    			</div>
    			<div v-show="isshow1">1709B(2人)</div>
    		</div>
    	</div>
    	<div v-show="z" class="zz">
	    	<div class="z" @click="z1()"></div>
	    	<div class="tian">
	    		<div class="modal-header ng-scope">
				    <a href="javascript:;" class="modal-close" @click="z1()">
				       <font-awesome-icon icon="times" /> 
				    </a>
				    <h3 class="modal-title ng-scope" translate="member.invite.ADD_MEMBER">添加成员</h3>
				</div>
				<div class="modal-body">
					<div class="thy-nav">
						<a href="javascript:;" class="ac">快速添加成员</a>
						<a href="javascript:;">通过邮件邀请</a>
						<a href="javascript:;">通过链接注册</a>
					</div>
					<div>
						<p class="p-20 ng-scope">快速添加成员帐号，设置默认密码，首次登录时需要修改默认密码。</p>
					</div>
					<form autocomplete="off" class="w5c-form control-panel">
		                <div class="form-group">
		                    <label class="col-sm-3 control-label label-required ng-scope" translate="member.invite.NAME">姓名</label>
		
		                    <div class="col-sm-9">
		                        <input type="text" name="displayName" lc-auto-focus="" required="" ng-model="vm.tabDirectData.displayName" class="form-control ng-pristine ng-untouched valid ng-empty ng-invalid ng-invalid-required" placeholder="请输入对方真实姓名">
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="col-sm-3 control-label label-required ng-scope" translate="member.invite.LOGIN_USERNAME">登录用户名</label>
		
		                    <div class="col-sm-9">
		                        <input type="text" name="username" ng-model="vm.tabDirectData.username" required="" autocomplete="off" class="form-control ng-pristine ng-untouched valid ng-empty ng-invalid ng-invalid-required ng-valid-pattern ng-valid-lc-unique-check" placeholder="请输入对方用户名，如Lily" lc-unique-check="{url:'/api/user/name/check?name='+vm.tabDirectData.username}" ng-pattern="/^[A-Za-z]{1}[0-9A-Za-z_]{2,29}$/" ng-focus="vm.inputFocus=true" ng-blur="vm.inputFocus=false">
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="col-sm-3 control-label label-required ng-scope" translate="member.invite.EMAIL_OR_PHONE">邮箱或者手机号</label>
		
		                    <div class="col-sm-9">
		                        <input ng-model="vm.tabDirectData.email" type="text" name="emailOrMobile" email-or-mobile="" autocomplete="off" lc-unique-check="{url:'/api/user/email/or/mobile/check?emailOrMobile='+vm.tabDirectData.email}" class="form-control ng-pristine ng-untouched valid ng-empty ng-invalid ng-invalid-required ng-valid-lc-unique-check" placeholder="输入邮箱地址或者手机号" required="">
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="col-sm-3 control-label label-required ng-scope" >默认密码</label>
		                    <div class="col-sm-9">
		                        <input type="text" ng-hide="true" class="ng-hide" placeholder="输入默认密码号">
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="col-sm-3 control-label ng-scope" translate="member.invite.CODE">员工编号</label>
		
		                    <div class="col-sm-9">
		                        <input class="form-control ng-pristine ng-untouched ng-valid valid ng-empty" name="userCode" type="text" ng-model="vm.tabDirectData.shortCode" placeholder="输入员工编号">
		                    </div>
		                </div>
		                <div class="form-group">
		                    <label class="col-sm-3 control-label ng-scope" translate="所属部门">所属部门</label>
		
		                    <div class="col-sm-9">
		                        <div ng-click="openSelectPop($event)" ng-model="vm.tabDirectData.department" type="department" config="vm.comboboxTreeConfig" class="ng-isolate-scope ng-empty ng-valid">
		    <div class="lc-select ng-scope" ng-if="!config.multiple">
		       <input type="text" class="form-control ng-scope" readonly="readonly" ng-if="treeData.length > 0" ng-value="getSelectedName()" placeholder="不在任何部门中">
		    </div>
		   
		</div>
		                    </div>
		                </div>
		                <div class="form-group">
		                    <div class="col-sm-6 offset-sm-3">
		                        <button type="button" class="btn btn-primary ng-scope" loading-status="vm.isAdding" data-loading-text="保存中..." w5c-form-submit="vm.inviteMember(formNewUserDirect)" translate="member.invite.ADD_MEMBER">添加成员</button>
		                    </div>
		                    <div class="col-sm-3 text-right p-t-10">
		                        <a href="javascript:;" class="ng">批量导入</a>
		                    </div>
		                </div>
		            </form>
				</div>
	    	</div>
    	</div>
    	<div  v-show="xx" class="xx">
    		<div @click="x1" class="x"></div>
    		<div class="x2">
    			<div class="modal-header">
			        <a href="javascript:;" class="modal-close" @click="x1"><font-awesome-icon icon="times" /></a>
			        <h3 class="modal-title">
			            创建群组
			        </h3>
			    </div>
			    <div class="inp">
			    	<input type="text" placeholder="群组名称" v-model="zhui"/>
			    </div>
			    <div class="col">
			    	<ul>
				    	<li class="l1"></li>
				    	<li class="l2"></li>
				    	<li class="l3"></li>
				    	<li class="l4"></li>
				    	<li class="l5"></li>
				    	<li class="l6"></li>
				    	<li class="l7"></li>
				    	<li class="l8"></li>
				    	<li class="l9"></li>
				    	<li class="l10"></li>
				    	<li class="l11"></li>
				    	<li class="l12"></li>
				    	<li class="l13"></li>
				    	<li class="l14"></li>
				    	<li class="l15"></li>
				    	<li class="l16"></li>
				    	<li class="l17"></li>
				    	<li class="l18"></li>
			    	</ul>
			    </div>
			    <div class="form-group row-fill">
	                <label class="col-sm-2 control-label">群组主题</label>
	                <div class="col-sm-10 control-panel">
	                <textarea class="form-control"style="width: 470px;height: 80px;"></textarea>
	                </div>
	            </div>
	            <div class="form-group ng-scope">
	                <label class="col-sm-2 control-label ng-scope">可见范围</label>
	                <div class="col-sm-10 control-panel">
	                    <div class="lc-select">
	                        <select class="form-control" style="width: 470px; height: 38px;">
	                            <option value="1"  class="ng-scope">公开：企业所有成员都可以看见此群组</option>
	                            <option value="2"  class="ng-scope">私有：只有加入的成员才能看见此群组</option>
	                        </select>
	                    </div>
	                </div>
            	</div>
            	<div class="form-group">
            		<label class="col-sm-2 control-label ng-scope">群组成员</label>
            		<div class="user">M</div>
            	</div>
            	<div class="form-group form-group-footer">
	                <div class="left1" style="margin-left: 20%;">
	                    <button type="button" class="btn btn-primary ng-scope" @click="zhuijia()">确定</button>
	                    <a href="javascript:;" style="color: #aaa; margin-left: 25px;" @click="x1">取消</a>
	                </div>
	            </div>
    		</div>
    	</div>
    	<div class="c" v-show="cc">
    		<ul>
    			<li @click="x1">&nbsp;&nbsp;&nbsp;&nbsp;创建群组</li>
    			<li>&nbsp;&nbsp;&nbsp;&nbsp;查看归档群组</li>
    		</ul>
    	</div>
    	<router-view class="nav1"></router-view>
    </div>
</template>

<script>
    export default {
        name: "address",
        data(){
        	return {
        		isshow:true,
        		isshow1:false,
        		z:false,
        		xx:false,
        		cc:false,
        		h:0,
        		h1:0,
        		zhui:'',
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
        			},
        			
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
        		],
        		grup:[
        			{
        				name:'M',
        				url:'/address/M'
        			},
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
        	},
        	z1(){
        		this.z = !this.z;
        	},
        	x1(){
        		this.xx = !this.xx;
        		this.cc = false;
        	},
        	c1(){
        		this.cc = !this.cc;
        	},
        	zhuijia(){
        		if(this.zhui == ''){
        			return
        		}else{
	        		this.tabNav.push({
	        			title:this.zhui,
	        			color:'#18bfa4',
	        			url:'/address/add_1'
	        		})
        		}
        		
        		this.zhui = '',
        		this.xx = false,
        		localStorage.chu1 = this.tabNav;
        		console.log(this.tabNav)
        	}
        	
        }
    }
</script>

<style lang="scss" scoped>
.c{
	width: 240px;
	height: 94px;
	background-color: #fff;
	position: absolute;
    top: 16%;
    left: 9%;
    box-shadow: 0 0 24px rgba(0,0,0,.18);
    z-index: 999;
    cursor: pointer;
    ul li{
    	width: 100%;
    	height:calc(94px / 2);
    	line-height: calc(94px / 2);
    	opacity: 0.7;
    	transition:all 1s;
    }
    li:hover{
    	margin-left: 10px;
    	box-shadow: 0 0 10px 2px #eee;
    }
}
.xx{
	.x{
		width: 100%;
		height: 100%;
		position: fixed;
		top:0;
		left:0;
		background-color: black;
		opacity: 0.4;
		z-index: 99999;
	}
	.x2{
		width: 660px;
		height: 442px;
		background-color: #fff;
		box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
		position: absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-90%);
		z-index:999991 ;
		.inp{
			margin-top: 20px;
			input{
				display: block;
			    width: 100%;
			    line-height: 1.5;
			    color: #333;
			    height: 38px;
			    width: 95%;
			    margin:0 auto;
			    background-color: #fff;
			    background-clip: padding-box;
			    border: 1px solid #eee;
			    border-radius: .25rem;
			    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
			    padding: .469rem .875rem;
    			font-size: .875rem;
			}
			input::-webkit-input-placeholder {
		         color: #CACACA;
		         font-size: 14px;
			}
		}
		.col{
			margin-top: 20px;
			margin-left: 15px;
			width: 100%;
    		height: 50px;
			ul li{
				display: inline-block;
				width: 24px;
				height: 24px;
				text-align: center;
				border-radius: 50%;
				float:left;
				margin-left: 10px;
			}
			.l1{
				background-color: #22D7BD;
			}
			.l2{
				background-color: #18bfa4;
			}
			.l3{
				background-color: #2cccda;
			}
			.l4{
				background-color: #2dbcff;
			}
			.l5{
				background-color: #4e8af9;
			}
			.l6{
				background-color: #7076fa;
			}
			.l7{
				background-color: #9473fd;
			}
			.l8{
				background-color: #c472ee;
			}
			.l9{
				background-color: #ef7ede;
			}
			.l10{
				background-color: #f969aa;
			}
			.l11{
				background-color: #fc587b;
			}
			.l12{
				background-color: #fa5a55;
			}
			.l13{
				background-color: #ff7747;
			}
			.l14{
				background-color: #ffa415;
			}
			.l15{
				background-color: #ffd234;
			}
			.l16{
				background-color: #99d75a;
			}
			.l17{
				background-color: #66c060;
			}
			.l18{
				background-color: #39ba5d;
			}			
		}
		.form-group {
		    display: flex;
		    flex-wrap: wrap;
		    margin-bottom: 15px;
    		.control-label {
			    color: #888;
			    font-size: 14px;
			    font-weight: 400;
			    text-align: right;
			    margin-bottom: 0;
			    padding-top: 6px;
			    flex: 0 0 16.66667%;
    			max-width: 16.66667%;
    			margin-left: 15px;
			}
			.control-panel{
				padding-left: 15px;
				padding-right: 15px;
				
			}
			.form-control{
					display: block;
				    width: 100%;
				    line-height: 1.5;
				    color: #333;
				    background-color: #fff;
				    background-clip: padding-box;
				    border: 1px solid #eee;
				    border-radius: .25rem;
				    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
				}
			.lc-select {
			    position: relative;
			}
			.user{
				width: 30px;
			    height: 30px;
			    line-height: 30px;
			    font-size: 12px;
			    border-radius: 30px;
			    background-color: rgb(239, 126, 222);
			    text-align: center;
			    color: #fff;
			    margin-left: 15px;
			}
			.btn {
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
			    color: #fff;
			    background-color: #22d7bb;
			    border-color: #22d7bb;
			}
			.btn-primary:hover {
			    box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
			}
		}
	}
	.modal-header {
		    padding: 0 1.875rem;
		    align-items: center;
		    height: 50px;
		    display: flex;
		    justify-content: space-between;
		    border-bottom: 1px solid #eee;
		    border-top-left-radius: .3rem;
		    border-top-right-radius: .3rem;
		    a{
		    	float:right;
		    	order: 1;
		    	color: #ddd;
    			line-height: 50px;
		    }
		    h3{
		    	font-size: 1rem;
    			font-weight: 500;
    			margin-bottom: 0;
   				line-height: 3.5;
		    }
		}
}
	
.zz{
	.z{
		width: 100%;
		height: 100%;
		position: fixed;
		top:0;
		left:0;
		background-color: black;
		opacity: 0.4;
		z-index: 99999;
		}
	.tian{
		width: 660px;
		height: 600px;
		background-color: #fff;
		position: fixed;
		top:50%;
		left:50%;
		transform: translate(-50%,-70%);
		z-index: 100000;
	    box-shadow: 0 0 1.5rem rgba(0,0,0,.5);
	    .modal-header {
		    padding: 0 1.875rem;
		    min-height: 1.5;
		    align-items: center;
		    height: 50px;
		    border-bottom: 1px solid #eee;
		    .modal-close {
			    order: 1;
			    color: #ddd;
    			line-height: 50px;
    			float:right;
			}
		     h3 {
			    font-size: 1rem;
			    font-weight: 500;
			    line-height: 47px;
			}
		}
		
	}
	.modal-body{
		position: relative;
    	flex: 1 1 auto;
    	padding: 1.25rem 1.875rem 1.875rem;
    	.thy-nav{
    		flex-wrap: wrap;
		    padding-left: 0;
		    margin-bottom: 0;
		    list-style: none;
		    display: flex;
		    justify-content: center!important;
		    a{
		    	padding: .532rem 0;
			    margin-right: 40px;
			    position: relative;
			    display: block;
    			transform: translateY(1px);
    			text-align: center;
    			color: #666;
		    }
		    .ac{
		    	color: #22d7bb;
		    }
    	}
    	.p-20{
			padding: 20px!important;
			margin-bottom: 1rem;	
		}
		form{
			.form-group {
		    	margin-right: -15px;
		    	display: flex;
			    flex-wrap: wrap;
			    margin-left: -15px;
			    margin-bottom: 1rem;
			    .control-label {
				    padding-right: 0;
				    padding-left: 0;
				    color: #888;
				    font-size: 14px;
				    font-weight: 400;
				    text-align: right;
				    margin-bottom: 0;
				    padding-top: 6px;
				    flex: 0 0 25%;
   				 	max-width: 25%;
				}
				div{
					width: 442px;
					height: 38px;
					padding-right: 15px;
   					padding-left: 15px;
   				  input{
   					 display: block;
				    width: 100%;
				    padding: .469rem .875rem;
    				font-size: .875rem;
				    line-height: 1.5;
				    color: #333;
				    background-color: #fff;
				    background-clip: padding-box;
				    border: 1px solid #eee;
				    border-radius: .25rem;
				    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;	
   					}
   					input::-webkit-input-placeholder {
				         color: #CACACA;
				         font-size: 12px;
				     }
				     .btn{
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
						    color: #fff;
						    background-color: #22d7bb;
						    border-color: #22d7bb;
						    margin-left: 40%;
				     }
				     .ng{
				     		position: absolute;
				     		right:5%;
				     		bottom:15% ;
				     		color: #22d7bb;
				     }
				     .ng:hover{
				     	text-decoration: underline;
				     }
				}
			}
		}
	}
}
	li{
	   list-style: none;
	 }
	 .nav1{
	 	width: 100%;
	 	height: 100%;
	 	position: absolute;
	 	top:0;
	 	left:240px;
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
	    	/*width: 240px;*/
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
	    	.wap{
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
					    .a{
					    	width: 24px;
						    height: 24px;
						    line-height: 24px;
						    font-size: 12px;
						    border-radius: 24px;
						    background-color: rgb(239, 126, 222);
						    color: #fff;
						    text-align: center;
					    }
					    span{
					    	overflow: hidden;
						    white-space: nowrap;
						    text-overflow: ellipsis;
						    max-width: 150px;
						    display: inline-block;
						    vertical-align: middle;
					    }
			    	}
	    		}
	    		.group-char{
		    		margin: 3px 20px;
				    padding: 10px 0;
				    line-height: 1;
				    color: #888;
				    border-bottom: solid 1px #eee;
				    cursor: default;
		    	}
		    	ul li.act{
		    		text-decoration: none;
				    border-right: 3px solid #22d7bb;
				    background: #e7f9f6;
		    	}
	    	}
	    	
	    }
	}
</style>