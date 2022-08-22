import axios from "./axios";


export const getMen = (param) => {

    return axios.request({
        url: '/performance/getMen',
    })
}

export const getData = () => {
    return axios.request({
        url: '/srcError/getData',
        methods: 'get',
        // data: param
    })

}
export const getApiData = () => {
    return axios.request({
        url: '/apiError/getApiData',
        methods: 'get',
        // data: param
    })

}

export const getPerf = () => {
    return axios.request({
        url: '/performance/getPerf'

    })

}
export const getuserData = () => {
    return axios.request({
        url: '/userData/getuserData'

    })
}
export const getbarData = () => {
    return axios.request({
        url: '/performance/getbarData'

    })
}