const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

const print = function() {
    const memoryUsage = process.memoryUsage();
    console.log(
        `heapTotal: ${format(memoryUsage.heapTotal)}, heapUsed: ${format(memoryUsage.heapUsed)}`
    );
}

const useMem = function () {
    var size = 20 * 1024 * 1024;
    var arr = new Array(size);
    for (var i = 0; i < size; i++) {
        arr[i] = 0;
    }

    return arr;
}

print();
const total = [];
setInterval(function() {
    total.push(useMem());
    print();
}, 2000)

//--max-old-space-size=2048