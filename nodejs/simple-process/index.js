const spawn = require('child_process').spawn;

function startCluster() {
    const master = spawn('node', ['master.js'], {
        detached : true,
        stdio: 'ignore',
    });

    console.log('守护进程开启 pid: %s, ppid: %s', process.pid, master.pid);

    master.unref();
}

startCluster()