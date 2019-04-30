const request = require('request');

module.exports = {
    get: url => {
        return new Promise((resolve, reject) => {
            request({
                url,
                method: 'GET',
            }, (err, response) => {
                if(err){
                    reject(err);
                }else{
                    resolve(response.body);
                }
            });
        });
    }
}