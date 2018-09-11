<template>
    <div class="address">
    	<div class="address_left">
    		<div class="address_left_top">
    			<span>通讯录</span>
    			<div class="address_left_user">
	    			<a href="#">
	    				<font-awesome-icon icon="user-plus" class="gray1" />
	    			</a>
    		    </div>
    		</div>
    		<div class="address_left_b">
    			<div class="address_left_b_inp">
    				<i></i>
    				<input type="text" placeholder="搜索"/>
    			</div>
    		</div>
    		<div class="address_left_button">
    			
    		</div>
    	</div>
    </div>
</template>

<script>
    export default {
        name: "address"
    }
</script>

<style lang="scss" scoped>
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
		    }
	    }
	}
</style>