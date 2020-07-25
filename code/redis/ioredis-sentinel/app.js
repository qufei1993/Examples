const Redis = require('ioredis');
const redis = new Redis({
    sentinels:[
        { host: '192.168.6.128', port: 26379 },
        { host: '192.168.6.128', port: 26379 },
        { host: '192.168.6.128', port: 26379 },
    ],
    name: 'mymaster',
});

let count = 0;
setInterval(async function() {
    count++;
    const key = `k_${count}`;

    try {
        await redis.set(key, count);
        console.log(key, redis.get(key));
    } catch (err) {
        console.error(err);
    }
}, 1000)