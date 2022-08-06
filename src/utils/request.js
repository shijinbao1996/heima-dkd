// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
import axios from 'axios'
import store from '@/store'
import {getTokenTime} from './auth' 

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
}) // 创建一个axios的实例
 
// token时间过期处理 
function timeout(){
  const currentTime = Date.now() 
  const tokenTime = getTokenTime()
  const timeout = 2*60*60*1000
  return currentTime-tokenTime>timeout
}

// 请求拦截器
service.interceptors.request.use(
 async (config) =>{ 
    console.log(1);
    const token  = store.state.common.token
    console.log(token);
    if(token) {
      if(timeout()){
       console.log('过期');
       await store.dispatch('common/logout')
      } else {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) =>{
    return Promise.reject(error)
  }
) 

// 响应拦截器
service.interceptors.response.use() 

export default service // 导出axios实例