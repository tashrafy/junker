'use strict';

var helper = require('../helper')
  , number = require('./number')
  , Code = Code || {};

function generate_base10_isbn(){
  var code_num = number.number(9).toString()
  , sum = 0
  , remainder;

  for(var i = 0; i < code_num.length; i++){
    sum += (i + 1) * code_num[i];
  }
  remainder = sum % 11;
  return code_num + '-' + (remainder == '10' ? 'X' : remainder);
}

function generate_base13_isbn(){
  var code_num = number.number(12).toString()
  , sum = 0;

  for(var i = 0; i < code_num.length; i++){
    sum += i % 2 == 0 ? parseInt(code_num[i]) : parseInt(code_num[i] * 3);
  }
  return code_num + '-' + (10 - (sum % 10));
}

Code.isbn = function(digit){
  return digit === 10 ? generate_base10_isbn() : generate_base13_isbn();
};

Code.ean = function(digit){
  // return digit === 8 ? generate_base10_isbn() : generate_base13_isbn();
};

module.exports = Code;
