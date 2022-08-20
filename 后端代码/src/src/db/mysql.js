const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host : "ygsfhjdym.xyz",
        user : "monitor",
        password : "112233",
        port : "3306",
        database : "monitor"
    }
)
function execSQL(sql,s)
{
    const promise = new Promise((resolve,reject)=>{
        connection.query(sql,s,(err,result)=>{
            if(err)
        {
            reject(err)
            return ;
        }
        else{
            result = JSON.stringify(result);
                
            result = JSON.parse(result);
            resolve(result)
        }
        })
    })
    return promise;
}

module.exports = {
    execSQL
}