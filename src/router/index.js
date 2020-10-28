import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home'
import xxqr from '../components/xxqr'
import addFile from "../components/addFile";
import xiaoxi from '../components/xiaoxi'
import xinwen from '../components/xinwen'
import caigou from '../components/caigou'
import login from '../components/login'
import tongzhi from '../components/tongzhi'
import xiangqing from '../components/xiangqing'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: login,

    },
    {
      path: '/xxqr',
      component: xxqr,
    },

    {
      path: '/addFile',
      component: addFile,
    },
    {
      path: '/login',
      component: login,
    },
    {
      path: '/caigou',
      component: caigou,
    },
    {
      path: '/xinwen',
      component: xinwen,
    },
    {
      path: '/tongzhi',
      component: tongzhi,
    },
    {
      path: '/xiaoxi',
      component: xiaoxi,
    }, {
      path: '/xiangqing',
      component: xiangqing,
    },

  ]
})
