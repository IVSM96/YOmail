import axios from 'axios'


export const BASE_URL = "http://192.168.128.5:5023"


const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,

})


export class API {
    instance = instance

    get({path, headers = {}}) {
        return this.instance.get(this.instance.baseURL, {
            headers: {
                ...headers,
            },
        })
    }

    post({path, headers = {}}) {
        return this.instance.post(`${this.instance.baseURL}/${path}`,  {
            headers: {
                ...headers,
            },
        })
    }
}