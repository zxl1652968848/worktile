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
        <ul class="xinxi_con">
          <li v-for="(item,index) of todos" :key="index" class="clun">
            <b>M</b>
            <h5>
              {{item.name}} 
              <span>M</span>
              <span class="itcm">{{item.sj}}</span> 
              <!-- <span @click="del(item.id)">X</span> -->
            </h5>
            <p class="icmp">{{item.title}}</p>
          </li>
        </ul>
    </div>
    <div class="fot">
      <ul class="fotu">
        <li class="iconfont icon-xiaolian"></li>
        <li class="iconfont icon-icon-test1"></li>
        <li class="iconfont icon-jiahao1"></li>
        <li class="iconfont icon-weibiaoti8"></li>
      </ul>
      <textarea class="fotnv" placeholder="按Enter发送消息" @keydown.enter="add" v-model="txt"></textarea>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      txt: ""
    };
  },
  created() {
    // 发送默认 GETALL
    this.$store.dispatch("ryGETALL");
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  methods: {
    del(id) {
      // 只需要一个id就行了
      this.$store.dispatch("ryDEL", {
        id: id
      });
    },
    add() {
      var date = new Date();
      this.sj = date.getHours() + ":" + date.getMinutes();
      // 如果为空 就 return 掉 什么都不做
      if (this.txt == "") return;
      // 随机一个8位id
      var id = "";
      var str = "741852qwertyuioplkjhgfdszxcvbnm0963";
      for (var i = 0; i < 8; i++) {
        //~~ 相当于parseInt
        id += str[~~(Math.random() * str.length)];
      }
      // 发送add 新增命令
      this.$store.dispatch("ryADD", {
        name: this.name,
        title: this.txt,
        id: id,
        sj: this.sj
      });
      // 点击后 清空 文本框
      this.txt = "";
    }
  }
};
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
.clun{
  position: relative;
  margin: 5px 0;
  overflow: hidden;
  b{
    display: block;
                width: 38px;
                height: 38px;
                line-height: 38px;
                font-size: 12px;
                border-radius: 38px;
                background-color: rgb(239, 126, 222);
                color: #fff;
                float: left;
                text-align: center;
  }
  .itcm{
    margin-left: 10px;
                color: #aaa;
                font-size: 12px;
                float: left;
  }
  .icnp{
    margin-left: 60px;
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