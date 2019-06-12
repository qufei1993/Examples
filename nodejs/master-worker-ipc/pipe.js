const spawn = require('child_process').spawn;
const child = spawn('node', ['worker.js']) // cwd 指定子进程的工作目录，默认当前目录
child.stdout.pipe(process.stdout);
console.log(process.pid, child.pid);