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
                //柱状图
                barData: [
                    {
                        date: '2022-08-11 0:00',
                        count: 12
                    },
                    {
                        date: '2022-08-11 3:00',
                        count: 13
                    },
                    {
                        date: '2022-08-11 6:00',
                        count: 11
                    },
                    {
                        date: '2022-08-11 9:00',
                        count: 12
                    },
                    {
                        date: '2022-08-11 12:00',
                        count: 9
                    },
                    {
                        date: '2022-08-11 15:00',
                        count: 9
                    },
                    {
                        date: '2022-08-11 18:00',
                        count: 8
                    },
                    {
                        date: '2022-08-11 21:00',
                        count: 9
                    }
                ],
                orderData: {
                    date: ['08-11 0:00', '08-11 3:00', '08-11 6:00', '08-11 9:00', '08-11 12:00', '08-11 15:00', '08-11 18:00', '08-11 21:00'],
                    data: List
                },
                tableData: [
                    {
                        filename: 'file1.css',
                        totalCount: 5,
                        pageCount: 3,
                        time: '2022-08-01 12:12:12'

                    },
                    //     totalCount:9,
                    // pageCount:3,
                    // time
                    {
                        filename: 'file2.html',
                        totalCount: 6,
                        pageCount: 3,
                        time: '2022-08-05 12:12:12'
                    },
                    {
                        filename: 'file3.js',
                        totalCount: 3,
                        pageCount: 3,
                        time: '2022-08-05 12:12:12'
                    },
                    {
                        filename: 'file1.css',
                        totalCount: 7,
                        pageCount: 3,
                        time: '2022-08-02 12:12:12'
                    }
                ]
            }
        }

    }

}