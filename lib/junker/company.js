'use strict';

var helper = require('../helper')
  , number = require('./number');

function combinePhrases(collection){
  return collection.map(function(item){
    return helper.fetch(item);
  }).join(' ');
};

// TODO: Interpolate for name fetch
module.exports = function(company){
  return {
    // 'name'   : helper.interpolate(company.name, company),
    'suffix'       : helper.fetch(company.suffix),
    'catch_phrase' : combinePhrases(company.buzzwords),
    'bs'           : combinePhrases(company.bs),
    'ein'          : number.number(2) + '-' + number.number(7),
    'duns_number'  : number.number(2) + '-' + number.number(3) + '-' + number.number(4),
    'logo'         : 'http://pigment.github.com/fake-logos/logos/medium/color/' + helper.random(1, 13) + '.png'
  };
};
