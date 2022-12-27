export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
  {
    path: '/dashboard/deviceinfos',
    name: 'dashboard-deviceinfos',
    component: () => import('@/views/dashboard/deviceinfos/Deviceinfos.vue'),
  },
  {
    path: '/dashboard/userinfos',
    name: 'dashboard-userinfos',
    component: () => import('@/views/dashboard/userinfos/users-edit/UsersEdit.vue'),
    // component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
  },

  // {
  //   path: '/dashboard/useredit',
  //   name: 'dashboard-useredit',
  //   component: () => import('@/views/dashboard/userinfos/users-edit/UsersEdit.vue'),
  // },


]
