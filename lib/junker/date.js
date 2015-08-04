'use strict';

var helper = require('../helper')
  , JunkerDate = JunkerDate || {};

JunkerDate.between = function(from, to){
  from = from ? new Date(from) : new Date();
  to = to ? new Date(to) : new Date();
  console.log('from', from, '\nto', to);
  return new Date(helper.random(from.getTime(), to.getTime()));
};

JunkerDate.forward = function(days){
  var now = new Date()
    , current = now.getDate();

  days = days || 365;

  return this.between(new Date(now.setDate(1)), new Date(now.setDate(current + days)));
};

JunkerDate.backward = function(days){
  var now = new Date()
    , current = now.getDate();

  days = days || 365;
  return new Date(now.setDate(current + days));
};

module.exports = JunkerDate;
