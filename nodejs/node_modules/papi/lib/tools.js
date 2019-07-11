/**
 * Random useful tools.
 */

'use strict';

/**
 * Walk "standard" library
 */

function walk(obj, name, tree) {
  switch (arguments.length) {
    case 1:
      name = obj.name;
      tree = { name: name };
      break;
    case 2:
      tree = { name: name };
      break;
    case 3:
      break;
    default:
      throw new Error('invalid arguments');
  }

  Object.keys(obj.prototype).forEach(function(key) {
    var v = obj.prototype[key];

    if (!key.match(/^[a-z]+/)) return;
    if (!tree.methods) tree.methods = {};

    tree.methods[key] = {
      name: key,
      value: v,
    };

    var meta = obj.meta || {};

    tree.methods[key].type = meta[key] && meta[key].type || 'callback';
  });

  Object.keys(obj).forEach(function(key) {
    var v = obj[key];

    if (!key.match(/^[A-Z]+/)) return;
    if (!tree.objects) tree.objects = {};

    tree.objects[key] = {
      name: key,
      value: v,
    };

    walk(v, key, tree.objects[key]);
  });

  return tree;
}

/**
 * Callback wrapper
 */

function fromCallback(fn) {
  return new Promise(function(resolve, reject) {
    try {
      return fn(function(err, data) {
        if (err) return reject(err);
        return resolve(data);
      });
    } catch (err) {
      return reject(err);
    }
  });
}

/**
 * Wrap callbacks with promises
 */

function promisify(client, wrapper) {
  if (!client) throw new Error('client required');
  if (!wrapper) {
    if (global.Promise) {
      wrapper = fromCallback;
    } else {
      throw new Error('wrapper required');
    }
  } else if (typeof wrapper !== 'function') {
    throw new Error('wrapper must be a function');
  }

  var patch = function(client, tree) {
    Object.keys(tree.methods).forEach(function(key) {
      var method = tree.methods[key];
      var fn = client[method.name];

      if (method.type === 'callback' && !client[method.name]._wrapCallback) {
        client[method.name] = function() {
          // use callback if provided
          if (typeof arguments[arguments.length - 1] === 'function') {
            return fn.apply(client, arguments);
          }

          // otherwise return promise
          var args = Array.prototype.slice.call(arguments);
          return wrapper(function(callback) {
            args.push(callback);
            return fn.apply(client, args);
          });
        };
        client[method.name]._wrapped = true;
      }
    });

    if (tree.objects) {
      Object.keys(tree.objects).forEach(function(key) {
        var clientKey = key[0].toLowerCase() + key.slice(1);
        patch(client[clientKey], tree.objects[key]);
      });
    }
  };

  patch(client, walk(client.constructor));
}

/**
 * Module exports.
 */

exports.promisify = promisify;
exports.walk = walk;
