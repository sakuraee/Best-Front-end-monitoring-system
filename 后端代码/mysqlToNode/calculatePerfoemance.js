const mysql = require('mysql')
const db = mysql.createPool({ host: 'ygsfhjdym.xyz', user: 'monitor', password: '112233', database: 'monitor' });

db.query('SELECT FCP,FP,connectTime,responseTime,ttfbTime,parseDOMTime,domContentLoadedTime,timeToInteractive,loadTime  FROM PerFormanceIndexList' /* + database*/ , (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let FCPNew = 0,
            FPNew = 0,
            connectTimeNew = 0,
            responseTimeNew = 0,
            ttfbTimeNew = 0,
            parseDOMTimeNew = 0,
            domContentLoadedTimeNew = 0,
            timeToInteractiveNew = 0;
        loadTimeNew = 0;
        if (data.length == 0) {
            console.log('PerFormanceIndexList数据库为空');
        } else {
            for (var i = 0; i < data.length; i++) {
                FCPNew += data[i].FCP - 0;
                FPNew += data[i].FP - 0;
                connectTimeNew += data[i].connectTime;
                responseTimeNew += data[i].responseTime;
                ttfbTimeNew += data[i].ttfbTime;
                parseDOMTimeNew += data[i].parseDOMTime;
                domContentLoadedTimeNew += data[i].domContentLoadedTime;
                timeToInteractiveNew += data[i].timeToInteractive;
                loadTimeNew += data[i].loadTime;
            }
            FCPNew = (FCPNew / data.length).toFixed(2);
            FPNew = (FPNew / data.length).toFixed(2);
            connectTimeNew = (connectTimeNew / data.length).toFixed(2);
            responseTimeNew = (responseTimeNew / data.length).toFixed(2);
            ttfbTimeNew = (ttfbTimeNew / data.length).toFixed(2);
            parseDOMTimeNew = (parseDOMTimeNew / data.length).toFixed(2);
            domContentLoadedTimeNew = (domContentLoadedTimeNew / data.length).toFixed(2);
            timeToInteractiveNew = (timeToInteractiveNew / data.length).toFixed(2);
            loadTimeNew = (loadTimeNew / data.length).toFixed(2);
            let sql = 'UPDATE average SET FCP=?,FP=?,connectTime=?, responseTime=?, ttfbTime=?, parseDOMTime=?, domContentLoadedTime=?, timeToInteractive=?, loadTime=? WHERE id = ?'

            db.query(sql, [FCPNew, FPNew, connectTimeNew, responseTimeNew, ttfbTimeNew, parseDOMTimeNew, domContentLoadedTimeNew, timeToInteractiveNew, loadTimeNew, 1], (err, data) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    }
})