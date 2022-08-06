import Layout from '@/layout'
export default {
    path:'/facility',
    component:Layout,
    meta: { title: '设备管理', icon: 'dashboard' } ,
    children:[
     {
        path: 'index',
        component: () => import('@/views/facility'),
        meta: { title: '设备管理', icon: 'dashboard' } 
     },
     {
      path: 'status',
      component: () => import('@/views/facility/status'),
      meta: { title: '设备状态', icon: 'dashboard' } 
   },
   {
      path: 'type',
      component: () => import('@/views/facility/type'),
      meta: { title: '设备类型管理', icon: 'dashboard' } 
   }
    ]
  }


