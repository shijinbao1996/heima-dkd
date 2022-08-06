import Layout from '@/layout'
export default {
    path:'/position',
    component:Layout,
    meta: { title: '点位管理', icon: 'dashboard' } ,
    children:[
     {
        path: 'region',
        component: () => import('@/views/position/region'),
        meta: { title: '区域管理', icon: 'dashboard' } 
     },
     {
      path: 'node',
      component: () => import('@/views/position/node'),
      meta: { title: '点位管理', icon: 'dashboard' } 
   },
   {
      path: 'partner',
      component: () => import('@/views/position/partner'),
      meta: { title: '合作商管理', icon: 'dashboard' } 
   }
    ]
  }