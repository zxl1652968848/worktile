<template>
    <div>
        <div class="gdx">固定消息</div>
        <div class="nc">
            <i class="iconfont icon-918caidan_wenjian"></i>
            <p>没有固定的消息！</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style  lang='scss' scoped>
    .gdx{
        margin: 20px 20px 0;
        line-height: 20px;
        font-size: 14px;
        padding-left: 8px;
        color: #333;
        border-left: solid 3px #22d7bb;
    }
    .nc{
        width: 100%;
        position: absolute;
        top: 30%;
        padding: 15px 25px;
        text-align: center;
        color: #cacaca;
        font-size: 17px;
        i{
            font-size: 80px;
        }
    }
</style>