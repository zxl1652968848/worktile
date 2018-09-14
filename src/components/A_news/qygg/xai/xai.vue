<template>
<div>
  <div class="xinxi">
        <div class="x_top">
            <p class="x_xi">企业公告由系统自动创建，所有企业成员都会自动加入到当前群组，该群组无法删除。</p>
            <div class="tj">
              <a class="iconfont icon-changyonggongju2" href="#">添加服务集成</a>
              <a class="iconfont icon-jiahao" href="#">加入更多群组</a>
            </div>
        </div>
    </div>
    <div class="fot">
      <ul class="fotu">
        <li class="iconfont icon-xiaolian"></li>
        <li class="iconfont icon-icon-test1"></li>
        <li class="iconfont icon-jiahao1"></li>
        <li class="iconfont icon-weibiaoti8"></li>
      </ul>
      <textarea class="fotnv" placeholder="按Enter发送消息"></textarea>
    </div>
</div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
.xinxi {
  width: 100%;
  height: calc(100% - 170px);
  padding-top: 15px;
  padding-left: 15px;
}
.x_xi {
  color: #b9b9b9;
  font-size: 15px;
}
.tj{
  margin-top: 20px;
  font-size: 15px;
  a{
    color: #6f8092;
    margin-right: 30px;
  }
}
.fot{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 170px;
    border-top: solid 1px #eee;
    .fotu{
      margin-left: 6px;
      list-style: none;
      overflow: hidden;
      display: block;
      li{
        float: left;
        color: #aaa;
        padding: 8px 12px 8px 13px;
      }
    }
    .fotnv{
      width: 100%;
      border:0;
      font-size: 14px;
      outline: none;
      padding: 0 20px;
      overflow: hidden;
      overflow-wrap: break-word;
      resize: none;
      height: 63px;
    }
}
</style>