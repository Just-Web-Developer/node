const http = require('http')

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res) => {
    res.writeHead(200,{
        'Content-type': 'text/html; charset=utf-8'
    })
    res.end(req.headers.origin)
})

server.listen(PORT, ()=>{
    console.log(`Server started on PORT ${PORT}`)
})