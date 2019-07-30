import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Fenlei from './components/fenlei.vue'
import shangpin from './components/shangpin.vue'
import New from './components/shang/new.vue'

Vue.use(Router)

export default new Router({
    mode:'history',
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    
    {
        path: '/fenlei',
        name: 'fenlei',
        component: Fenlei
      },
      {
        path: '/shangpin',
        name: 'shangpin',
        component: shangpin
      },
      {
        path: '/new',
        name: 'new',
        component: New
      },
  ]
})
