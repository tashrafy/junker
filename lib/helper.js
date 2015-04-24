'use strict';

var Helper = Helper || {};

Helper.fetch = function(array){
  return array[Math.floor(Math.random() * array.length)];
};

Helper.parsed = function(str){
  return str.replace(/[\}#\{]/g, '').split(' ');
};

Helper.random = function(start, end){
  var min, max;
  min = Math.min(start, end);
  max = Math.max(start, end);

  if(min === 0 && max === 1){ return Math.random(); }

  return Math.floor(Math.random() * (max - min)) + min;
};

Helper.numerify = function(num_string){
  var matched
    , random
    , itr = 0
    , placeholderLen = num_string.match(/#/g).length
    , regex = /#/g;


  for(itr; itr < placeholderLen; itr++){
    num_string = num_string.replace(/#/, Math.round((Math.random() * 9)));
  }
  return num_string;
};

Helper.letterify = function(letter_string){
  var charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    , randomChar = charSet.charAt(Math.floor(Math.random() * charSet.length));

  return letter_string.toString().replace(/\\?/, randomChar);
};

Helper.bothify = function(string){
  return this.letterify(this.numerify(string));
};

Helper.evaluate = function(string, collection){
  var matchKey = /{([^}]+)}/g
    , key
    , value
    , fields
    , nested
    , set
    , self = this
    , evaluated = string;

  while(value = matchKey.exec(string)){
    fields = value[1].toLowerCase().split('.');
    key = fields.shift();
    nested = fields.pop();
    set = nested ? collection[key][nested] : collection[key];
    evaluated = evaluated.replace(value[1], self.fetch(set));
  }

  return evaluated;
};

Helper.interpolate = function(collection, type){
  var self = this
    ;

  var def = collection.map(function(item){
    item = self.evaluate(item, type);
    return self.parsed(item);
  });

  return self.fetch(def).join(', ').replace(/,/g, '');
};

module.exports = Helper;
