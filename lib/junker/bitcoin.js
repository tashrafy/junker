'use strict';

var helper = require('../helper')
  , crypto = require('crypto')
  , Bitcoin = Bitcoin || {};

Bitcoin.address = (function(str){
  var alphabet = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
    , base = alphabet.length
    console.log(crypto.Hash);
    return crypto.Hash
  // lv = 0
  // str.split('').reverse.each_with_index { |v,i| lv += v.unpack('C')[0] * 256**i }

  // ret = ''
  // while lv > 0 do
  //   lv, mod = lv.divmod(base)
  //   ret << alphabet[mod]
  // end

  // npad = str.match(/^#{0.chr}*/)[0].to_s.size
  // '1'*npad + ret.reverse
})();

module.exports = Bitcoin;
