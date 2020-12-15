import axios from 'axios'//引入

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';//请求头


//实例axios
const instance = axios.create({
  timeout: 5000,//超过这个时间就返回错误
  baseURL: 'https://www.fastmock.site/mock/84c99881f5fa46c34dc508e011c8b9cf/yishu'//这个是公共的接口
});


//请求发送时候的拦截器
instance.interceptors.request.use(function (config) {
  return config
}, (err) => Promise.reject(err))

//响应时候拦截器
instance.interceptors.response.use((response) => {
  return response
}, (err) => Promise.reject(err))


//封装get请求  在httpApi.js里引用的
export const myget = (url, data = {}) => {
  return instance.get(url,  {params:data} )
}

//封装post请求 
export const mypost = (url, data = {}) => {
  return instance.post(url, data)
}
