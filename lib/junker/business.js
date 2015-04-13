'use strict';

var helper = require('../helper');

module.exports = function(business){
  return {
    'credit_card_number'      : helper.fetch(business.credit_card_numbers),
    'credit_card_expiry_date' : new Date(helper.fetch(business.credit_card_expiry_dates)),
    'credit_card_type'        : helper.fetch(business.credit_card_types)
  };
};
