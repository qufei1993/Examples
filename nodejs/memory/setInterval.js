const format = function (bytes) {
    return (bytes / 1024 / 1024).toFixed(2) + ' MB';
};

const print = function() {
    const memoryUsage = process.memoryUsage();
    console.log(`heapTotal: ${format(memoryUsage.heapTotal)}, heapUsed: ${format(memoryUsage.heapUsed)}`);
}

setInterval(function() {
    for (let i=0; i< 100000; i++) {
        setInterval(function() {
            
        }, 1000)
    }

    print()
}, 100)

const memoryStore = new Map();

exports.getUserToken = function (key) {
    const token = memoryStore.get(key);

    if (token && Date.now() - token.now > 2 * 60) {
        return token;
    }

    const dbToken = db.get(key);
    memoryStore.set(key, {
        now: Date.now(),
        val: dbToken,
    });
    return token;
}