import request from '@/utils/request'

/**
 * 获取验证码
 * @param {*} params 
 * @returns 
 */
export const verificationCode = (params)=> {
  return request({
    url: `/api/user-service/user/imageCode/${params}`,
  })
}
 
/**
 * 验证登录
 * @param {*} params 
 * @returns 
 */
export const confirmLogin = (dataObj)=> {
  return request({
    method:"POST",
    url: `/api/user-service/user/login`,
    data:dataObj
  })
}