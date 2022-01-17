module.exports = class Router {
    constructor() {
        this.endpoints = {
            '/users':{
                'GET':null,
                'POST':null,
                'DELETE':null,
            }
        }

    }

    request(method = "GET", path, handler){
        if(!this.endpoints[path]){
            this.endpoints[path] = {}
        }

        const endpoint = this.endpoints[path]

        if (endpoint[method]) {
            throw  new Error(`[${method}] on adress ${path} is already exists`)
        }

        endpoint[method] = handler


    }

    get(path,handler) {
        this.request('GET', path, handler)
    }
    post(path,handler) {
        this.request('POST', path, handler)
    }
    put(path,handler) {
        this.request('PUT', path, handler)
    }
    delete(path,handler) {
        this.request('DELETE', path, handler)
    }
}