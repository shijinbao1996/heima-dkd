import { verificationCode,confirmLogin } from "@/api"; 
import router from '@/router/index'
export default {
    namespaced: true,
    state:{
        codeImg:'', 
        token:''
    }, 
    mutations:{
        setCode(state,payload){
            state.codeImg = payload
        },
        setToken(state,payload){
            state.token = payload
        }
    },
    actions:{
        // 获取验证码
       async getCode(context,payload) {
          const res = await verificationCode(payload)
          console.log(res);
          context.commit('setCode',res.request.responseURL)
        },
        // 登录请求
        async login(context,payload) {
            const res = await confirmLogin(payload)
            // console.log(res);
            // console.log(context);
            context.commit('setToken',res.data.token)
            console.log(context.state.token);
            console.log(res.data.success);
            if(res.data.success){
             router.push('/')
            }
        }
    },
}