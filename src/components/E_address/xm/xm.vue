<template>
	<div class="header">
		<div class="header-b">
			<div class="head">
				<div class="body-content">
					<div class="img">
						<img src="https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_160x160.png" alt="" />
					</div>
					<div class="display_name ng-binding">项目助手</div>
					<div class="username ng-binding">@bot_mission</div>
					<div class="profile-detail-body">
                <div class="profile-row">
                    <div class="title ng-scope" translate="contact.DESCRIPTION">简介</div>
                    <div class="content">
                        <span ng-if="vm.member.robotRemark" class="ng-binding ng-scope">通过任务可以随时管理团队成员的工作，项目管理，跟踪任务进展。</span>
                    </div>
                </div>
            </div>
					<div class="fa">
						<button class="fa1">发消息</button>
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
	    .header-b{
	    	width: 100%;
	    	height:100%;
	    	background-color: #DBDBDB;
	    	position: absolute;
	    	top:20px;
	    	left:10px;
	    	.head{
	    		width: 100%;
	    		height:100%;
	    		background-color: #fff;
	    		position: absolute;
	    		.body-content{
	    			margin: 80px auto;
    				width: 620px;
    				text-align: center;
    				margin-left: 27%;
    				.img img{
    					width: 160px;
					    height: 160px;
					    line-height: 160px;
					    font-size: 50px;
					    border-radius: 160px;
    				}
    				.display_name {
					    color: #666;
					    font-weight: 700;
					    font-size: 24px;
					    margin-top: 10px;
					}
					.username {
					    color: #888;
					    font-size: 16px;
					    margin: 20px 0;
					}
					.profile-detail-body {
					    padding: 30px 0;
					    border-top: 1px solid #eee;
					}
					.profile-row {
					    margin-bottom: 20px;
					    margin-left: 30px;
					}
					 .profile-row .title {
					    float: left;
					    width: 145px;
					    font-weight: 700;
					    text-align: right;
					    color: #aaa;
					}
					.content {
					    float: left;
					    margin-left: 45px;
					    width: 300px;
					    font-size: 15px;
					    color: #666;
					    font-size: 15px;
					    text-align: left;
					}
	    		}
	    		.fa{
	    			margin-top: 50px;
	    			.fa1{
	    				padding: 8px 34px;
					    line-height: 1.42857143;
					    border-radius: 20px;
					    color: #fff;
					    background-color: #22d7bb;
					    border-color: #22d7bb;
					    border: 1px solid transparent;
	    			}
	    			.fa1:hover{
	    				box-shadow: 0 2px 5px 1px rgba(24,191,164,.45)
	    			}
	    		}
	    	}
	    }
	}
</style>