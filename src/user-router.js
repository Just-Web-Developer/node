const Router = require('../framework/Router')

const router = new Router()

const users = [
    {id:1, name:'Vasa'},
    {id:2, name:'Petya'}
]

router.get('/users', (req, res)=>{
    res.send(users)
})
router.post('/users', (req, res)=>{
    res.send(users)
})

module.exports = router