<template>
	<div class="header">
		<div class="module-header">
			<div class="title"> 
				<span  class="icon1">
					<font-awesome-icon icon="user-friends"/>
				</span>
				<a href="#">一组</a>
				<span class="s">1人</span>
			</div>
			
		</div>
		<div class="header-b">
			<div class="head">
				<ul>
					<li>
						<p class="m1">M</p>
						<p class="m2">M</p>
					</li>
					
				</ul>
				<div class="fa">
					<button class="fa1">发消息</button>
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
	    	height: 50px;
	    	width: 100%;
		    margin: 0;
		    padding: 0 15px;
		    position: relative;
		    background: #FBFBFB;
		    line-height: 50px;
		    .s{
			    overflow: hidden;
			    white-space: nowrap;
			    text-overflow: ellipsis;
			    line-height: 50px;
			    padding: 0 10px;
			    color: #aaa;
		    }
	    }
       .icon1{
	    	display: inline-block;
	    	line-height: 24px;
		    border-radius: 50%;
		    color: white;
		    text-align: center;
		    vertical-align: middle;
		    width: 24px;
			height: 24px;
			background-color: #22D7BB;
	    }
	    .header-b{
	    	width: 100%;
	    	height:100%;
	    	background-color: #DBDBDB;
	    	position: absolute;
	    	top:60px;
	    	left:10px;
	    	.head{
	    		width: 96.5%;
	    		height:100%;
	    		background-color: #fff;
	    		position: absolute;
	    		ul{
	    			margin: 10px 15px;
	    			display: inline-block;
	    			li{
	    				float: left;
   						margin: 20px 27px;
   						.m1{
   							display: inline-block;
   							width: 50px;
   							height: 50px;
   							background-color: #EF7EDE;
   							text-align: center;
   							line-height: 50px;
   							color:#fff;
   							border-radius: 50%;
   						}
   						.m2{
   							width: 50px;
   							text-align: center;
   							line-height: 37px;
   						}
	    			}
	    		}
	    		.fa{
	    			padding-left: 20px;
	    			margin-top: -10px;
	    			.fa1{
	    				padding: 5px 30px;
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