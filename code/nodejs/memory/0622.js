const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

const print = function() {
    const memoryUsage = process.memoryUsage();

    console.log(JSON.stringify({
        rss: format(memoryUsage.rss),
        heapTotal: format(memoryUsage.heapTotal),
        heapUsed: format(memoryUsage.heapUsed),
        external: format(memoryUsage.external),
    }));
}

print();

function Engine (power) {
    this.power = power
}
  
function Car (opts) {
    this.name = opts.name
    this.engine = new Engine(opts.power)
}

let LightningMcQueen = new Car({name: 'Lightning McQueen', power: 900})
let SallyCarrera = new Car({name: 'Sally Carrera', power: 500})
let Mater = new Car({name: 'Mater', power: 100})
  

print();
//Mater = undefined;
setInterval(function() {
    print();
}, 1000);