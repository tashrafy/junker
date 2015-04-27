'use strict';

var helper = require('../helper')
  , crypto = require('crypto')
  , bigint = require('big-integer')
  , Bitcoin = Bitcoin || {};

function base58(str){
  var alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    , base = alphabet.length
    , lv = 0
    , ret = []
    , mod
    , strArray = [];

  for(var i in str){ strArray.push(str[i]); }
  strArray = strArray.reverse();
  for(var i in strArray){
    lv += parseInt(strArray[i].charCodeAt()) * Math.pow(256, i);
  }

  while(lv > 0){
    mod = bigint(lv).divmod(base).remainder.value.pop();
    lv = Math.floor(lv / base);
    ret.push(alphabet[mod]);
  }
  return ret.reverse().join('');

  // npad = str.match(/^#{0.chr}*/)[0].to_s.size
  // '1'*npad + ret.reverse
}

Bitcoin.address = function(str){
  var base58Str = base58(str);
  crypto.randomBytes(20, function(ex, buf) {
    var token = buf.toString('hex');
    console.log(token, token.length)
  });
  return base58Str;
};

module.exports = Bitcoin;
