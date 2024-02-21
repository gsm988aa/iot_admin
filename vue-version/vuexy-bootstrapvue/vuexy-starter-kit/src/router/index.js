import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: '智能柜',
        breadcrumb: [
          {
            text: '智能控制系统',
            active: true,
          },
        ],
      },
    },
    {
      path: '/BigData',
      name: 'BigData',
      component: () => import('@/views/BigData.vue'),
      meta: {
        pageTitle: '数据分析',
        breadcrumb: [
          {
            text: '智能控制系统',
            active: true,
          },
        ],
      },
    },
    {
      path: '/ThreeD',
      name: 'ThreeD',
      component: () => import('@/views/ThreeD.vue'),
      meta: {
        pageTitle: '3D模型图',
        breadcrumb: [
          {
            text: '智能控制系统',
            active: true,
          },
        ],
      },
    },
    // {
    //   path: '/second-page',
    //   name: 'second-page',
    //   component: () => import('@/views/SecondPage.vue'),
    //   meta: {
    //     pageTitle: 'Second Page',
    //     breadcrumb: [
    //       {
    //         text: 'Second Page',
    //         active: true,
    //       },
    //     ],
    //   },
    // },
    {
      path: '/RealTimeVideo',
      name: 'RealTimeVideo',
      component: () => import('@/views/RealTimeVideo.vue'),
      meta: {
        pageTitle: 'RealTimeVideo',
        breadcrumb: [
          {
            text: 'RealTimeVideo',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router