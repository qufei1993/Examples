var url = require('url');
var http = require('http');

var httpAgent = new http.Agent({ keepAlive: true });

function request(callback) {
  var options = url.parse('http://example.com/foo.html');

  options.agent = httpAgent;
  options.method = 'GET';
  options.timeout = 10000;

  var req = http.request(options, function (res) {
    var chunks = [];
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      chunks.push(chunk);
    });
    res.on('end', function () {
      callback(null, res.statusCode);
    });
  }).on('error', function (err) {
    callback(err.message);
  });

  req.end();
}

function asyncMapSeries(times, fn) {
  let p = Promise.resolve();
  for (let i = 0; i < times; i++) {
    p = p.then(fn);
  }
  return p;
}

asyncMapSeries(100000,
    function () {
      return new Promise((resolve, reject) => {
        request(function (err, result) {
              if (err) {
                return reject(err)
              }
              return resolve(result)
            }
        );
      })
    }
).then((result) => {
  console.log('All done.')
}).catch((err) => {
  console.log("err", err)
});

setInterval(() => {
  //gc();
  console.log(process.memoryUsage());
}, 5000);