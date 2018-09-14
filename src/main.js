import "babel-polyfill";
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
  faCaretDown,
  faUserFriends,
  faPlusCircle,
  faSitemap
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserPlus,faComment,faSearch,faFolder,faCaretRight,faAngleDown,faArrowDown,faEllipsisH,faUsers,faTrashAlt,faFileAlt,faPlus,faUpload,faCaretDown,faPlusCircle,faUserFriends,faSitemap);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Vuex);

Vue.use(VueRouter);

Vue.use(iView);
// 使用路由管理几个子组件
//引入子组件
const News = require('./components/A_news/news.vue');
const Items = require('./components/B_items/items.vue');
const Calendar = require('./components/C_calendar/menology.vue');
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
              path:'/A_news/xtjq/',
              component:require('./components/A_news/xtjq/xtjq.vue').default,
              name:'小特机器人',
              children:[
                  {
                      path:'/A_news/xtjq/gdx',
                      component:require('./components/A_news/xtjq/gdx/gdx.vue').default,
                      name:'固定消息小特机器人',
                  },
                  {
                      path:'/A_news/xtjq/wj',
                      component:require('./components/A_news/xtjq/wj/wj.vue').default,
                      name:'文件小特机器人',
                  },
                  {
                      path:'/A_news/xtjq/xai',
                      component:require('./components/A_news/xtjq/xai/xai.vue').default,
                      name:'消息小特机器人',
                  },
                  {
                      path:'/A_news/xtjq/',
                      redirect:'/A_news/xtjq/wj'
                  }
              ]
          },
          {
              path:'/A_news/qygg',
              component:require('./components/A_news/qygg/qygg.vue').default,
              name:'企业公告',
              img:'https://s3.cn-north-1.amazonaws.com.cn/lcavatar/drive_40x40.png',
              children:[
                  {
                      path:'/A_news/qygg/xai',
                      component:require('./components/A_news/qygg/xai/xai.vue').default,
                      name:'消息企业公告'
                  },
                  {
                      path:'/A_news/qygg/wj',
                      component:require('./components/A_news/qygg/wj/wj.vue').default,
                      name:'文件企业公告'
                  },
                  {
                      path:'/A_news/qygg/gdx',
                      component:require('./components/A_news/qygg/gdx/gdx.vue').default,
                      name:'固定消息企业公告'
                  },
                  {
                      path:'/A_news/qygg/',
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
                      name:'未读项目助手'
                  },
                  {
                      path:'/A_news/ower/wj',
                      component:require('./components/A_news/ower/wj/wj.vue').default,
                      name:'已读项目助手'
                  },
                  {
                      path:'/A_news/ower/gdx',
                      component:require('./components/A_news/ower/gdx/gdx.vue').default,
                      name:'待处理项目助手'
                  },
                  {
                      path:'/A_news/ower/',
                      redirect:'/A_news/ower/xai'
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
                      name:'未读日程助手'
                  },
                  {
                      path:'/A_news/rczs/wj',
                      component:require('./components/A_news/rczs/wj/wj.vue').default,
                      name:'已读日程助手'
                  },
                  {
                      path:'/A_news/rczs/gdx',
                      component:require('./components/A_news/rczs/gdx/gdx.vue').default,
                      name:'待处理日程助手'
                  },
                  {
                      path:'/A_news/rczs/',
                      redirect:'/A_news/rczs/xai'
                  }
              ]
          }
        ]
    },
    {
        path:'/items',
        component:Items.default,
        name:'项目',
        children:[
          {
            path:'/B_items/gongzuo',
            name:'工作',
            component:require('./components/B_items/gongzuo/gongzuo.vue').default,
            children:[
              {
                path:'/B_items/gongzuo/subordinate',
                name:'下属任务',
                component:require('./components/B_items/gongzuo/subordinate/subordinate.vue').default,
              },
              {
                path:'/B_items/gongzuo/wode',
                name:'我的任务',
                component:require('./components/B_items/gongzuo/wode/wode.vue').default,
                children:[
                  {
                    path:'/B_items/gongzuo/wode/mycj',
                    name:'我创建的',
                    component:require('./components/B_items/gongzuo/wode/mycj/mycj.vue').default,
                    children:[
                        {
                            path:'/B_items/gongzuo/wode/mycj/huodong',
                            name:'活动任务',
                            component:require('./components/B_items/gongzuo/wode/mycj/huodong/huodong.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/mycj/wancheng',
                            name:'完成任务',
                            component:require('./components/B_items/gongzuo/wode/mycj/wancheng/wancheng.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/mycj',
                            redirect:'/B_items/gongzuo/wode/mycj/huodong'
                        }
                    ]
                  },
                  {
                    path:'/B_items/gongzuo/wode/myfp',
                    name:'我分配的',
                    component:require('./components/B_items/gongzuo/wode/myfp/myfp.vue').default,
                    children:[
                        {
                            path:'/B_items/gongzuo/wode/myfp/huodong',
                            name:'活动任务',
                            component:require('./components/B_items/gongzuo/wode/myfp/huodong/huodong.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/myfp/wancheng',
                            name:'完成任务',
                            component:require('./components/B_items/gongzuo/wode/myfp/wancheng/wancheng.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/myfp',
                            redirect:'/B_items/gongzuo/wode/myfp/wancheng'
                        }
                    ]
                  },
                  {
                    path:'/B_items/gongzuo/wode/myfz/',
                    name:'我负责的',
                    component:require('./components/B_items/gongzuo/wode/myfz/myfz.vue').default,
                    children:[
                        {
                            path:'/B_items/gongzuo/wode/myfz/huodong',
                            name:'活动任务',
                            component:require('./components/B_items/gongzuo/wode/myfz/huodong/huodong.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/myfz/wancheng',
                            name:'完成任务',
                            component:require('./components/B_items/gongzuo/wode/myfz/wancheng/wancheng.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/myfz',
                            redirect:'/B_items/gongzuo/wode/myfz/huodong'
                        }
                    ],
                  },
                  {
                    path:'/B_items/gongzuo/wode/mycy',
                    name:'我参与的',
                    component:require('./components/B_items/gongzuo/wode/mycy/mycy.vue').default,
                    children:[
                        {
                            path:'/B_items/gongzuo/wode/mycy/huodong',
                            name:'活动任务',
                            component:require('./components/B_items/gongzuo/wode/mycy/huodong/huodong.vue').default,
                        },
                        {
                            path:'/B_items/gongzuo/wode/mycy/wancheng',
                            name:'完成任务',
                            component:require('./components/B_items/gongzuo/wode/mycy/wancheng/wancheng.vue').default,
                        },
                       
                        {
                            path:'/B_items/gongzuo/wode/mycy',
                            redirect:'/B_items/gongzuo/wode/mycy/huodong'
                        }
                        
                    ]
                  },
                  {
                    path:'/B_items/gongzuo/wode',
                    redirect:'/B_items/gongzuo/wode/myfz/'
                  }
                ]
            
              },
              {
                path:'*',
                redirect:'/B_items/gongzuo/wode'
              }
            ]
          },
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
                    },
                    {
                        path:'/B_items/peizhi/xiangmu',
                        redirect:'/B_items/peizhi/xiangmu/xiangmu'
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
                    },
                    {
                        path:'/B_items/peizhi/renwu',
                        redirect:'/B_items/peizhi/renwu/renwu'
                    }
                  ]
                },
                {
                  path:'/B_items/peizhi/anquan',
                  name:'安全',
                  component:require('./components/B_items/peizhi/anquan/anquan.vue').default,
                  children:[
                    {
                        path:'/B_items/peizhi/anquan/anquan',
                        name:'安全管理',
                        component:require('./components/B_items/peizhi/anquan/anquan/anquan.vue').default,
                      },
                    {
                        path:'/B_items/peizhi/anquan/juese',
                        name:'角色管理',
                        component:require('./components/B_items/peizhi/anquan/juese/juese.vue').default,
                      },
                    {
                        path:'/B_items/peizhi/anquan/quanxian',
                        name:'权限管理',
                        component:require('./components/B_items/peizhi/anquan/quanxian/quanxian.vue').default,
                      },
                      {
                        path:'/B_items/peizhi/anquan',
                        redirect:'/B_items/peizhi/anquan/anquan'
                    }
                  ]
                },
                {
                  path:'/B_items/peizhi/gaoji',
                  name:'高级',
                  component:require('./components/B_items/peizhi/gaoji/gaoji.vue').default,
                  children:[
                    {
                        path:'/B_items/peizhi/gaoji/shijian',
                        name:'事件管理',
                        component:require('./components/B_items/peizhi/gaoji/shijian/shijian.vue').default,
                      },
                    {
                        path:'/B_items/peizhi/gaoji/tongzhi',
                        name:'通知管理',
                        component:require('./components/B_items/peizhi/gaoji/tongzhi/tongzhi.vue').default,
                      },
                    {
                        path:'/B_items/peizhi/gaoji/tixing',
                        name:'提醒管理',
                        component:require('./components/B_items/peizhi/gaoji/tixing/tixing.vue').default,
                      },
                      {
                        path:'/B_items/peizhi/gaoji',
                        redirect:'/B_items/peizhi/gaoji/shijian'
                    }

                  ]
                },
                {
                  path:'/B_items/peizhi/quanju',
                  name:'全局',
                  component:require('./components/B_items/peizhi/quanju/quanju.vue').default,
                  children:[
                    {
                        path:'/B_items/peizhi/quanju/gongzuo',
                        name:'工作组件',
                        component:require('./components//B_items/peizhi/quanju/gongzuo/gongzuo.vue').default,
                      },
                      {
                        path:'/B_items/peizhi/quanju',
                        redirect:'/B_items/peizhi/quanju/gongzuo'
                    }
                  ]
                },
                {
                    path:'/B_items/peizhi',
                    redirect:'/B_items/peizhi/xiangmu'
                  }
              ],
              
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
        name:'日历',
        children:[
            {
                path:'/C_calendar/week',
                component:require('./components/C_calendar/week/week.vue').default,
                name:'周'
            },
            {
                path:'/C_calendar/day',
                component:require('./components/C_calendar/day/day.vue').default,
                name:"日",
            }
        ]
    },
    {
        path:'/dbank',
        component:Dbank.default,
        name:'网盘',
        children:[      
          // 配置子路由
          {
              path:'/D_dbank/company/',
              component:require('./components/D_dbank/company/company.vue').default,
              name:'企业网盘',
              children:[
                  {
                      path:'/D_dbank/company/system/',
                      component:require('./components/D_dbank/company/system/system.vue').default,
                      name:'公司制度',
                      children:[
                          {
                              path:'/D_dbank/company/system/photo',
                              component:require('./components/D_dbank/company/system/photo/photo.vue').default,
                              name:'公司照片'
                          },
                          {
                              path:'*',
                              redirect:'/D_dbank/company'
                          }
                      ]
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
                  },
                  {
                      path:'*',
                      redirect:'/D_dbank/company'
                  }
              ]
          },
          {
              path:'/D_dbank/people',
              component:require('./components/D_dbank/people/people.vue').default,
              name:'个人网盘',
              children:[
                  {
                      path:'/D_dbank/people/person',
                      component:require('./components/D_dbank/people/person/person.vue').default,
                      name:'person'
                  },
                  {
                      path:'*',
                      redirect:'/D_dbank/company'
                  }
              ]
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
          }
      ]
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
          {
              path:'/address/M',
              component:require('./components/E_address/M/m.vue').default,
              name:'m'
          },
          {
            path:'/address',
            redirect:'/address/M'
          }
          
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

// 设置全局守卫
router.beforeEach((to,from,next) => {
    // console.log(from);
    // console.log(to);
    document.title = to.name;
    next();
  })
  const store = new Vuex.Store({
    state:{
        count:1,
        allthings:[],
        mythings:[],
        teamthings:[],
        peoplethings:[],
        actionthings:[],
        todos: []
    },
    mutations:{
        ADD(state,payload){
          console.log(state,payload)
        },
        XGETALL(state,payload){
          state.mythings = payload[0];
          state.teamthings = payload[1];
          state.peoplethings = payload[2];
          var arrlist = [];
          for(var i=0;i<payload[0].length;i++){
            arrlist.push(payload[0][i]);
          }
          for(var a=0;a<payload[1].length;a++){
            arrlist.push(payload[1][a]);
          }
          for(var b=0;b<payload[2].length;b++){
            arrlist.push(payload[2][b]);
          }
          state.allthings = arrlist;
          console.log(state.mythings,state.peoplethings,state.teamthings);
        },
        XGETMY(state,payload){
          state.mythings = payload;
          console.log(state.mythings);
        },
        XGETTEAM(state,payload){
          state.teamthings = payload;
          console.log(state.teamthings);
        },
        XGETPEOPLE(state,payload){
          state.peoplethings = payload;
          console.log(state.peoplethings);
        },
        XCHANGE(state,payload){
          state.actionthings=[];
          state.actionthings.push(payload);
        },
        XADDMY(state,payload){
          state.mythings.push(payload);
          console.log(state.mythings,payload);
        },
        GETALL(state, payload) {
          state.todos = payload;
        },
        ryGETALL(state, payload) {
          state.todos = payload;
      },
      ryDEL(state, payload) {
        state.todos = state.todos.filter(item => {
            return item.id != payload.id;
        })
    },
    ryADD(state, payload) {
        state.todos.push(payload);
    }
      },
      actions:{
        async GETALL(context, payload) {
          //请求数据
          var data = await fetch('/mYthings/').then(res => res.json());
          console.log(data);
          context.commit('GETALL', data);
        },
        async ADD({commit},payload){
          var data = await fetch("../data/json.json").then(res => res.json());
          console.log(payload);
          commit("ADD",payload);
        },
        async XGETMY({commit},payload){
          var data = await fetch("/mythings").then(res => res.json());
                commit("XGETMY",data)
        },
        async XGETTEAM({commit},payload){
          var data = await fetch("/teamthings").then(res => res.json());
                commit("XGETATEAM",data)
        },
        async XGETPEOPLE({commit},payload){
          var data = await fetch("/peoplethings").then(res => res.json());
                commit("XGETAPEOPLE",data)
        },
        async XGETALL({commit},payload){
          var data1 = await fetch("/mythings").then(res => res.json());
          var data2 = await fetch("/teamthings").then(res => res.json());
          var data3 = await fetch("/peoplethings").then(res => res.json());
          var arrlist = [data1,data2,data3];
                commit("XGETALL",arrlist);
        },
        async XCHANGE({commit},payload){
          var data = await fetch("/actionthings/",{
                    "method" :"POST",
                    "headers":{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(payload)
                }).then(res => res.json()); 
                commit("XCHANGE",data);
        },
        async XADDMY({commit},payload){
          var data = await fetch("/mythings/",{
                    "method" :"POST",
                    "headers":{
                        "Content-Type": "application/json"
                    },
                    body:JSON.stringify(payload)
                }).then(res => res.json()); 
                commit("XADDMY",data);
        },
        async ryGETALL(context, payload) {
          //请求数据
          var data = await fetch('/ryList/').then(res => res.json());
          console.log(data);
          context.commit('ryGETALL', data);
      },
      async ryDEL({ commit }, payload) {
          //发送delete请求到json-server服务器,自动帮我删除这条数据,操作 data.json文件
          var data = await fetch('/ryList/' + payload.id, {
              "method": "DELETE"
          }).then(res => res.json());
          commit("ryDEL", payload);
      },
    
      async ryADD({ commit }, payload) {
          //上传数据
          var data = await fetch('/ryList/', {
              "method": "POST",
              "headers": {
                  "Content-Type": "application/json"
              },
              "body": JSON.stringify(payload)
          }).then(res => res.json());
          commit("ryADD", data);
      }
      },
      getters:{
        my : function(state){
            console.log("我执行了",state.mythings);
        },
        team : function(state){
            console.log("我执行了",state.mythings);
        }
    }
})
  new Vue({
    el: '#app',
    store,
    router,
    // render: h => h(App)
    
    components:{
     App,iView
    }
  })