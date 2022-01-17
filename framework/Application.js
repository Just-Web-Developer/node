const http = require('http')
const EventEmitter = require('events')

module.exports = class Application {
    constructor() {
        this.emmiter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = []
    }

    use(middleware){
        this.middlewares.push(middleware)
    }

    listen(port, callback) {
        this.server.listen(port, callback)
    }

    addRouter(router){
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path]
            Object.keys(endpoint).forEach((method) => {
                this.emmiter.on(this._getRuteMask(path, method), (req,res)=>{
                    const handler = endpoint[method]
                    this.middlewares.forEach(middleware => middleware(req,res))
                    handler(req,res)
                })
            })
        })
    }

    _createServer(){
        return http.createServer((req, res) => {
            if (req.headers.host !== process.env.ALLOWED){
                res.end(req.url)
            }
            const emitted = this.emmiter.emit( this._getRuteMask(req.url, req.method) , req, res)
            if(!emitted){
                res.end(req.url)
            }
        })
    }

    _getRuteMask(path, method) {
        return `[${path}]:[${method}]`
    }
}