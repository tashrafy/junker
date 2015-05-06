'use strict';
var yaml = require('js-yaml')
  , fs   = require('fs')
  , address = require('./junker/address')
  , app = require('./junker/app')
  , avatar = require('./junker/avatar')
  , bitcoin = require('./junker/bitcoin')
  , business = require('./junker/business')
  , code = require('./junker/code')
  , commerce = require('./junker/commerce')
  , company = require('./junker/company')
  , hacker = require('./junker/hacker')
  , internet = require('./junker/internet')
  , name = require('./junker/name')
  , number = require('./junker/number')
  , phone_number = require('./junker/phone_number')
  , team = require('./junker/team')
  ;

function setLocale(loc){
  var file = __dirname + '/locales/' + loc + '.yml';

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

  Junker.prototype.Bitcoin = function(){
    return bitcoin;
  };

  Junker.prototype.Business = function(){
    return business(this.data.business);
  };

  Junker.prototype.Code = function(){
    return code;
  };

  Junker.prototype.Commerce = function(){
    return commerce(this.data.commerce);
  };

  Junker.prototype.Company = function(){
    var data = this.data.company;
    data.name = this.data.name;

    return company(data);
  };

  Junker.prototype.Hacker = function(){
    return hacker(this.data.hacker);
  };

  Junker.prototype.Number = number;

  Junker.prototype.PhoneNumber = function(){
    var obj = {
      'phone_number': this.data.phone_number,
      'cell_phone': this.data.cell_phone
    };
    return phone_number(obj);
  };

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
