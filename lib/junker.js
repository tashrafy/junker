'use strict';
var yaml = require('js-yaml')
  , fs   = require('fs')
  , address = require('./junker/address')
  , app = require('./junker/app')
  , avatar = require('./junker/avatar')
  , business = require('./junker/business')
  , commerce = require('./junker/commerce')
  , company = require('./junker/company')
  , internet = require('./junker/internet')
  , name = require('./junker/name')
  , number = require('./junker/number')
  , team = require('./junker/team')
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

  Junker.prototype.Address = function(){
    var data = this.data.address;
    data.name = this.data.name;

    return address(data);
  };

  Junker.prototype.App = function(){
    var data = this.data.app;
    data.name = this.data.name;

    return app(data);
  };

  Junker.prototype.Avatar = avatar

  Junker.prototype.Name = function(){
    return name(this.data.name);
  };

  Junker.prototype.Business = function(){
    return business(this.data.business);
  };

  Junker.prototype.Commerce = function(){
    return commerce(this.data.commerce);
  };

  Junker.prototype.Company = function(){
    var data = this.data.company;
    data.name = this.data.name;

    return company(data);
  };

  Junker.prototype.Number = number;

  Junker.prototype.Internet = function(){
    return internet(this.data.internet);
  };

  Junker.prototype.Team = function(){
    var data = this.data.team;
    data.address = this.data.address;

    return team(data);
  };

  return Junker;

})();
