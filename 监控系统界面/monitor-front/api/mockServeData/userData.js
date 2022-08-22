import Mock from 'mockjs'

let List = []
export default{
    getStatisticalData:()=>{
        for (let i = 0; i < 7; i++){
            List.push(
                Mock.mock({
                    第一天:Mock.Random.float(1, 200, 0 ,0),
                    第二天:Mock.Random.float(1, 200, 0 ,0),
                    第三天:Mock.Random.float(1, 200, 0 ,0),
                    第四天:Mock.Random.float(1, 200, 0 ,0),
                    第五天:Mock.Random.float(1, 200, 0 ,0)
                })
            )
        }
        return {
            code: 20000,
            data:{
                //折线图
                lineData:[
                    {
                        date:'2020-08-01',
                        pvCount:12,
                        uvCount:13
                    },
                    {
                        date:'2020-08-02',
                        pvCount:13,
                        uvCount:15
                    },
                    {
                        date:'2020-08-03',
                        pvCount:11,
                        uvCount:8
                    },
                    {
                        date:'2020-08-04',
                        pvCount:12,
                        uvCount:15
                    },
                    {
                        date:'2020-08-05',
                        pvCount:9,
                        uvCount:11
                    },
                    {
                        date:'2020-08-06',
                        pvCount:9,
                        uvCount:8
                    },
                    {
                        date:'2020-08-07',
                        pvCount:8,
                        uvCount:9
                    },
                    {
                        date:'2020-08-08',
                        pvCount:9,
                        uvCount:12
                    }
                ],
                tableData:[
                    {   
                        userIP:'222.123.234',
                        pageLoadTime:'12分12秒',
                        userAddress:'重庆',
                        sourceType:'搜索引擎',
                        browserType:'Google',
                        screenMsg:'123'

                    },
              
                    {
                        userIP:'222.123.234',
                        pageLoadTime:'12分12秒',
                        userAddress:'重庆',
                        sourceType:'搜索引擎',
                        browserType:'Google',
                        screenMsg:'123'
                    },
                    {
                        userIP:'222.123.234',
                        pageLoadTime:'12分12秒',
                        userAddress:'重庆',
                        sourceType:'搜索引擎',
                        browserType:'Google',
                        screenMsg:'123'
                    },
                    {
                        userIP:'222.123.234',
                        pageLoadTime:'12分12秒',
                        userAddress:'重庆',
                        sourceType:'搜索引擎',
                        browserType:'Google',
                        screenMsg:'123'
                    }
                ]
            }
        }
        
    }

}