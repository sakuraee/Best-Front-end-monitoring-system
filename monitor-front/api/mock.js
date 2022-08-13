import Mock from 'mockjs'
import srcErrorApi from './mockServeData/srcError'
import performanceApi from './mockServeData/performance'
Mock.mock('/srcError/getData', srcErrorApi.getStatisticalData)
Mock.mock('/performance/getPerf', performanceApi.getlineData)