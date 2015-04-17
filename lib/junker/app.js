'use strict';

var helper = require('../helper');

module.exports = function(app){
  return {
    'name'   : helper.fetch(app.app_name),
    // 'author' : helper.interpolate(app.author, app),
    'version': helper.numerify(helper.fetch(app.version))
  };
};
