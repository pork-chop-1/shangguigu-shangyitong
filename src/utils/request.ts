// 封装axios用处
// 1、利用axios请求、响应拦截器功能
// 2、请求响应头中携带公共参数
// 3、响应头处理，异常处理，简化响应数据
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: '/api',
  timeout: 10 * 1000
})

service.interceptors.request.use((value) => {
  // 设置请求头
  value.headers.set('too','')
  return value
})

service.interceptors.response.use((value) => {
  return value
}, (error) => {
  const message = error.response?.status
  switch(message) {
    case 404: 
  
      ElMessage({
        type: 'error',
        message: error.message
      })
  }
  return Promise.reject(error)
})

const request = async <T = any>(config: AxiosRequestConfig): Promise<T> => {
  try {
    const res = await service.request(config)
    if(res.status === 200) {
      return res.data
    } else {
      return Promise.reject(res.data)
    }
  } catch (e:unknown) {
    return Promise.reject(e)
  }
}

export default request