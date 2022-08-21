import Mock from 'mockjs'
import srcErrorApi from './mockServeData/srcError'
import performanceApi from './mockServeData/performance'
import userDataApi from './mockServeData/userData'
Mock.mock('/srcError/getData', srcErrorApi.getStatisticalData)
Mock.mock('/userData/getuserData', userDataApi.getStatisticalData)
Mock.mock('/performance/getPerf', performanceApi.getlineData)
Mock.mock('/performance/getMen', performanceApi.getbarData)
Mock.mock('/apiError/getApiData', srcErrorApi.getStatisticalData)