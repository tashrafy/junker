'use strict';

var helper = require('../helper');

module.exports = function(name){
  var title = helper.randomSelect(name.title.descriptor) + ' ' +
              helper.randomSelect(name.title.level)      + ' ' +
              helper.randomSelect(name.title.job);

  return {
    'first_name': helper.randomSelect(name.first_name),
    'last_name' : helper.randomSelect(name.last_name),
    'prefix'    : helper.randomSelect(name.prefix),
    'suffix'    : helper.randomSelect(name.suffix),
    'title'     : title
  };
};
