import router from '@/router'
import store from '@/store'

// 路由白名单
const whiteList = ['/login','/404']
router.beforeEach((to,from,next)=>{
    const token = store.state.common.token
    console.log(token);
    // 有token 
   if(token) {
      store.dispatch('common/getUserDetail')
   //    console.log(store.state.common.userInfo.userId);
   //   if(!store.state.common.userInfo.userId){
   //    store.dispatch('common/getUserDetail')
   //   }
     if(to.path ==='/login'){
        console.log(111);
        next('/')
     } else{
       next()
     }
   } else {
    // 无token
    // 跳转路径是包含在白名单内就支持跳转
     const res = whiteList.includes(to.path)
     console.log(res);
     if(res){
        next()
     } else{
        next('/login')
     }
   }
})
