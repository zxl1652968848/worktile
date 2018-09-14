<template>
	<div class="header">
		<div class="module-header">
			<div class="module-t">
				<div class="avatar">
					<span>M</span>
				</div>
				<div class="profile-header-profiles">
					<div class="display_name ng-binding">
	                    M
	                    <span class="name ng-binding">@17600978244</span>
	                    <a href="javascript:;" class="following">
	                    	<font-awesome-icon icon="star"/>
	                    </a>
	              	</div>
	               	<ul>
	               		<li>
	               			<font-awesome-icon icon="address-card" style="font-size: 16px;"/>
	               			<span>技术总监</span>
	               		</li>
	               		<li class="line">&nbsp;</li>
	               		<li>
	               			<font-awesome-icon icon="envelope" style="font-size: 16px;"/>
	               			<span>暂无</span>
	               		</li>
	               		<li class="line">&nbsp;</li>
	               		<li>
	               			<font-awesome-icon icon="phone" style="font-size: 16px;"/>
	               			<span>17600978244</span>
	               		</li>
	               </ul>
	               <div class="profile-header-action">
	               	<a href="javascript:;"class="btn btn1">
	               		编辑资料
	               	</a>
	               	<a href="javascript:;"class="btn btn2">
	               		分配任务
	               	</a>
	               </div>
               </div>
			</div>
			<div class="module-b">
				<div class="profile-body-content">
					<div class="panel">
						<div class="panel-heading">
					        <span class="panel-title ng-scope" translate="calendar.EVENTS_TODAY">M的任务</span>
					    </div>
					    <div class="header-btn">
					    	<font-awesome-icon icon="th-large"/>
	                        <select name="" id="">
	                        	<option value="">按处理优先级</option>
	                        	<option value="">按项目</option>
	                        	<option value="">按截止日期</option>
	                        	<option value="">按更新时间</option>
	                        	<option value="">按完成时间</option>
	                        	<option value="">全部任务</option>
	                        </select>
	                    </div>
						<div class="empty" style="margin-top: 120px;">
							<font-awesome-icon icon="file-alt" style="font-size: 5rem;"/>
					    	<p class="empty-text ng-binding">没有任务</p>
						</div>			
					</div>
				</div>
				<div class="profile-body-side">
					<div class="panel">
						<div class="panel-body">
							<ul>
				                <li class="ng-binding">
				                    <div class="count-number text-primary ng-binding">0</div>
				                   	 已完成
				                </li>
				                <li class="line">&nbsp;</li>
				                <li class="ng-binding">
				                    <div class="count-number ng-binding">0</div>
				                    	待完成
				                </li>
				                <li class="line">&nbsp;</li>
				                <li class="ng-binding">
				                    <div class="count-number ng-binding">0</div>
				                    	延期
				                </li>
				            </ul>
						</div>
					</div>
					<div class="panel">
						<div class="panel-heading">
					        <span class="panel-title ng-scope" translate="calendar.EVENTS_TODAY">今日日程</span>
					    </div>
					    <div class="wen">
					    	<font-awesome-icon icon="file-alt"/>
					    	<p class="empty-text ng-binding">没有数据</p>
					    </div>
					    
					</div>
					<div class="panel">
						<div class="panel-heading">
					        <span class="panel-title ng-scope" translate="calendar.EVENTS_TODAY">详细资料</span>
					    </div>
					    <div class="panel_z">
						    <div>
						    	<span class="title">手机</span><span class="content">17600978244</span>
						    </div>
						    <div><span class="title">邮箱</span><span class="content">暂无</span></div>
						    <div><span class="title">部门</span><span class="content">暂无</span></div>
						    <div><span class="title">职位</span><span class="content">技术总监</span></div>
					    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style lang="scss" scoped>
		.header{
			    width: 100%;
				-ms-flex: 1 1 0px;
			    flex: 1 1 0;
			    -webkit-flex: 10 10 0;
			    display: flex;
			    display: -ms-flexbox;
			    display: -webkit-flex;
			    -ms-flex-direction: column;
		    .module-header{
		    	position: relative;
			    -webkit-box-flex: 1;
			    -ms-flex: 1 1 0px;
			    flex: 1 1 0;
			    -webkit-flex: 1 1 0;
			    overflow: auto;
			 .module-t{
			    	display: -webkit-box;
				    display: flex;
				    display: -ms-flexbox;
				    display: -webkit-flex;
				    -webkit-box-orient: horizontal;
				    -webkit-box-direction: normal;
				    -ms-flex-direction: row;
				    flex-direction: row;
				    padding: 120px 0 0 15px;
				    height: 250px;
				    width: 100%;
				    background: url(https://wttt.worktile.com/image/app/contacts/profile-bg.jpg?t=1536662418992) top left repeat-x #fff;
				    background-size: auto 200px;
				    .profile-header-profiles{
				    	-webkit-box-flex: 1;
					    -ms-flex: 1 1 0px;
					    flex: 1 1 0;
					    -webkit-flex: 1 1 0;
					    position: relative;
				    }
				    .avatar{
				    	width: 110px;
				    	height: 110px;
				    	background-color: #EF7EDE;
				    	border-radius: 50%;
				    	line-height: 110px;
				    	text-align: center;
				    	margin-right: 20px;
				    	span{
				    		font-size: 45px;
				    		color: #fff;
				    	}
				    }
				    .display_name {
					    margin-bottom: 15px;
					    padding-top: 35px;
					    line-height: 1;
					    font-size: 20px;
					    color: #666;
					    width: 100%;
    					height: 60px;
					    .name{
					    	font-size: 16px;
    						color: #888;
					    }
					}
					ul{
						display: inline-block;
						padding-top: 18px;
						li{
							display: inline-block;
						    margin-right: 25px;
						    color: #333;
						    vertical-align: middle;
						    opacity: 0.6;
						}
						.line{
							width: 0;
						    line-height: 16px;
						    border-right: solid 1px #ddd;
						}
					}
					.profile-header-action {
						    width: 460px;
						    position: absolute;
						    right: 15px;
						    bottom: 7px;
						    .btn{
						    	padding: .407rem 22px;
    							border-radius: 1.25rem;
    							font-size: .875rem;
							    min-width: 70px;
							    line-height: 1.5;
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
						    .btn1{
						    	color: #fff;
							    background-color: #22d7bb;
							    border-color: #22d7bb;
						    }
						    .btn1:hover{
						    	box-shadow: 0 2px 5px 1px rgba(34,215,187,.6);
						    }
						    .btn2{
						    	color: #888;
							    background-color: transparent;
							    background-image: none;
							    border-color: #ddd;
						    }
						    .btn2:hover{
						    	color: #22d7bb;
   								border-color: #22d7bb;
						    }
						}
			    }
		    } 
		    .module-b{
		    	position: relative;
			    padding: 15px;
			    display: -webkit-box;
			    display: flex;
			    display: -ms-flexbox;
			    display: -webkit-flex;
			    -webkit-box-orient: horizontal;
			    -webkit-box-direction: normal;
			    -ms-flex-direction: row;
			    flex-direction: row;
			    height: 72%;
			    background: url(https://cdn.worktile.com/pro/image/app/desktop.background/desktop-5.jpg?v=7.0.3+20180830) no-repeat -250px 0px ;
			   	background-size:100% 100% ;
			    overflow: hidden;
			    .profile-body-content {
				    -webkit-box-flex: 1;
				    -ms-flex: 1 1 0px;
				    flex: 1 1 0;
				    -webkit-flex: 1 1 0;
				    .panel{
				    	margin-bottom: 15px;
					    -webkit-box-shadow: 0 0!important;
					    box-shadow: 0 0!important;
					    border-radius: 2px;
					    height: 83%;
					    width: 83%;
					    margin-bottom: 20px;
					    background-color: #fdfdfd;
					    border: 1px solid transparent;
					    border-radius: 0;
					    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
					    box-shadow: 0 1px 1px rgba(0,0,0,.05);
					    .header-btn{
					    	float:right;
					    	position: relative;
					    	top: -25px;
   							left: -20px;
					    	svg{
					    		 position: absolute;
   								 top: 8px;
    							 left: 20px;
    							 color: #22D7BB;
					    	}
					    	select{
					    		width: 150px;
					    		height: 30px;
					    		outline: none;
					    		margin-left: 10px;
					    		padding-left: 30px;
					    		 appearance:none;
					    	}
					    	select:hover{
					    		border:1px solid #22D7BB;
					    		color: #22D7BB;
					    	}
					    	option{
					    		width: 200px;
					    		margin: 50px;
					    		padding: 5px 35px 5px 5px;
					    	}
					    }
					    .empty{
					    	text-align: center;
					    	color: #eee;
					    	p{
					    		font-size: 1rem;
					    		color: #cacaca;
					    		margin-top: 1rem;
					    		margin-bottom: 1rem;
					    	}
					    }
				    }
				}
				.profile-body-side{
					margin-left: 15px;
    				width: 300px;
    				position: relative;
    				left:-14%;
    				.panel{
    					margin-bottom: 15px;
					    -webkit-box-shadow: 0 0!important;
					    box-shadow: 0 0!important;
					    border-radius: 2px;
					    margin-bottom: 20px;
					    background-color: #fdfdfd;
					    border: 1px solid transparent;
					    border-radius: 0;
					    -webkit-box-shadow: 0 1px 1px rgba(0,0,0,.05);
					    box-shadow: 0 1px 1px rgba(0,0,0,.05);
					    .panel-body{
					    	padding: 15px 0;
					    	ul{
					    		display: flex;
					    		.ng-binding{
					    			-webkit-box-flex: 1;
								    -ms-flex: 1;
								    flex: 1;
								    width: 0;
								    font-size: 12px;
								    color: #888;
								    text-align: center;
								    .count-number {
									    font-size: 24px;
									    font-family: lcletter;
									    margin-left: 43%;
									}
									.line {
									    -webkit-box-flex: 0;
									    -ms-flex: 0;
									    flex: 0;
									    margin-top: 6px;
									    width: 0;
									    height: 43px;
									    border-right: solid 1px #eee;
									}
					    		}
					    	}
					    }
    				}
				}
				.panel-heading{
					padding: 10px 20px 0;
				    line-height: 30px;
				    font-size: 14px;
				    border-bottom: none;
				    
				    .panel-title {
					    display: inline-block;
					    padding-left: 8px;
					    line-height: 1;
					    color: #333;
					    font-size: 14px;
					    border-left: solid 3px #22d7bb;
					}
				}
				.wen{
					margin-top: 16px;
					text-align: center;
					svg{
						color: #eee;
    					font-size: 4.125rem;
					}
					p{
						color: #cacaca;
   						 font-size: .875rem;
   						 margin-top: 1rem;
   						 margin-bottom: 1rem;
					}
				}
				.panel_z{
					div{
						margin-bottom: 20px;
					    font-size: 14px;
					    display: -webkit-box;
					    display: flex;
					    display: -ms-flexbox;
					    display: -webkit-flex;
					    -webkit-box-orient: horizontal;
					    -webkit-box-direction: normal;
					    -ms-flex-direction: row;
					    flex-direction: row;
					}
					.title {
					    margin-right: 20px;
					    width: 60px;
					    text-align: right;
					    color: #aaa;
					}
				    .content {
					    -webkit-box-flex: 1;
					    -ms-flex: 1 1 0px;
					    flex: 1 1 0;
					    -webkit-flex: 1 1 0;
					    color: #666;
					    text-align: left;
					    word-break: break-all;
					}
				}
				
		    }
		}
</style>