const {execSQL} = require("../db/mysql")
const handleRoute = (req,res)=>{
    const method = req.method
    const url = req.url
    const path = url.split("?")[0]
    if(method === "GET"){
        if(url == "/api/monitor/getPVUV")
        {    
            console.log("查询PVUV")
            
            const sql = "select * from PVUV"
            
            return execSQL(sql)
         }
        else if(url=="/api/monitor/getError"){
            console.log("查询报错信息")
            const sql = "select * from Error"
            return execSQL(sql)
        }
        else if(url=="/api/monitor/getPerformanceIndex"){
            console.log("查询性能信息")
            const sql = "select * from PerFormanceIndexList"
            return execSQL(sql)
        }
        else if(url=="/api/monitor/getAverage"){
            console.log("查询平均数据")
            const sql = "select * from average"
            return execSQL(sql)
        }
        else if(url=="/api/monitor/getpvuvStatistics"){
            console.log("查询pvuv统计")
            const sql = "select * from pvuvStatistics"
            return execSQL(sql)
        }
        else{
            return new Promise((reslove,reject)=>{
                reject(0)
            })
        }
    }
    else if(method === "POST"){
        if(url == "/api/monitor/addPVUV")
        {   
            return new Promise((reslove,reject)=>{
                let postData = ""
                req.on("data",chunk=>{
                postData +=chunk.toString()
            })
                req.on("end",()=>{
                console.log(postData)
                postData = JSON.parse(postData)
                let IP = postData.IP 
                let location = postData.location
                let date = postData.date
                let time = new Date();
                const this_time = String(time.getFullYear())+"-"+String(time.getMonth()+1)+"-"+String(time.getDate())
                execSQL(`select * from PVUV where date="${this_time}" and ip="${IP}"`).then((res)=>{
                    if(res.length!=0)
                {
                    execSQL(`select * from pvuvStatistics where date="${this_time}"`).then((res)=>{
                        if(res.length==0)
                        {
                            execSQL(`insert pvuvStatistics (date,pv,uv)  values("${this_time}",1,1)`)
                        }
                        else{
                            execSQL(`update pvuvStatistics set uv=uv+1  where date="${this_time}"`)
                        }


                    })
                    reslove(execSQL(`update PVUV set count=count+1 where  IP="${IP}" AND location="${location}" `))
                }
                else{
                    if(res.length==0)
                        {
                            execSQL(`insert pvuvStatistics (date,pv,uv)  values("${this_time}",1,1)`)
                        }
                        else{
                            execSQL(`update pvuvStatistics set pv=pv+1,uv=uv+1  where date="${this_time}"`)
                        }


                    reslove
                            (
                               execSQL(`insert PVUV (IP,location,date,count)  values("${IP}","${location}" ,"${date}",1)` ) 
                            )
                }
                })

             })
                
            })
            
        }
        else if(url=="/api/monitor/addPerformanceIndex"){
            return new Promise((reslove,reject)=>{
                let postData = ""
                req.on("data",chunk=>{
                postData +=chunk.toString()
            })
                req.on("end",()=>{
                console.log(postData)
                postData = JSON.parse(postData)
                const  sql = `insert  PerFormanceIndexList (FCP,FP,connectTime,domContentLoadedTime,loadTime,parseDOMTime,responseTime,timeToInteractive,ttfbTime,url,user_agent) value ("${postData.FCP}","${postData.FP}","${postData.connectTime}","${postData.domContentLoadedTime}","${postData.loadTime}","${postData.parseDOMTime}","${postData.responseTime}","${postData.timeToInteractive}","${postData.ttfbTime}","${postData.url}","${postData.user_agent}")`
                console.log(sql)
                reslove(
                    execSQL(sql)
                )
                
             })
                
            })
        }
        else if(url=="/api/monitor/addError"){
            console.log("接口被访问")
            return new Promise((reslove,reject)=>{
                let postData = ""
                req.on("data",chunk=>{
                postData +=chunk.toString()
            })
                req.on("end",()=>{
                postData = JSON.parse(postData)
                const  sql = `insert  Error (ErrorName,ErrorType,agent,detail,time,location) value ("${postData.ErrorName}","${postData.ErrorType}","${postData.agent}","${postData.detail}","${postData.time}","${postData.location}")`
                console.log(sql)
                reslove(
                    execSQL(sql)
                )
                
             })
                
            })
        
        }
        else{
            return new Promise(()=>{
                reject(0)
            })
        }
    }
}

module.exports = handleRoute