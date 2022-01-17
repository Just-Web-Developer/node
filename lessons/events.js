const Emitter = require('events')

const emitter = new Emitter();

emitter.on('message', (data, second, third) => {
    console.log(data)
    console.log(second)
    console.log(third)
})

if (process.env.MESSAGE){
    emitter.emit('message', 'sdfsdfs', 'sdfsdf1')
} else{
    emitter.emit('message', 'sdfsdfsdf', 'asdads1')
}