import axios from "./axios";


export const getMenuPerf = () => {

    return axios.request({
        url: 'http://ygsfhjdym.xyz:5000/api/monitor/getAverage',
        method: 'get',

    }).then((res) => {
        console.log("haha", res)
    })
}