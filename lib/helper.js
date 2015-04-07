'use strict';

var Helper = Helper || {};

Helper.fetch = function(array){
  return array[Math.floor(Math.random() * array.length)];
};

Helper.parsed = function(str){
  return str.replace(/[\}#\{]/g, '').split(' ');
};

Helper.random = function(max, min){
  return Math.floor(Math.random() * (max - min)) + min;
};

Helper.interpolate = function(collection, type){
  var self = this;

  var def = collection.map(function(item){
    var parsed = self.parsed(item);
    parsed.forEach(function(key, i){
      parsed[i] = self.fetch(type[key]);
    });
    return parsed;
  });

  return self.fetch(def).join(', ').replace(/,/g, '');
};

module.exports = Helper;
