'use strict';

var helper = require('../helper')
  , bigi = require('bigi')
  , btc = require('bitcoinjs-lib')
  , Bitcoin = Bitcoin || {};

Bitcoin.address = function(string){
  string = string || 'random';
  var buffer = bigi.fromBuffer(btc.crypto.sha256(string));
  return new btc.ECKey(buffer).pub.getAddress().toString();
};

module.exports = Bitcoin;
