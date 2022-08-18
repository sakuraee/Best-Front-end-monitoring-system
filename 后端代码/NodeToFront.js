const express = require('express') // 服务器
const expressStatic = require('express-static') //本地html上传服务器
const mysql = require('mysql'); // 数据库
const bodyParser = require('body-parser'); // post 请求
const cors = require('cors')
const db = mysql.createPool({ host: 'ygsfhjdym.xyz', user: 'monitor', password: '112233', database: 'monitor' });

var app = express(); //创建服务器

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', function(req, res) {
    // console.log(req.query)  get请求
    console.log(req); // post请求 
    var database = req.body.database;
    console.log(database)
    if (database == 'PVUV') {
        db.query('SELECT IP, location FROM ' + database, (err, data) => {
            if (err) {
                console.log('数据库链接没有成功');
                console.log(err);
            } else {
                console.log(data) //  []
                if (data.length == 0) {
                    // res.send() 往 前台发送数据
                    res.send({ ok: false, msg: '数据库为空' })
                }
                res.send({ msg: data })
            }
        })
    } else {
        db.query('SELECT * FROM ' + database, (err, data) => {
            if (err) {
                console.log('数据库链接没有成功');
                console.log(err);
            } else {
                console.log(data) //  []
                if (data.length == 0) {
                    // res.send() 往 前台发送数据
                    res.send({ ok: false, msg: '数据库为空' })
                }
                res.send({ msg: data })
            }
        })
    }

})


app.listen(8080) // 端口号/*  */