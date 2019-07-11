'use strict';

/**
 * Module dependencies.
 */

var Client = require('./client').Client;
var codecs = require('./codecs');
var shortcuts = require('./shortcuts');
var tools = require('./tools');

/**
 * Module exports.
 */

exports.Client = Client;

exports.request = shortcuts.request;
exports.get = shortcuts.method('GET');
exports.head = shortcuts.method('HEAD');
exports.post = shortcuts.method('POST');
exports.put = shortcuts.method('PUT');
exports.del = exports['delete'] = shortcuts.method('DELETE');
exports.patch = shortcuts.method('PATCH');

exports.codecs = codecs;
exports.tools = tools;
