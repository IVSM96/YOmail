import axios from 'axios'


const instance = axios.create({
    baseURL: "",
})


export class API {
    instance = instance

    get({path, params = {}, headers = {}}) {
        return this.instance.get(`${path}`, {
            headers: {
                ...headers,
            },
        })
    }

    post({path, params = {}, headers = {}}) {
        return this.instance.post(path, params, {
            headers: {
                ...headers,
            },
        })
    }
}