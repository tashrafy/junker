'use strict';
var yaml = require('js-yaml')
  , fs   = require('fs');



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

  var junker = function(locale) {
    locale = locale || 'en';
    this.data = setLocale(locale)[locale].faker;
  };

  junker.prototype.name = function(){
    return require('./junker/name')(this.data.name);
  };

  junker.prototype.internet = function(){
    return require('./junker/internet')(this.data.internet);
  };

  return junker;

})();
