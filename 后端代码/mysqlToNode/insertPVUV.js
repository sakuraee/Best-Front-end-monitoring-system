const mysql = require('mysql');
const conn = mysql.createConnection({
    host: "ygsfhjdym.xyz",
    port: "3306",
    user: "monitor",
    password: "112233",
    database: "monitor"
})
const connection = mysql.createConnection({
    host: "ygsfhjdym.xyz",
    port: "3306",
    user: "monitor",
    password: "112233",
    database: "monitor"
})
const con = mysql.createConnection({
    host: "ygsfhjdym.xyz",
    port: "3306",
    user: "monitor",
    password: "112233",
    database: "monitor"
})
conn.connect();

let date = getDate();
console.log(date);
let pv = 0;
let uv = 0;
conn.query('select * from PVUV where date=' + date, (err, results, fields) => {
    if (err) {
        throw err
    }
    //判断目当天是否有访问，有则更新pvuv表
    if (results.length > 0) {
        con.query('select * from pvuvStatistics where date=' + date, (error, result, fields) => {
            if (error) {
                throw err
            }
            pv = getPV(results);
            uv = getUV(results);
            //判断pvuv表中是否存在访问记录，有则更新，没有则添加，有则更新
            if (result.length == 0) {
                console.log(pv, uv);
                connection.connect();
                var sql = 'INSERT INTO pvuvStatistics (date,pv,uv) VALUES (?, ?, ?)';
                values = [date, pv, uv]
                connection.query(sql, values, function(err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
                connection.end();
            } else {
                connection.connect();
                var sql = 'UPDATE pvuvStatistics SET pv = ?,uv = ? WHERE date = ?';
                values = [pv, uv, date]
                connection.query(sql, values, function(err, result) {
                    if (err) throw err;
                    console.log("1 record inserted");
                });
                connection.end();
            }
        });
        con.end();
    }

});
conn.end();

function getUV(results) {
    //uv(独立访客)，一段时间访问网站的一台电脑客户端为一个访客，存储时ip唯一
    return results.length;
}

function getPV(results) {
    let sum = 0;
    for (var i = 0; i < results.length; i++) {
        sum += results[i].count;
    }
    return sum;
}

function getDate() {
    let date = new Date();
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    return y + '-' + m + '-' + d;
}