import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import iView from 'iview'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faComment
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment);

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
        name:'消息',
        children:[
            {
                path:'/A_news/xtjq',
                component:require('./components/A_news/xtjq/xtjq.vue').default,
                name:'小特机器人',
                img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png', 
                children:[
                    {
                        path:'/A_news/xtjq/xai',
                        component:require('./components/A_news/xtjq/xai/xai.vue').default,
                        name:'消息'
                    },
                    {
                        path:'/A_news/xtjq/wj',
                        component:require('./components/A_news/xtjq/wj/wj.vue').default,
                        name:'文件'
                    },
                    {
                        path:'/A_news/xtjq/gdx',
                        component:require('./components/A_news/xtjq/gdx/gdx.vue').default,
                        name:'固定消息'
                    },
                    {
                        path:'*',
                        redirect:'/A_news/xtjq/xai'
                    }
                ]
            },
            {
                path:'/A_news/qygg',
                component:require('./components/A_news/qygg/qygg.vue').default,
                name:'企业公告',
                img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/381df779-62e6-49de-8792-620b94a5582d_40x40.png',
                children:[
                    {
                        path:'/A_news/qygg/xai',
                        component:require('./components/A_news/qygg/xai/xai.vue').default,
                        name:'消息'
                    },
                    {
                        path:'/A_news/qygg/wj',
                        component:require('./components/A_news/qygg/wj/wj.vue').default,
                        name:'文件'
                    },
                    {
                        path:'/A_news/qygg/gdx',
                        component:require('./components/A_news/qygg/gdx/gdx.vue').default,
                        name:'固定消息'
                    },
                    {
                        path:'*',
                        redirect:'/A_news/qygg/xai'
                    }
                ]
            },
            {
                path:'/A_news/ower',
                component:require('./components/A_news/ower/ower.vue').default,
                name:'项目助手',
                img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/mission_40x40.png',
                children:[
                    {
                        path:'/A_news/ower/xai',
                        component:require('./components/A_news/ower/xai/xai.vue').default,
                        name:'未读'
                    },
                    {
                        path:'/A_news/ower/wj',
                        component:require('./components/A_news/ower/wj/wj.vue').default,
                        name:'已读'
                    },
                    {
                        path:'/A_news/ower/gdx',
                        component:require('./components/A_news/ower/gdx/gdx.vue').default,
                        name:'待处理'
                    },
                    {
                        path:'*',
                        redirect:'/A_news/ower/xai'
                    }
                ]
            },
            {
                path:'/A_news/wqzs',
                component:require('./components/A_news/wqzs/wqzs.vue').default,
                name:'网盘助手',
                img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png',
                children:[
                    {
                        path:'/A_news/wqzs/xai',
                        component:require('./components/A_news/wqzs/xai/xai.vue').default,
                        name:'未读'
                    },
                    {
                        path:'/A_news/wqzs/wj',
                        component:require('./components/A_news/wqzs/wj/wj.vue').default,
                        name:'已读'
                    },
                    {
                        path:'/A_news/wqzs/gdx',
                        component:require('./components/A_news/wqzs/gdx/gdx.vue').default,
                        name:'待处理'
                    },
                    {
                        path:'*',
                        redirect:'/A_news/wqzs/xai'
                    }
                ]
            },
            {
                path:'/A_news/rczs',
                component:require('./components/A_news/rczs/rczs.vue').default,
                name:'日程助手',
                img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/calendar_40x40.png',
                children:[
                    {
                        path:'/A_news/rczs/xai',
                        component:require('./components/A_news/rczs/xai/xai.vue').default,
                        name:'未读'
                    },
                    {
                        path:'/A_news/rczs/wj',
                        component:require('./components/A_news/rczs/wj/wj.vue').default,
                        name:'已读'
                    },
                    {
                        path:'/A_news/rczs/gdx',
                        component:require('./components/A_news/rczs/gdx/gdx.vue').default,
                        name:'待处理'
                    },
                    {
                        path:'*',
                        redirect:'/A_news/rczs/xai'
                    }
                ]
            },
            {
                path:'*',
                redirect:'/A_news/xtjq'
            }
        ]
    },
    {
        path:'/items',
        component:Items.default,
        name:'项目'
    },
    {
        path:'/calendar',
        component:Calendar.default,
        name:'日历'
    },
    {
        path:'/dbank',
        component:Dbank.default,
        name:'网盘'
    
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

//配置vuex
const store = new Vuex.Store({
    state:{
      count:1
    }
});


new Vue({
  el: '#app',
    store,
    router,
  // render: h => h(App),
    components:{
      App,iView
    }
});
