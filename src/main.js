import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import iView from 'iview'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faComment,
  faSearch,
  faFolder,
  faCaretRight,
  faAngleDown,
  faArrowDown,
  faEllipsisH,
  faUsers,
  faTrashAlt,
  faFileAlt,
  faPlus,
  faUpload,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch,faFolder,faCaretRight,faAngleDown,faArrowDown,faEllipsisH,faUsers,faTrashAlt,faFileAlt,faPlus,faUpload,faCaretDown);

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
        name:'网盘',
        children:[      
            // 配置子路由
            {
                path:'/D_dbank/company',
                component:require('./components/D_dbank/company/company.vue').default,
                name:'企业网盘',
                children:[
                    {
                        path:'/D_dbank/company/system',
                        component:require('./components/D_dbank/company/system/system.vue').default,
                        name:'公司制度'
                    },
                    {
                        path:'/D_dbank/company/ziliao',
                        component:require('./components/D_dbank/company/ziliao/ziliao.vue').default,
                        name:'资料共享'
                    },
                    {
                        path:'/D_dbank/company/manage',
                        component:require('./components/D_dbank/company/manage/manage.vue').default,
                        name:'缺陷管理'
                    }
                ]
            },
            {
                path:'/D_dbank/people',
                component:require('./components/D_dbank/people/people.vue').default,
                name:'个人网盘'
            },
            {
                path:'/D_dbank/share',
                component:require('./components/D_dbank/share/share.vue').default,
                name:'与我共享'
            },
            {
                path:'/D_dbank/trash',
                component:require('./components/D_dbank/trash/trash.vue').default,
                name:'回收站'
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
