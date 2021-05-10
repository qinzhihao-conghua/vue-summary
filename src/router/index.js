import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/base',
    // 默认路由不需要name属性，会有警告
    // name: 'Base',
    component: () => import('../views/Base/Base.vue'),
    children: [
      {
        path: 'comment-doc',
        name: 'CommentDoc',
        component: () => import('../views/Comment-Doc/CommentDoc.vue'),
      },
      {
        path: 'communication',
        name: 'Communication',
        component: () => import('../views/Communication/Communication.vue'),
      },
      {
        path: 'router-example',
        name: 'RouterExample',
        component: () => import('../views/Router-Example/RouterExample.vue'),
      },
      { path: '', redirect: 'Comment-Doc' }
    ]
  },
  { path: '/', redirect: '/base' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
