const Consul = require('consul');

class ConsulConfig {
    constructor () {
        const serviceName = 'consul-demo';
        this.consul = new Consul({
            host: '192.168.6.128',
            port: 8500,
            promisify: true,
        });
        this.consul.agent.service.register({
            name: serviceName,
            address: '192.168.20.193',
            port: 3000,
            check: {
                http: 'http://192.168.20.193:3000/health',
                interval: '10s',
                timeout: '5s',
            }
        }, function(err, result) {
            if (err) {
                console.error(err);
                throw err;
            }

            console.log(serviceName + ' 注册成功！');
        })
    }

    async getConfig(key) {
        const result = await this.consul.kv.get(key);

        if (!result) {
            return Promise.reject(key + '不存在');
        }

        return JSON.parse(result.Value);
    }

    async getUserConfig(key) {
        const result = await this.getConfig('develop/user');

        if (!key) {
            return result;
        }

        return result[key];
    }

    async setUserConfig(key, val) {
        const user = await this.getConfig('develop/user');

        user[key] = val;

        return this.consul.kv.set('develop/user', JSON.stringify(user))
    }
}

module.exports = ConsulConfig;