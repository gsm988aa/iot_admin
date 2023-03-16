import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'three-page',
      component: () => import('@/views/ThreePage.vue'),
      meta: {
        pageTitle: '智能变压UPS柜',
        breadcrumb: [
          {
              text: '智能变压UPS柜',
              active: true,
          },
        ],
      },
    },
    // {
    //     path: '/one-page',
    //     name: 'one-page',
    //     component: () => import('@/views/OnePage.vue'),
    //     meta: {
    //         pageTitle: '1 紧急告警',
    //         breadcrumb: [
    //             {
    //                 text: '1 紧急告警',
    //                 active: true,
    //             },
    //         ]
    //     }
    // },
    // {
    //   path: '/two-page',
    //   name: 'two-page',
    //   component: () => import('@/views/TwoPage.vue'),
    //   meta: {
    //     pageTitle: '2 UPS状态',
    //     breadcrumb: [
    //       {
    //         text: '2 UPS状态',
    //         active: true,
    //       },
    //     ],
    //   },
    // },
    //
    // {
    //     path: '/four-page',
    //     name: 'four-page',
    //     component: () => import('@/views/FourPage.vue'),
    //     meta: {
    //         pageTitle: '4 设置',
    //         breadcrumb: [
    //             {
    //                 text: '4 设置',
    //                 active: true,
    //             },
    //         ],
    //     }
    // },
    // {
    //   path: '/five-page',
    //     name: 'five-page',
    //     component: () => import('@/views/FivePage.vue'),
    //     meta: {
    //         pageTitle: '5 历史记录',
    //         breadcrumb: [
    //             {
    //                 text: '5 历史记录',
    //                 active: true,
    //             },
    //         ],
    //
    //             }
    //     },
    // {
    //     path: '/six-page',
    //     name: 'six-page',
    //     component: () => import('@/views/SixPage.vue'),
    //     meta: {
    //         pageTitle: '6 手车驶入',
    //         breadcrumb: [
    //             {
    //                 text: '6 手车驶入',
    //                 active: true,
    //             },
    //         ],
    //
    //             }
    //
    // },
    // {
    //     path: '/seven-page',
    //     name: 'seven-page',
    //     component: () => import('@/views/SevenPage.vue'),
    //     meta: {
    //         pageTitle: '7 手车驶出',
    //         breadcrumb: [
    //             {
    //                 text: '7 手车驶出',
    //                 active: true,
    //             },
    //         ],
    //
    //             }
    //     },
    // {
    //     path: '/eight-page',
    //     name: 'eight-page',
    //     component: () => import('@/views/EightPage.vue'),
    //     meta: {
    //         pageTitle: '8 复位',
    //         breadcrumb: [
    //             {
    //                 text: '8 复位',
    //                 active: true,
    //             },
    //         ],
    //     }
    //
    // },


    //
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/Login.vue'),
    //   meta: {
    //     layout: 'full',
    //   },
    // },
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
// src/router/index.js

