import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/base',
    name: 'Base',
    component: () => import('../views/base/Base.vue'),
    children: [
      {
        path: 'comment-doc',
        name: 'CommentDoc',
        component: () => import('../views/comment-doc/CommentDoc.vue'),
      },
      {
        path: 'communication',
        name: 'Communication',
        component: () => import('../views/communication/Communication.vue'),
      },
      {
        path: 'router-example',
        name: 'RouterExample',
        component: () => import('../views/router-example/RouterExample.vue'),
      },
      { path: '', redirect: 'comment-doc' }
    ]
  },
  { path: '/', redirect: '/base' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
