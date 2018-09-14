<template>
    <div>
        <div class="t">
        	<i class="iconfont icon-xiashurenwu-"></i>
        	下属任务
        </div>
        <div class="b">
        	<div class="tu">
        		<img src="../../../../assets/coming_soon.png">
				<span class="x">新功能正在开发中，敬请期待...</span>
        	</div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
	data(){
		return{
		}
	}
}
</script>

<style scoped>
	div{
		height:100%;
	}
	*{
		box-sizing: border-box;
	}
	.t{
		height:50px;
		width: 100%;
		background: rgb(252,252,252);
		font-size:16px;
		line-height: 50px;
		padding-left: 20px;
		position: relative;
	}
	.t i{
		font-size:14px;
		color: #22d7bb;
		line-height: 50px;
		margin-right:10px;
	}
	.b{
    	flex: 1;
	    display: flex;
	    flex-direction: column;
	    padding: 15px;
	    height: calc(100% - 50px);
	}
	.b .tu{
		width: 100%;
		height:100%;
    	background: #fff;
    	position: relative;
	}
	.b .tu img{
		position: absolute;
		top:200px;
		left:38%;
		width:287px;
		height:343px;
	}
	.b .x{
		display: inline;
		position: absolute;
		top:600px;
		left: 40%;

	}
</style>
