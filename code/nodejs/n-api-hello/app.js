// const hello = require('./build/Release/hello.node');
// console.log(hello.getNApiInfo());

const hello = require('bindings')('hello');
console.log(hello.getNApiInfo());
