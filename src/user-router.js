const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id:1, name:'Vasa'},
    {id:2, name:'Petya'}
]

router.get('/users', (req, res)=>{
    res.writeHead(200, {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': 'example.com'
    })
    res.end(JSON.stringify(users))
})
router.post('/users', (req, res)=>{
    res.end(JSON.stringify(users))
})

module.exports = router