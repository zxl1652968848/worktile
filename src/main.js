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
  faUsers,
  faSitemap,
  faCaretRight,
  faUserFriends
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch,faUsers,faSitemap,faCaretRight,faUserFriends);

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
        name:'网盘'
    },
    {
        path:'/address',
        component:Address.default,
        name:'通讯录',
        children:[
        		{
        				path:'/address/add_1',
                component:require('./components/E_address/add_1/add_1.vue').default,
                name:'1'
        		},
        		{
        				path:'/address/add_2',
                component:require('./components/E_address/add_2/add_2.vue').default,
                name:'2'
        		},
        		{
        				path:'/address/add_3',
                component:require('./components/E_address/add_3/add_3.vue').default,
                name:'3'
        		},
        		{
        				path:'/address/add_4',
                component:require('./components/E_address/add_4/add_4.vue').default,
                name:'4'
        		},
        		{
        				path:'/address/add_5',
                component:require('./components/E_address/add_5/add_5.vue').default,
                name:'5'
        		},
        		{
        				path:'/address/add_6',
                component:require('./components/E_address/add_6/add_6.vue').default,
                name:'6'
        		},
        		{
        				path:'/address/rc',
                component:require('./components/E_address/rc/rc.vue').default,
                name:'rc'
        		},
        		{
        				path:'/address/wp',
                component:require('./components/E_address/wp/wp.vue').default,
                name:'wp'
        		},
        		{
        				path:'/address/xm',
                component:require('./components/E_address/xm/xm.vue').default,
                name:'xm'
        		},
        		{
        				path:'/address/xt',
                component:require('./components/E_address/xt/xt.vue').default,
                name:'xt'
        		},
        ]
        
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
