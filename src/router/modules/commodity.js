import Layout from '@/layout'
export default {
    path:'/commodity',
    component:Layout,
    meta: { title: '商品管理', icon: 'dashboard' } ,
    children:[
     {
        path: 'sku-class',
        component: () => import('@/views/commodity/sku-class'),
        meta: { title: '商品类型', icon: 'dashboard' } 
     },
     {
      path: 'index',
      component: () => import('@/views/commodity'),
      meta: { title: '商品管理', icon: 'dashboard' } 
   }
    ]
  }


