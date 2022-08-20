const handleRoute= require('./src/routes/monitor.js')

const serverHandler = (req,res)=>{
    res.setHeader ("Content-Type","application/JSON")
    const data = handleRoute(req,res)

    if(data)
    {
        console.log(typeof(data))
        data.then((result)=>{
            console.log(result)
            // res.header("Access-Control-Allow-Credentials", "true");
            // res.cookie("token", "1", {maxAge: 86400000});
            res.end(
                JSON.stringify(result)
            )
        }).catch((err)=>{
            console.log(err)
            res.end("错误")
        })
    }
    
}
module.exports = serverHandler ; 