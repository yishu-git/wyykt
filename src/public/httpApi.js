import {
  myget,
  mypost
} from './axios'
//页面的所有接口统一管理在这里

export const fetchPersonalData=async (data)=>await myget('/fetchPersonalData', data)





