const os = require('os')
const cluster = require('cluster')

if (cluster.isMaster){
    for (let i = 0; i < os.cpus().length-2; i++ ){
        cluster.fork()
    }
    cluster.on('exit', (worker) => {
        console.log(`Worker with pid=${process.pid} ended`)
        cluster.fork()
    })
} else {
    console.log(`Worker with pid=${process.pid} started`)

    setInterval(()=>{
        console.log(`Worker with pid=${process.pid} still work`)
    }, 5000)
}
