import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import iView from 'iview'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faComment,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch);

Vue.component("font-awesome-icon", FontAwesomeIcon);


Vue.use(Vuex);

Vue.use(VueRouter);

Vue.use(iView);
// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const Items = require('./components/B_items/items.vue');
const Calendar = require('./components/C_calendar/calendar.vue');
const Dbank = require('./components/D_dbank/dbank.vue');
const Address = require('./components/E_address/address.vue');

//路由配置
const r = [
    {
        path:'/news',
        component:News.default,
        name:'消息'
    },
    {
        path:'/items',
        component:Items.default,
        name:'项目',
        children:[
            {
              path:'/B_items/peizhi',
              name:'配置中心',
              component:require('./components/B_items/peizhi/peizhi.vue').default,
              children:[
                {
                  path:'/B_items/peizhi/xiangmu',
                  name:'项目',
                  component:require('./components/B_items/peizhi/xiangmu/xiangmu.vue').default,
                  children:[
                    {
                      path:'/B_items/peizhi/xiangmu/xiangmu',
                      name:'项目模板',
                      component:require('./components/B_items/peizhi/xiangmu/xiangmu/xiangmu.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/xiangmu/zujian',
                      name:'组件管理',
                      component:require('./components/B_items/peizhi/xiangmu/zujian/zujian.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/xiangmu/baobiao',
                      name:'报表',
                      component:require('./components/B_items/peizhi/xiangmu/baobiao/baobiao.vue').default,
                    }
                  ]
                },
                {
                  path:'/B_items/peizhi/renwu',
                  name:'任务',
                  component:require('./components/B_items/peizhi/renwu/renwu.vue').default,
                  children:[
                    {
                      path:'/B_items/peizhi/renwu/renwu',
                      name:'任务类型',
                      component:require('./components/B_items/peizhi/renwu/renwu/renwu.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/renwu/shuxing',
                      name:'属性管理',
                      component:require('./components/B_items/peizhi/renwu/shuxing/shuxing.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/renwu/zhuangtai',
                      name:'状态管理',
                      component:require('./components/B_items/peizhi/renwu/zhuangtai/zhuangtai.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/renwu/shuju',
                      name:'数据管理',
                      component:require('./components/B_items/peizhi/renwu/shuju/shuju.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/renwu/biaoqian',
                      name:'标签管理',
                      component:require('./components/B_items/peizhi/renwu/biaoqian/biaoqian.vue').default,
                    },
                    {
                      path:'/B_items/peizhi/renwu/youxianji',
                      name:'优先级管理',
                      component:require('./components/B_items/peizhi/renwu/youxianji/youxianji.vue').default,
                    }
                  ]
                },
                {
                  path:'/B_items/peizhi/anquan',
                  name:'安全',
                  component:require('./components/B_items/peizhi/anquan/anquan.vue').default,
                },
                {
                  path:'/B_items/peizhi/gaoji',
                  name:'高级',
                  component:require('./components/B_items/peizhi/gaoji/gaoji.vue').default,
                },
                {
                  path:'/B_items/peizhi/quanju',
                  name:'全局',
                  component:require('./components/B_items/peizhi/quanju/quanju.vue').default,
                }
              ]
            },
            {
              path:'/B_items/huishou',
              name:'回收站',
              component:require('./components/B_items/huishou/huishou.vue').default,
            }
          ]
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历'
    },
    {
        path:'/dbank',
        component:Dbank.default,
        name:'网盘',
        children:[      
            // 配置子路由
            {
                path:'/D_dbank/company',
                component:require('./components//D_dbank/company/company.vue').default,
                name:'企业网盘'
            },
            {
                path:'/D_dbank/people',
                component:require('./components//D_dbank/people/people.vue').default,
                name:'个人网盘'
            },
        ]
    },
    {
        path:'/address',
        component:Address.default,
        name:'通讯录'
    },
    {
      //如果用户随便输入地址,转到首页   给一个重定位
        path:'*',
        redirect:'/news'
    }
];

//路由初始化
const router = new VueRouter({
    // 这里的routes 建必须这么写
   routes : r
});

// 设置全局守卫
router.beforeEach((to,from,next) => {
    // console.log(from);
    // console.log(to);
    document.title = to.name;
    next();
  })
  // 配置vue
  const store = new Vuex.Store({
    state:{
      count:1
    }
  })


new Vue({
  el: '#app',
    store,
    router,
  // render: h => h(App),
    components:{
      App,iView
    }
});