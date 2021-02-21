// spawns multiple instances of the app
import * as cluster from 'cluster'
import * as os from 'os'

const CPUS = os.cpus()
if (cluster.isMaster) {
  CPUS.forEach(() => {
    cluster.fork()
  })
  cluster.on('listening', function (worker) {
    console.log('Cluster %d connected', worker.process.pid)
  })
  cluster.on('disconnect', function (worker) {
    console.log('Cluster %d disconnected', worker.process.pid)
  })
  cluster.on('exit', function (worker) {
    console.log('Cluster %d is dead', worker.process.pid)
    // Ensuring a new cluster will start if an old one dies
    cluster.fork()
  })
} else {
  import('./src/index')
}
