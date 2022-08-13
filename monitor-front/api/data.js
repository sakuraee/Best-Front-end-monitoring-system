import axios from "./axios";


export const getMenu = (param) => {

    return axios.request({
        url: '/permission/getMenu',
        methods: 'post',
        data: param

    })
}

export const getData = () => {
    return axios.request({
        url: '/srcError/getData'

    })

}


export const getPerf = () => {
    return axios.request({
        url: '/performance/getPerf'

    })

}