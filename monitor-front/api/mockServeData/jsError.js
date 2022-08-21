import Mock from 'mockjs'

let List = []
export default {
    getStatisticalData: () => {
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    第一天: Mock.Random.float(1, 200, 0, 0),
                    第二天: Mock.Random.float(1, 200, 0, 0),
                    第三天: Mock.Random.float(1, 200, 0, 0),
                    第四天: Mock.Random.float(1, 200, 0, 0),
                    第五天: Mock.Random.float(1, 200, 0, 0)
                })
            )
        }
        return {
            code: 20000,
            data: {
                //柱状图

                barData: [
                    {
                        date: '2020-08-01',
                        count: 12
                    },
                    {
                        date: '2020-08-02',
                        count: 13
                    },
                    {
                        date: '2020-08-03',
                        count: 11
                    },
                    {
                        date: '2020-08-04',
                        count: 12
                    },
                    {
                        date: '2020-08-05',
                        count: 9
                    },
                    {
                        date: '2020-08-06',
                        count: 9
                    },
                    {
                        date: '2020-08-07',
                        count: 8
                    },
                    {
                        date: '2020-08-08',
                        count: 9
                    }
                ],
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