const http = require('http');

const throwCount = {
  uncaughtException: 0,
  unhandledRejection: 0
};

/**
 * graceful
 * @param { Number } options.killTimeout 超时时间
 * @param { Function } options.onError 产生错误信息会执行该回调函数
 * @param { Array } options.servers Http Server
 * @returns
 */
function graceful(options = {}) {
  options.killTimeout = options.killTimeout || 1000 * 30;
  options.onError = options.onError || function () {};
  options.servers= options.servers || [];
  process.on('uncaughtException', error => handleUncaughtException(error, options));
  process.on('unhandledRejection', error => handleUnhandledRejection(error, options));
}

function handleUncaughtException(error, options) {
  throwCount.uncaughtException += 1;
  options.onError(error, 'uncaughtException', throwCount.uncaughtException);

  if (throwCount.uncaughtException > 1) return;
  handleError(options);
};

function handleUnhandledRejection(error, options) {
  throwCount.unhandledRejection += 1;
  options.onError(error, 'unhandledRejection', throwCount.unhandledRejection);

  if (throwCount.unhandledRejection > 1) return;
  handleError(options);
}

function handleError(options) {
  const { servers, killTimeout } = options;
  // 关闭当前请求的链接
  for (const server of servers) {
    console.log('server instanceof http.Server: ', server instanceof http.Server);
    if (server instanceof http.Server) {
      server.on('request', (req, res) => {
        console.log('request: ', req.url);
        req.shouldKeepAlive = false;
        res.shouldKeepAlive = false;
        if (!res._header) {
          res.setHeader('Connection', 'close');
        }
      });
    }
  }

  // 延迟退出
  const timer = setTimeout(() => {
    process.exit(1);
    clearTimeout(timer);
  }, killTimeout);
  
  if (timer && timer.unref) {
    timer.unref();
  }
}

module.exports = graceful;
