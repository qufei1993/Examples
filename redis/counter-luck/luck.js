const Redis = require('ioredis');
const redis = new Redis(6379, '127.0.0.1');

const fs = require('fs');
const { Console } = require('console');
const output = fs.createWriteStream('./stdout.log');
const errorOutput = fs.createWriteStream('./stderr.log');
const logger = new Console(output, errorOutput);

async function luck() {
    const count = 10;
    const key = 'counter:luck';
    const keyExists = await redis.exists(key);

    if (!keyExists) {
        await redis.setnx(key, 0);
    }

    const result = await redis.incr(key);

    if (result > count) { // 优惠券领取超限
        logger.error('luck failure', result);
        return;
    }

    console.log('luck success', result);

    logger.info('luck success', result);
}

module.exports = luck;