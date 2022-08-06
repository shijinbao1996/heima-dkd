import Layout from '@/layout'
export default {
    path:'/people',
    component:Layout,
    eta: { title: '人员管理', icon: 'dashboard' } ,
    children:[
     {
        path: 'index',
        component: () => import('@/views/people'),
        meta: { title: '人员列表', icon: 'dashboard' } 
     },
     {
      path: 'user-task-stats',
      component: () => import('@/views/people/user-task-stats'),
      meta: { title: '人效统计', icon: 'dashboard' } 
   },{
      path: 'user-work',
      component: () => import('@/views/people/user-work'),
      meta: { title: '工作量列表', icon: 'dashboard' } 
   }
    ]
  }


