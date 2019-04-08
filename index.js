"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

function errorIfNotString(arg) {
  if (typeof arg !== 'string')  throw new Error('Input must be string');
}
exports.errorIfNotString = errorIfNotString;
