'use strict';
var yaml = require('js-yaml')
  , fs   = require('fs')
  , business = require('./junker/business')
  , name = require('./junker/name')
  , number = require('./junker/number')
  , internet = require('./junker/internet')
  , address = require('./junker/address')
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

  Junker.prototype.Business = function(){
    return business(this.data.business);
  };

  Junker.prototype.Number = number;

  Junker.prototype.Internet = function(){
    return internet(this.data.internet);
  };

  Junker.prototype.Address = function(){
    var data = this.data.address;
    data.name = this.data.name;

    return address(data);
  };

  return Junker;

})();
