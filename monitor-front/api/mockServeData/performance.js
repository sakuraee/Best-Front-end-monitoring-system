import Mock from 'mockjs'

let List = []

export default {
    getlineData: () => {
        for (let i = 0; i < 8; i++) {
            List.push(
                Mock.mock({
                    dns: Mock.Random.float(1, 200, 0, 0),
                    tcp: Mock.Random.float(1, 200, 0, 0),
                    ttfb: Mock.Random.float(1, 200, 0, 0),
                    domReady: Mock.Random.float(1, 200, 0, 0),
                    loadPage: Mock.Random.float(1, 200, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                //性能卡片
                countData: [
                    {
                        name: "DNS解析时间",
                        value: 0,
                        //   icon: "el-icon-success",
                        //   color: "#2ec7c9",
                    },
                    {
                        name: "TCP连接时间",
                        value: 0,
                        //   icon: "el-icon-star-on",
                        //   color: "#ffb980",
                    },
                    {
                        name: "TTFB平均时间",
                        value: 0.15,
                        //   icon: "el-icon-user",
                        //   color: "#ffb980",
                    },
                    {
                        name: "Dom解析时间",
                        value: 2.58,
                        //   icon: "el-icon-star-on",
                        //   color: "#ffb980",
                    },
                    {
                        name: "页面平均加载时间",
                        value: 2.74,
                        //   icon: "el-icon-user",
                        //   color: "#ffb980",
                    },
                ],
                orderData: {
                    date: ['08-11 0:00', '08-11 3:00', '08-11 6:00', '08-11 9:00', '08-11 12:00', '08-11 15:00', '08-11 18:00', '08-11 21:00'],
                    data: List
                },
                barData: [
                    {
                        date: 'FP',
                        new: Mock.Random.float(1, 40),

                    },
                    {
                        date: 'FCP',
                        new: Mock.Random.float(0, 100),
                    },
                    {
                        date: 'domReady',
                        new: Mock.Random.float(1, 200),
                    },
                    {
                        date: 'ssl',
                        new: Mock.Random.float(1, 200),
                    },
                    {
                        date: 'TCP连接',
                        new: Mock.Random.float(1, 40),

                    },
                    {
                        date: 'DNS解析',
                        new: Mock.Random.float(0, 10),
                    },
                    {
                        date: '发起请求',
                        new: Mock.Random.float(1, 200),
                    },
                    {
                        date: '请求响应',
                        new: Mock.Random.float(1, 200),
                    },
                    {
                        date: 'DOM解析',
                        new: Mock.Random.float(1, 200),
                    },
                    {
                        date: '页面加载',
                        new: Mock.Random.float(1, 200),
                    }
                ],
                tableData: [
                    {
                        filename: '接口一',
                        totalCount: Mock.Random.float(1, 20, 0, 4),
                        pageCount: Mock.Random.integer(1, 50),
                        time: Mock.Random.integer(1, 10),
                    },
                    //     totalCount:9,
                    // pageCount:3,
                    // time
                    {
                        filename: '接口二',
                        totalCount: Mock.Random.float(1, 20, 0, 4),
                        pageCount: Mock.Random.integer(1, 50),
                        time: Mock.Random.integer(1, 10),
                    },
                    {
                        filename: '接口三',
                        totalCount: Mock.Random.float(1, 20, 0, 4),
                        pageCount: Mock.Random.integer(1, 50),
                        time: Mock.Random.integer(1, 10),
                    },
                    {
                        filename: '接口四',
                        totalCount: Mock.Random.float(1, 20, 0, 4),
                        pageCount: Mock.Random.integer(1, 50),
                        time: Mock.Random.integer(1, 10),
                    }
                ]
            }
        }

    }

}