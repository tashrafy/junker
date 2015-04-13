'use strict';

var helper = require('../helper');

module.exports = function(team){
  return {
    'name'     : helper.interpolate(team.name, team),
    'creature' : helper.fetch(team.creature),
    'state'    : helper.fetch(team.address.state).toUpperCase()
  };
};
