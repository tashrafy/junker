'use strict';

var helper = require('../helper');

/**
 * Fetch desired number of apartments randomly
 * @param  {Number}  max          - maximum number of departments
 * @param  {Boolean} fixed_amount - whether to choose the fixed amount
 *                                  given, or atleast the max given
 * @return {String}               - list of departments
 */
function getDepartments(commerce, max, fixed_amount){
  // TODO: implement with max and fixed_amount params;
  // currently using defaults
  fixed_amount = fixed_amount || false;
  max = max || 3;

  var last
    , departments = []
    , itr = 0;
  for(itr; itr < max; itr++){
    departments.push(helper.fetch(commerce.department));
  }
  last = departments.pop();
  return departments.join(', ') + ', & ' + last;
}

module.exports = function(commerce){
  return {
    'department' : getDepartments(commerce),
    'color': helper.fetch(commerce.color),
    'price': parseFloat((Math.random() * 100).toFixed(2)),
    'product_name': helper.fetch(commerce.product_name.adjective) + ' ' +
                    helper.fetch(commerce.product_name.material)  + ' ' +
                    helper.fetch(commerce.product_name.product)
  };
};
