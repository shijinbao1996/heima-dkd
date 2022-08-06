import request from '@/utils/request'
export const getUserDetailApi = (id)=> {
    return request({
      url: `/api/user-service/user/${id}`
    })
  } 