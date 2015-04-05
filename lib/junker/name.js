'use strict';

var helper = require('../helper');

module.exports = function(name){
  var placeholder = name.name
    , title = helper.fetch(name.title.descriptor) + ' ' +
              helper.fetch(name.title.level)      + ' ' +
              helper.fetch(name.title.job);

  return {
    'first_name': helper.fetch(name.first_name),
    'last_name' : helper.fetch(name.last_name),
    'prefix'    : helper.fetch(name.prefix),
    'suffix'    : helper.fetch(name.suffix),
    'name'      : helper.interpolate(name.name, name),
    'title'     : title
  };
};
