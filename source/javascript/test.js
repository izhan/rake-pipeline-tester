"use strict";
var get = function(obj, key) {
  return obj[key];
};

var set = function(obj, key, value) {
  obj[key] = value;
  return obj;
};

exports.get = get;
exports.set = set;

import { get, set } from 'ember';
