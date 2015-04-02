'use strict';

var Helper = Helper || {};

Helper.randomSelect = function(array){
  return array[Math.floor(Math.random() * array.length)];
};

module.exports = Helper;
