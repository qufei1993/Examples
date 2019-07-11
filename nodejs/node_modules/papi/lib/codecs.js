/**
 * Encoders/Decoders
 */

'use strict';

/**
 * Module dependencies.
 */

var querystring = require('querystring');

/**
 * Text
 */

var text = {};

text.encode = function(data) {
  return Buffer.from(data, 'utf8');
};

text.decode = function(data) {
  return Buffer.isBuffer(data) ? data.toString() : data;
};

/**
 * JSON
 */

var json = {};

json.encode = function(data) {
  return text.encode(JSON.stringify(data));
};

json.decode = function(data) {
  return JSON.parse(text.decode(data));
};

/**
 * Form
 */

var form = {};

form.encode = function(data) {
  return text.encode(querystring.stringify(data));
};

form.decode = function(data) {
  return querystring.parse(text.decode(data));
};

/**
 * Module exports.
 */

exports.json = json;
exports.form = form;
exports.text = text;
