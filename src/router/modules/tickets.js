import Layout from '@/layout'
  
export default {
    path:'/tickets',
    component:Layout,
    meta: { title: '工单管理', icon: 'dashboard' }, 
    children:[
     {
        path: 'business',
        component: () => import('@/views/tickets/business'),
        meta: { title: '运营工单', icon: 'dashboard' } 
     },
     {
      path: 'operation',
      component: () => import('@/views/tickets/operation'),
      meta: { title: '运维工单', icon: 'dashboard' } 
     }
    ]
  }


