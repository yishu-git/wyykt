import {
  myget,
  mypost
} from './axios'
//页面的所有接口统一管理在这里


export const getschoolList=async (data)=>await myget('/schoolList', data)
export const getanalysis=async (data)=>await myget('/analysis', data)
export const getscore=async ()=>await myget('/setting')
export const Products=async ()=>await myget('/Products')


