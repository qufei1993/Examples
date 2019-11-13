const Redis = require("ioredis");
const redis = new Redis(6379, "127.0.0.1");
const uuidv1 = require('uuid/v1');

function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve();
        }, time || 1000);
    });
}

class RedisLock {
    /**
     * 初始化 RedisLock
     * @param {*} client 
     * @param {*} options 
     */
    constructor (client, options={}) {
        if (!client) {
            throw new Error('client 不存在');
        }

        if (client.status !== 'connecting') {
            throw new Error('client 未正常链接');
        }

        this.lockLeaseTime = options.lockLeaseTime || 2; // 默认锁过期时间 2 秒
        this.lockTimeout = options.lockTimeout || 5; // 默认锁超时时间 5 秒
        this.expiryMode = options.expiryMode || 'EX';
        this.setMode = options.setMode || 'NX';
        this.client = client;
    }
    
    /**
     * 上锁
     * @param {*} key 
     * @param {*} val 
     * @param {*} expire 
     */
    async lock(key, val, expire) {
        const start = Date.now();
        const self = this;

        return (async function intranetLock() {
            try {
                const result = await self.client.set(key, val, self.expiryMode, expire || self.lockLeaseTime, self.setMode);
        
                // 上锁成功
                if (result === 'OK') {
                    console.log(`${key} ${val} 上锁成功`);
                    return true;
                }

                // 锁超时
                if (Math.floor((Date.now() - start) / 1000) > self.lockTimeout) {
                    console.log(`${key} ${val} 上锁重试超时结束`);
                    return false;
                }

                // 循环等待重试
                console.log(`${key} ${val} 等待重试`);
                await sleep(3000);
                console.log(`${key} ${val} 开始重试`);

                return intranetLock();
            } catch(err) {
                throw new Error(err);
            }
        })();
    }

    /**
     * 释放锁
     * @param {*} key 
     * @param {*} val 
     */
    async unLock(key, val) {
        const self = this;
        const script = "if redis.call('get',KEYS[1]) == ARGV[1] then" +
        "   return redis.call('del',KEYS[1]) " +
        "else" +
        "   return 0 " +
        "end";

        try {
            const result = await self.client.eval(script, 1, key, val);

            if (result === 1) {
                return true;
            }
            
            return false;
        } catch(err) {
            throw new Error(err);
        }
    }
}

const redisLock = new RedisLock(redis);

async function test(key) {
    try {
        const id = uuidv1();
        await redisLock.lock(key, id, 20);
        await sleep(3000);
        
        const unLock = await redisLock.unLock(key, id);
        console.log('unLock: ', key, id, unLock);
    } catch (err) {
        console.log('上锁失败', err);
    }  
}

test('name1');
test('name1');