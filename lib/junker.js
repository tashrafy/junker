'use strict';
var yaml = require('js-yaml')
  , fs   = require('fs')
  , name = require('./junker/name')
  , number = require('./junker/number')
  , internet = require('./junker/internet')
  ;

function setLocale(loc){
  var file = './lib/locales/' + loc + '.yml';

  try {
    return yaml.safeLoad(fs.readFileSync(file, 'utf8'));
  } catch(e) {
    console.log('Please verify that YAML files exist.');
    throw e;
  }
}

module.exports = (function() {

  var Junker = function(locale) {
    locale = locale || 'en';
    this.data = setLocale(locale)[locale].faker;
  };

  Junker.prototype.Name = function(){
    return name(this.data.name);
  };

  Junker.prototype.Number = number;

  Junker.prototype.Internet = function(){
    return internet(this.data.internet);
  };

  return Junker;

})();
