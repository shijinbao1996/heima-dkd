import { verificationCode,confirmLogin,getUserDetailApi } from "@/api"; 
import router from '@/router/index'
import {setTokenTime} from '@/utils/auth'
export default {
    namespaced: true,
    state:{
        codeImg:'',  
        token:'',
        userInfo:{},
        userDetail:{}
    }, 
    mutations:{
        setCode(state,payload){
            state.codeImg = payload 
        },
        setToken(state,payload){
            state.token = payload 
        },
        setUserInfo(state,payload){
            state.userInfo = payload 
        },
        setUserDetail(state,payload){
            state.userDetail = payload 
        },
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
            console.log(res);
            context.commit('setToken',res.data.token)
            context.commit('setUserInfo',res.data)
            setTokenTime()
            if(res.data.success){
             router.push('/')
            }
        },
        async getUserDetail(context){
            console.log(context.state.userInfo.id);
             const res = await getUserDetailApi(1)
             context.commit('setUserDetail',res)
             console.log(res);
        },
        logout(context) {
            context.commit('setUserInfo',{})
            context.commit('setToken','')
        }
    },
}