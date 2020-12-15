import {
  myget,
  mypost
} from './axios'
//页面的所有接口统一管理在这里


export const getnav=async (data)=>await myget('/schoolList', data)


