'use strict';

var helper = require('../helper');

module.exports = function(phone){
  return {
    'phone_number': helper.numerify(helper.fetch(phone.phone_number.formats)),
    'cell_phone': helper.numerify(helper.fetch(phone.cell_phone.formats)),
  };
};
